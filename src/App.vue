<template>
  <div class="app">
    <posts-header :title="msg" @openDialog="handleOpenDialog"></posts-header>
    <app-dialog ref="dialog">
      <form-add-post @create="addPost" />
    </app-dialog>
    <app-loader v-if="postLoading" style="margin: auto" :visible="true"></app-loader>
    <div v-else class="posts">
      <div class="posts__controls">
        <app-input v-model="filterTerm" placeholder="filter posts..."></app-input>
        <app-select :options="sortOptions" v-model="currentSort"></app-select>
      </div>
      <posts-list :posts="filteredPosts" @delete="deletePost" />
      <app-pagination
        :page="currentPage"
        :maxPage="maxPages"
        @nextPage="handleNextPage"
        @prevPage="handlePrevPage"
      ></app-pagination>
    </div>
  </div>
</template>

<script>
import PostsList from '@/components/PostsList.vue'
import PostsHeader from '@/components/PostsHeader.vue'
import FormAddPost from './components/FormAddPost.vue'

export default {
  components: {
    PostsList,
    PostsHeader,
    FormAddPost
  },
  data() {
    return {
      msg: 'Posts App',
      posts: [],
      postLoading: false,
      maxPages: 10,
      currentPage: 1,
      sortOptions: [
        { name: 'Id', value: 'id' },
        { name: 'Title', value: 'title' },
        { name: 'Body', value: 'body' }
      ],
      currentSort: 'title',
      filterTerm: ''
    }
  },
  methods: {
    addPost(post) {
      this.posts.push(post)
    },
    deletePost(id) {
      this.posts = [...this.posts.filter((post) => post.id !== id)]
    },
    handleOpenDialog() {
      this.$refs.dialog.open()
    },
    handleNextPage() {
      if (this.currentPage < this.maxPages) {
        this.currentPage = this.currentPage + 1
        this.getPosts()
      }
    },
    handlePrevPage() {
      if (this.currentPage > 1) {
        this.currentPage = this.currentPage - 1
        this.getPosts()
      }
    },
    async getPosts() {
      try {
        this.postLoading = true
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${this.currentPage}`
        )
        const data = await response.json()
        this.posts = data
      } catch (error) {
        console.error(error)
      } finally {
        this.postLoading = false
      }
    },
    sortPosts() {
      const _posts = [...this.posts]
      return _posts.sort((a, b) => {
        if (this.currentSort === 'id') return a[this.currentSort] - b[this.currentSort]
        else if (this.currentSort === 'body')
          return a[this.currentSort].length - b[this.currentSort].length
        else return a[this.currentSort].localeCompare(b[this.currentSort])
      })
    }
  },
  mounted() {
    this.getPosts()
  },
  computed: {
    sortedPosts() {
      return this.sortPosts()
    },
    filteredPosts() {
      return this.filterTerm.length >= 3
        ? this.sortedPosts.filter((post) =>
            post.title.toLowerCase().includes(this.filterTerm.toLowerCase())
          )
        : this.sortedPosts
    }
  }
}
</script>

<style scoped lang="scss">
.app {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
.posts {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  &__controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>

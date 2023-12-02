<template>
  <ul v-if="posts.length" class="posts-list">
    <TransitionGroup name="posts-list">
      <posts-list-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @delete="(id) => $emit('delete', id)"
      />
    </TransitionGroup>
  </ul>
  <span v-else>no posts yet... add one above ↑</span>
</template>

<script>
import PostsListItem from '@/components/PostsListItem.vue'
export default {
  components: {
    PostsListItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.posts-list {
  margin: 0;
  padding: 0;
  list-style-type: none;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &-enter-active,
  &-leave-active,
  &-move {
    transition: all 0.5s ease;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateX(100px);
  }
}
</style>

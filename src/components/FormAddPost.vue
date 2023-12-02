<template>
  <form @submit="createPost" class="form" method="dialog">
    <app-input v-model="post.title" placeholder="post title" />
    <app-input v-model="post.body" placeholder="post body" />
    <app-button type="submit" formmethod="dialog">Add Post</app-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  background-color: var(--color-light);
  border: 4px solid var(--color-shade);
  border-radius: 8px;
  width: 100%;
}
</style>

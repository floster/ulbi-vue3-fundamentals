<template>
  <header class="posts-header">
    <h3>{{ title }}</h3>
    <div class="posts-header__buttons">
      <app-button class="m-alt" @click="$emit('getPosts')">get posts</app-button>
      <app-button @click="$emit('openDialog')">new post</app-button>
    </div>
  </header>
</template>

<script>
export default {
  emits: ['openDialog', 'getPosts'],
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.posts-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  &__buttons {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>

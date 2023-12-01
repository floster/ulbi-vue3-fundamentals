<template>
  <li class="posts-list__item">
    <span>{{ post.id }} - {{ post.title }}</span>
    <p>{{ post.body }}</p>
    <app-button class="m-square m-danger m-absolute" @click="$emit('delete', post.id)"
      >×</app-button
    >
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.posts-list__item {
  position: relative;
  z-index: 1;
  border: 1px solid lightblue;
  border-radius: 2px;
  padding: 0.5rem 1rem;
}
</style>

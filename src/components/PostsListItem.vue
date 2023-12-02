<template>
  <li class="posts-item">
    <span class="posts-item__id">{{ post.id }}</span>
    <div class="posts-item__content">
      <h4>{{ post.title }}</h4>
      <p>{{ post.body }}</p>
    </div>
    <app-button class="m-square m-danger" @click="$emit('delete', post.id)">×</app-button>
    <app-button class="m-square m-alt" @click="$router.push(`/posts/${post.id}`)">➡</app-button>
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
.posts-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid var(--color-light);
  background-color: white;
  border-radius: 2px;
  padding: 1rem;

  &__id {
    flex-basis: 1rem;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex-grow: 1;
  }
  .app-button {
    flex-shrink: 0;
  }
}
</style>

<template>
  <header class="app-header">
    <h3 class="app-header__title">Ulbi Vue3 Course</h3>
    <nav class="app-header__nav">
      <router-link to="/">Home</router-link>
      <router-link to="/posts">Posts</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem;
  font-family: var(--font-impact);
  background-color: var(--color-shade);

  &__title {
    color: var(--color-light);
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  a {
    color: var(--color-light);
  }
}
</style>

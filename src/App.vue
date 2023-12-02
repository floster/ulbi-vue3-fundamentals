<template>
  <div class="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  components: { AppHeader }
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  background-color: #eceff1;
}
</style>

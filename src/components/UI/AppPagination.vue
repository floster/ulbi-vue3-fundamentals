<template>
  <div class="app-pagination">
    <app-button class="m-square m-alt" @click="$emit('prevPage')">←</app-button>
    <span>{{ page }} / {{ maxPage }}</span>
    <app-button class="m-square m-alt" @click="$emit('nextPage')">→</app-button>
  </div>
</template>

<script>
export default {
  name: 'app-pagination',
  props: {
    page: {
      type: Number,
      required: true
    },
    maxPage: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.app-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
</style>

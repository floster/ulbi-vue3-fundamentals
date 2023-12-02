<template>
  <dialog class="app-dialog" ref="dialog">
    <header class="app-dialog__header">
      <h3>{{ title }}</h3>
      <app-button class="m-square m-danger m-absolute" @click="close">×</app-button>
    </header>
    <slot></slot>
  </dialog>
</template>

<script>
export default {
  name: 'app-dialog',
  props: {
    title: {
      type: String,
      default: 'App Dialog title'
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    open() {
      this.$refs.dialog.showModal()
    },
    close() {
      this.$refs.dialog.close()
    }
  },
  expose: ['open']
}
</script>
<style lang="scss" scoped>
.app-dialog {
  margin: auto;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: transparent;
  overflow: hidden;
  width: 98%;
  max-width: 32rem;
  box-shadow: 0 2rem 6rem -1.5rem black;
  backdrop-filter: blur(10px);

  &::backdrop {
    background: linear-gradient(90deg, #f8d5c6, #2e537c);
    opacity: 0.95;
  }

  &__header {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 0.25rem;
    margin-bottom: 1rem;
    font-family: var(--font-impact);
    color: var(--color-shade);
  }

  .app-button {
    right: 0.25rem;
  }
}
</style>

<template>
  <dialog class="app-dialog" ref="dialog">
    <header class="app-dialog__header">
      <h4>{{ title }}</h4>
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
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: transparent;
  overflow: hidden;
  width: 98%;
  max-width: 32rem;
  box-shadow: 0 1rem 2rem -4px darkslategrey;

  &::backdrop {
    background-image: linear-gradient(45deg, magenta, rebeccapurple, dodgerblue, green);
    opacity: 0.85;
  }

  &__header {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 0.25rem;
    min-height: 2rem;
  }

  .app-button {
    right: 0.25rem;
  }
}
</style>

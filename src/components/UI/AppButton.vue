<template>
  <button :type="type" class="app-button"><slot></slot></button>
</template>

<script>
export default {
  name: 'app-button',
  props: {
    type: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style scoped lang="scss">
.app-button {
  border: 1px solid var(--color-primary);
  background-color: var(--color-primary);
  border-radius: 2px;
  height: 2.4rem;
  color: white;
  padding: 0 1rem;

  &:hover {
    border-color: seagreen;
    background-color: seagreen;
  }

  &.m-alt {
    background-color: var(--color-accent);
    border-color: var(--color-accent);

    &:hover {
      background-color: mediumorchid;
      border-color: mediumorchid;
    }
  }

  &.m-danger {
    border-color: var(--color-danger);
    background-color: var(--color-danger);

    &:hover {
      border-color: salmon;
      background-color: salmon;
    }
  }

  &.m-square {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
  }

  &.m-absolute {
    position: absolute;
    z-index: 1;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>

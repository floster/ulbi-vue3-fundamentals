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
  border: 1px solid lightseagreen;
  background-color: lightseagreen;
  border-radius: 2px;
  height: 2rem;
  color: white;
  padding: 0 1rem;

  &:hover {
    border-color: seagreen;
    background-color: seagreen;
  }

  &.m-alt {
    background-color: mediumvioletred;
    border-color: mediumvioletred;

    &:hover {
      background-color: mediumorchid;
      border-color: mediumorchid;
    }
  }

  &.m-danger {
    border-color: lightsalmon;
    background-color: lightsalmon;

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

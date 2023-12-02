<template>
  <input :value="modelValue" @input="handleInput" :type="type" class="app-input" />
</template>

<script>
export default {
  name: 'app-input',
  emits: ['update:modelValue'],
  props: {
    type: {
      type: String,
      default: 'text'
    },
    modelValue: [String, Number]
  },
  methods: {
    handleInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-input {
  border: 1px solid steelblue;
  border-radius: 2px;
  height: 2.4rem;
  padding: 0 1rem;
}
</style>

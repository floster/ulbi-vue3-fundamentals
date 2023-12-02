<template>
  <label class="app-input__label">
    <input class="app-input" type="checkbox" :checked="modelValue" @change="checkboxChange" />
    {{ label }}
  </label>
</template>

<script>
export default {
  name: 'app-checkbox',
  props: {
    label: {
      type: String,
      required: true
    },
    modelValue: Boolean
  },
  methods: {
    checkboxChange(event) {
      this.$emit('update:modelValue', event.target.checked)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-input {
  &__label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>

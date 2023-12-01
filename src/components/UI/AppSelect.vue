<template>
  <select class="app-select" :value="modelValue" @change="updateOption">
    <option v-for="option in options" :value="option.value" :key="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'app-select',
  props: {
    options: {
      type: Array,
      required: true
    },
    modelValue: [String]
  },
  methods: {
    updateOption(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>
<style lang="scss" scoped>
.app-select {
  align-self: flex-end;
  height: 2rem;
  padding: 0 0.5rem;
}
</style>

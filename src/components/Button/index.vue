<template>
  <button
    :class="['text-white bg-primary px-4 py-2 rounded-md text-lg', { 'bg-disabled': disabled }]"
    :disabled="disabled"
  >
    Start Battle
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {}
  }
}
</script>

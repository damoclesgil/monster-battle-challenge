<script setup lang="ts">
const props = defineProps<{ disabled?: boolean }>()

const emit = defineEmits<{ (e: 'click'): void }>()
</script>

<template>
  <button
    :class="[
      'text-white px-4 py-2 rounded-md text-lg',
      { 'bg-disabled': disabled, 'bg-primary': !disabled }
    ]"
    @click="emit('click')"
    :disabled="disabled"
  >
    Start Battle
  </button>
</template>

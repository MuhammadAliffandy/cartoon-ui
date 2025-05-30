<script setup>
const emit = defineEmits(['click', 'change', 'mouseenter', 'mouseleave'])

const props = defineProps({
  class: {
    type: String,
    default: 'flex flex-col',
  },
})
</script>

<template>
  <div
    :class="props.class"
    @click="emit('click')"
    @input="emit('change')"
    @mouseenter="emit('mouseenter')"
    @mouseleave="emit('mouseleave')"
  >
    <slot></slot>
  </div>
</template>

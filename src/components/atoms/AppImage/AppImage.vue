<script setup>
const props = defineProps({
  src: {
    type: String,
    default: 'https://picsum.photos/200',
  },
  alt: {
    type: String,
    default: 'Image',
  },
  class: {
    types: String,
    default: 'w-full h-full rounded-[12px]',
  },
})
</script>

<template>
  <img :src="props.src" :alt="props.alt" :class="props.class" />
</template>

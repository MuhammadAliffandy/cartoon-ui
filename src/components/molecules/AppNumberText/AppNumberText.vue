<script setup>
import AppContainer from '@/components/atoms/AppContainer/AppContainer.vue'

const props = defineProps({
  number: { type: String, default: '01' },
  text: { type: String, default: 'character design' },
  class: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <AppContainer class="flex flex-col gap-[5px] items-start">
    <h1 class="uppercase leading-none text-white text-[24px] font-anton font-bold">
      {{ props.number }}
    </h1>
    <p class="uppercase text-yellow-400 text-[14px] font-bold">{{ props.text }}</p>
  </AppContainer>
</template>

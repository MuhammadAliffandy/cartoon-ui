<script setup>
import AppContainer from '@/components/atoms/AppContainer/AppContainer.vue'

const props = defineProps({
  text: {
    type: String,
    default: 'LogoTypes',
  },
  outlined: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <AppContainer
    :class="`uppercase py-[4px] px-[12px] rounded-[2px] ${props.outlined ? 'bg-transparent text-yellow-400 border-[2px] border-yellow-400' : 'bg-yellow-400 text-orange-600 '}`"
  >
    <p class="font-bold text-[10px]">{{ text }}</p>
  </AppContainer>
</template>

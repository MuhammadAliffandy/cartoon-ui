<script setup>
import AppContainer from '@/components/atoms/AppContainer/AppContainer.vue'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: 'material-symbols:home',
  },
})

const hovered = ref(false)

const handleMouseEnter = () => {
  hovered.value = true
}

const handleMouseLeave = () => {
  hovered.value = false
}
</script>

<template>
  <AppContainer
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    :class="`flex items-center justify-center border-[7px] border-white rounded-xl p-[15px] bg-blue-400 relative transition-all duration-100 ${hovered ? '-translate-y-3' : 'translate-y-0'}  ${props.class}`"
  >
    <Icon :icon="props.icon" class="text-white text-[40px]" />
    <Transition
      enter-active-class="animate__animated animate__bounceIn"
      leave-active-class="animate__animated animate__bounceOut"
    >
      <Icon
        v-if="hovered"
        icon="mdi:play"
        class="text-[#FF5943] bg-white rounded-full p-[2px] bottom-[-12px] text-[24px] absolute"
    /></Transition>
  </AppContainer>
</template>

<style scoped></style>

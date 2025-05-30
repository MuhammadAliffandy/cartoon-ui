<script setup>
import AppContainer from '@/components/atoms/AppContainer/AppContainer.vue'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: 'learn more',
  },
  class: {
    type: String,
    default: '',
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
    :class="`max-w-max flex items-stretch gap-[5px] ${props.class} transition-all duration-100 ${hovered ? 'scale-125' : 'scale-100'}`"
  >
    <AppContainer
      :class="`flex items-stretch justify-center flex-col w-[20px] bg-yellow-400 rounded-l-[4px] relative `"
    >
      <Transition enter-active-class="animate__animated  animate__bounceInLeft">
        <Icon
          v-if="hovered"
          icon="mdi:play"
          class="text-white bg-[#FF5943] left-3 rounded-full p-[2px] text-[20px] absolute"
        />
      </Transition>
    </AppContainer>
    <button
      class="bg-white max-w-max whitespace-nowrap text-orange-400 rounded-r-[6px] text-[14px] font-bold uppercase px-[18px] py-[10px]"
    >
      {{ props.text }}
    </button>
  </AppContainer>
</template>

<style scoped></style>

<script setup>
import AppContainer from '@/components/atoms/AppContainer/AppContainer.vue'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const props = defineProps({
  year: {
    type: String,
    default: '2023',
  },
  location: {
    type: String,
    default: 'Indoenesia, IN',
  },
  category: {
    type: String,
    default: 'Gaming',
  },
  title: {
    type: String,
    default: 'Xbox Game Studios',
  },
  icon: {
    type: String,
    default: 'ion:logo-xbox',
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
    :class="`flex w-[1200px] sm:w-[1200px]  md:w-[1200px]  lg:w-full xl:w-full  h-[45%] items-center text-[22px] justify-between transition-all duration-300 ${hovered ? '  bg-white text-[#FF5943] rounded-lg scale-105 translate-y-[-4px]' : ` border-y-[1px]  border-[#b8392e]  text-white  `}  `"
  >
    <p class="px-[22px] py-[26px]">{{ props.year }}</p>
    <AppContainer class="flex items-center justify-start gap-[30px] w-[40%]">
      <Icon
        :icon="props.icon"
        :class="` ${hovered ? 'text-[#FF5943]' : 'text-yellow-400'}   text-[64px]`"
      />
      <p class="text-[38px] font-bold">{{ props.title }}</p>
    </AppContainer>
    <!--  -->
    <AppContainer class="flex items-center gap-[10px] w-[15%]">
      <Icon
        icon="gg:pin"
        :class="`${hovered ? 'text-[#FF5943]' : 'text-yellow-400'}  text-[30px]`"
      />
      <p>{{ props.location }}</p>
    </AppContainer>
    <AppContainer class="flex items-center gap-[10px] w-[15%]">
      <Icon
        icon="quill:chat"
        :class="`${hovered ? 'text-[#FF5943]' : 'text-yellow-400'}  text-[30px]`"
      />
      <p>{{ props.category }}</p>
    </AppContainer>
    <AppContainer
      :class="`flex items-center  p-[20px] h-full ${hovered ? 'bg-yellow-400 rounded-r-lg' : 'bg-transparent'} `"
    >
      <Icon
        icon="material-symbols:chevron-right-rounded"
        :class="`${hovered ? 'text-[#FF5943]' : 'text-white '} text-[30px]`"
      />
    </AppContainer>
  </AppContainer>
</template>

<style scoped></style>

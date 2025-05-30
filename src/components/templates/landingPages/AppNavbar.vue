<script setup>
import AppContainer from '@/components/atoms/AppContainer/AppContainer.vue'
import { Icon } from '@iconify/vue'

const dataIcon = [
  {
    icon: 'mdi:youtube',
  },
  {
    icon: 'eva:facebook-fill',
  },
  {
    icon: 'mdi:twitter',
  },
]
</script>

<template>
  <AppContainer class="hidden sm:hidden md:hidden lg:flex xl:flex w-full px-[100px] py-[20px]">
    <AppContainer
      class="flex w-full border-[4px] border-[#F14A3A] rounded-xl justify-between pr-[20px]"
    >
      <AppContainer class="w-[40%] rounded-l-xl bg-white flex items-center justify-center">
        <p class="text-[#FF5943] font-bold text-[44px] font-anton">LOGO</p>
      </AppContainer>
      <AppContainer class="flex items-center gap-[50px] text-white p-[30px] text-[24px]">
        <p class="uppercase text-white text-[18px] font-bold">works</p>
        <p class="uppercase text-white text-[18px] font-bold">about</p>
        <p class="uppercase text-white text-[18px] font-bold">awards</p>
      </AppContainer>
      <AppContainer class="flex items-center gap-[12px]">
        <template v-for="(item, index) in dataIcon" :key="index">
          <Icon
            :icon="item.icon"
            class="text-[40px] text-white rounded-full p-[10px] bg-[#F14A3A]"
          /> </template
      ></AppContainer>
    </AppContainer>
  </AppContainer>
</template>

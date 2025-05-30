<script setup>
import AppContainer from '@/components/atoms/AppContainer/AppContainer.vue'
import AppIconBox from '@/components/molecules/AppIconBox/AppIconBox.vue'
import AOS from 'aos'

import { onMounted } from 'vue'

const dataIcon = [
  {
    icon: 'icon-park-solid:dribble',
    class: 'bg-red-400',
  },
  {
    icon: 'eva:facebook-fill',
    class: 'bg-blue-400',
  },
  {
    icon: 'mdi:twitter',
    class: 'bg-blue-300',
  },
  {
    icon: 'mdi:twitch',
    class: 'bg-purple-400',
  },
  {
    icon: 'mingcute:instagram-fill',
    class: 'bg-red-300',
  },
]

onMounted(() => {
  AOS.init({
    duration: 1000,
  })
})
</script>

<template>
  <AppContainer
    class="flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-col xl:flex-col gap-[20px] items-stretch justify-end w-full h-full sm:h-full md:h-full lg:h-[30vw] xl:h-[30vw] relative"
  >
    <AppContainer
      class="w-full flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-end px-[20px] sm:px-[20px] md:px-[20px] lg:px-[100px] xl:px-[100px] h-full sm:h-full md:h-full lg:h-[50%] xl:h-[50%] bg-[#F14A3A] relative"
    >
      <AppContainer
        class="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center py-[20px] gap-[80px] w-full h-full sm:h-full md:h-full lg:h-[60%] xl:h-[60%] justify-between"
        data-aos="zoom-in"
      >
        <h1 class="text-white text-[40px]">LOGO</h1>
        <AppContainer
          class="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center gap-[40px]"
        >
          <p class="uppercase text-white text-[24px] font-bold">works</p>
          <p class="uppercase text-white text-[24px] font-bold">about</p>
          <p class="uppercase text-white text-[24px] font-bold">awards</p>
          <p class="uppercase text-white text-[24px] font-bold">contacts</p>
        </AppContainer>
        <p class="text-gray-300 text-[12px]">2025 | COPYRIGHT <br />ALL RIGHTS DESERVED</p>
      </AppContainer>
    </AppContainer>
    <!--  -->
    <AppContainer
      class="w-full px-[20px] sm:px-[20px] md:px-[20px] lg:px-[100px] xl:px-[100px] h-full sm:h-full md:h-full lg:h-[50%] xl:h-[50%] block sm:block md:block lg:absolute xl:absolute top-[80px]"
    >
      <AppContainer
        data-aos="fade-up"
        class="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center bg-[#F14A3A] gap-[100px] p-[50px] border-[12px] border-[#FF5943] w-full h-full rounded-xl"
      >
        <h1
          class="text-[60px] leading-none w-full sm:w-full md:w-full lg:w-[50%] xl:w-[50%] font-bold text-white min-w-fit"
        >
          You can find<br />me here:
        </h1>
        <AppContainer
          class="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row w-[60%] gap-[20px] items-center justify-between"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <template v-for="(item, index) in dataIcon" :key="index">
            <AppIconBox :icon="item.icon" :class="item.class" />
          </template>
        </AppContainer>
      </AppContainer>
    </AppContainer>
    <!--  -->
  </AppContainer>
</template>

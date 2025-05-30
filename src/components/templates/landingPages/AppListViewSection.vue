<script setup>
import AppContainer from '@/components/atoms/AppContainer/AppContainer.vue'
import AppHeadline from '@/components/molecules/AppHeadline/AppHeadline.vue'
import AppChip from '@/components/atoms/AppChip/AppChip.vue'
import AppButton from '@/components/atoms/AppButton/AppButton.vue'
import AppContentBox from '@/components/organisms/AppContentBox/AppContentBox.vue'
import { Icon } from '@iconify/vue'
import { Carousel, Slide } from 'vue3-carousel'
import { ref } from 'vue'

import AOS from 'aos'

import { onMounted } from 'vue'

onMounted(() => {
  AOS.init({
    duration: 1000,
    mirror: true,
  })
})

const carouselRef = ref()
const currentSlide = ref(1)

const next = () => carouselRef.value.next()
const prev = () => carouselRef.value.prev()

const carouselConfig = {
  height: '100%',

  gap: 0,
  breakpoints: {
    640: {
      itemsToShow: 1,
      snapAlign: 'center',
    },

    768: {
      itemsToShow: 2,
      snapAlign: 'center',
    },

    1024: {
      itemsToShow: 3,
      snapAlign: 'start',
    },
    1280: {
      itemsToShow: 3,
      snapAlign: 'start',
    },
  },
}
</script>

<template>
  <AppContainer
    class="flex flex-col gap-[20px] items-center justify-center w-full h-full pl-[20px] sm:pl-[20px] md:pl-[20px] lg:pl-[100px] xl:pl-[100px]"
  >
    <AppContainer
      class="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row w-full h-full sm:h-full md:h-full lg:h-[60%] xl:h-[60%] bg-[#F14A3A] rounded-l-xl"
      data-aos="fade-left"
    >
      <AppContainer
        class="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col w-[20%] gap-[40px] p-[40px] items-start justify-center"
      >
        <p class="text-yellow-400 text-[16px]">No 1/3</p>
        <h1 class="text-[50px] leading-none text-white font-bold">Personal<br />Awards</h1>
        <AppContainer class="flex items-center justify-center gap-[10px]">
          <Icon
            @click="prev"
            icon="material-symbols:chevron-left-rounded"
            class="text-white bg-gray-300/30 rounded-full text-[50px] cursor-pointer"
          />
          <Icon
            @click="next"
            icon="material-symbols:chevron-right-rounded"
            class="text-white bg-gray-300/30 rounded-full text-[50px] cursor-pointer"
          />
        </AppContainer>
      </AppContainer>
      <!--  -->
      <AppContainer
        class="flex items-center justify-start w-full sm:w-full md:w-[80%] lg:w-[80%] xl:w-[80%] h-full"
      >
        <Carousel ref="carouselRef" v-bind="carouselConfig">
          <Slide v-for="slide in 9" :key="slide">
            <AppContentBox data-aos="flip-right" :data-aos-delay="slide * 300" />
          </Slide>
        </Carousel>
      </AppContainer>
      <!--  -->
    </AppContainer>
  </AppContainer>
</template>

<style scoped>
.carousel {
  width: 100%;
}
</style>

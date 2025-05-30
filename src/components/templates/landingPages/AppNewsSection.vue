<script setup>
import AppContainer from '@/components/atoms/AppContainer/AppContainer.vue'
import AppImage from '@/components/atoms/AppImage/AppImage.vue'
import AppButton from '@/components/atoms/AppButton/AppButton.vue'

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
  height: '250',

  itemsToShow: 1,
  gap: 1,
  wrapAround: false,
}
</script>

<template>
  <AppContainer
    class="flex flex-col gap-[20px] items-center h-full justify-center w-full px-[20px] sm:px-[20px] md:px-[20px] lg:px-[100px] xl:px-[100px]"
    data-aos="flip-right"
  >
    <AppContainer
      class="flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row rounded-lg w-full sm:w-full md:w-full lg:w-[80%] xl:w-[80%] h-[80%] border-[5px] border-[#F14A3A] relative"
    >
      <AppContainer
        class="w-full sm:w-full md:w-full lg:w-[45%] xl:w-[35%] bg-[#F14A3A] h-full flex items-center justify-center px-[70px] relative"
      >
        <AppContainer class="flex flex-col w-full gap-[20px] items-start">
          <!--  -->
          <Carousel v-bind="carouselConfig" class="w-full">
            <Slide v-for="slide in 3" :key="slide">
              <h1 class="text-[60px] font-anton text-white font-bold leading-none">
                2023 Best of the Best
              </h1>
            </Slide>
            <template #addons>
              <Pagination />
            </template>
          </Carousel>
          <!--  -->

          <p class="text-white">Eos adipisci et quia vero voluptate. Voluptates harum et.</p>
          <AppButton />
        </AppContainer>
      </AppContainer>
      <AppContainer
        class="w-full sm:w-full md:w-full lg:w-[75%] xl:w-[65%] h-[400px] sm:h-[400px] md:h-[500px] lg:h-full xl:h-full flex items-center justify-center relative"
      >
        <AppContainer
          class="w-full sm:w-full md:w-[55%] lg:w-[55%] xl:w-[50%] bg-[#F14A3A] h-full left-0 absolute"
        ></AppContainer>
        <AppImage
          alt="Feature Box Image"
          class="w-[90%] md:h-[90%] lg:h-[90%] xl:h-[90%] border-[8px] border-white object-cover rounded-lg absolute"
        />
      </AppContainer>
    </AppContainer>
  </AppContainer>
</template>

<style scoped>
.carousel {
  display: flex;
  flex-direction: column;

  --vc-pgn-width: 50px;
  --vc-pgn-background-color: rgba(255, 255, 255, 0.7);
  --vc-pgn-active-color: rgb(255, 200, 83);
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}
</style>

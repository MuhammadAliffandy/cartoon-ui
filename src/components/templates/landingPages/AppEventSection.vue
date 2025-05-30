<script setup>
import AppContainer from '@/components/atoms/AppContainer/AppContainer.vue'
import AppListPickbox from '@/components/organisms/AppListPickBox/AppListPickbox.vue'
import AppPickBox from '@/components/organisms/AppPickBox/AppPickBox.vue'
</script>

<template>
  <AppContainer
    class="flex flex-col gap-[20px] items-center justify-center w-full h-full px-[20px] sm:px-[20px] md:px-[20px] lg:px-[100px] xl:px-[100px]"
  >
    <h1
      data-aos="fade-up"
      data-aos-delay="100"
      class="text-[40px] text-center text-white font-bold"
    >
      Conferences & Events
    </h1>
    <!--  -->
    <AppPickBox data-aos="fade-up" data-aos-delay="300" />
    <AppListPickbox data-aos="fade-up" data-aos-delay="600" />
  </AppContainer>
</template>

<style scoped></style>

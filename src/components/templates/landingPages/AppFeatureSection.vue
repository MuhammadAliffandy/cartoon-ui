<script setup>
import AppContainer from '@/components/atoms/AppContainer/AppContainer.vue'
import AppFeatureBox from '@/components/organisms/AppFeatureBox/AppFeatureBox.vue'
</script>

<template>
  <AppContainer
    class="flex items-center justify-center w-full h-full pb-[60px] px-[20px] sm:px-[20px] md:px-[20px] lg:px-[100px] xl:px-[100px]"
  >
    <AppContainer
      class="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center h-full justify-center gap-[60px] sm:gap-[60px] md:gap-[60px] lg:gap-[20px] xl:gap-[20px] w-full sm:w-full md:w-full lg:w-[90%] xl:w-[90%]"
    >
      <AppFeatureBox data-aos="fade-up" data-aos-delay="100" />
      <AppFeatureBox data-aos="fade-up" data-aos-delay="500" />
      <AppFeatureBox data-aos="fade-up" data-aos-delay="1000" />
    </AppContainer>
  </AppContainer>
</template>

<style scoped></style>

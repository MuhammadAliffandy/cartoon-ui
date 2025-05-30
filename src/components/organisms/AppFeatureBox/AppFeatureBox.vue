<script setup>
import AppContainer from '@/components/atoms/AppContainer/AppContainer.vue'
import AppButton from '@/components/atoms/AppButton/AppButton.vue'
import AppImage from '@/components/atoms/AppImage/AppImage.vue'
import AppNumberText from '@/components/molecules/AppNumberText/AppNumberText.vue'
import AppHeadline from '@/components/molecules/AppHeadline/AppHeadline.vue'
import AppChipList from '@/components/molecules/AppChipList/AppChipList.vue'
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
  number: {
    type: String,
    default: '01',
  },
  title: {
    type: String,
    default: 'Character design',
  },
  icon: {
    type: String,
    default: 'mdi:coffee',
  },
  imageContent: {
    type: String,
  },
  titleContent: {
    type: String,
  },
  subtitleContent: {
    type: String,
  },
  descriptionContent: {
    type: String,
  },
  categoriesContent: {
    type: String,
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
    :class="`flex flex-col bg-[#F14A3A] rounded-xl gap-[30px] p-[35px] pb-[50px] w-full sm:w-[80%] md:w-[60%]  lg:w-[60%]  xl:w-[30%] relative ${props.class} `"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!--  -->
    <AppContainer class="flex items-center justify-between">
      <AppNumberText :number="props.number" :text="props.title" />
      <AppContainer class="border-[1px] border-white/30 rounded-lg p-[4px]">
        <Icon :icon="props.icon" class="text-white text-[30px]" />
      </AppContainer>
    </AppContainer>
    <!--  -->
    <AppImage
      :src="props.imageContent"
      alt="Feature Box Image"
      class="w-full h-[250px] transition-[height] duration-300 hover:h-[300px] border-[8px] border-white object-cover rounded-lg"
    />
    <!--  -->
    <AppHeadline
      class="text-white text-[14px]"
      :title="props.titleContent"
      :subtitle="props.subtitleContent"
      :description="props.descriptionContent"
      :isDescription="hovered"
    />
    <!--  -->
    <AppChipList v-if="!hovered" :chips="props.categoriesContent" />
    <!--  -->
    <Transition enter-active-class="animate__animated animate__bounce">
      <AppContainer v-if="!hovered" class="bg-white rounded-full p-[10px] bottom-[-18px] absolute">
        <Icon icon="mdi:play" class="text-[#F14A3A] text-[20px]" />
      </AppContainer>
    </Transition>
    <!--  -->
    <Transition enter-active-class="animate__animated animate_delay-1s animate__backInUp">
      <AppButton v-if="hovered" :class="'bottom-[-24px] absolute'" />
    </Transition>
    <!--  -->
  </AppContainer>
</template>

<style scoped></style>

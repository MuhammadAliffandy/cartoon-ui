<script setup>
import { ref, onMounted } from 'vue'
import AppContainer from '@/components/atoms/AppContainer/AppContainer.vue'
import AppButton from '@/components/atoms/AppButton/AppButton.vue'
import { Icon } from '@iconify/vue'
import AppImage from '@/components/atoms/AppImage/AppImage.vue'

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
})

// Data untuk animasi typing
const fullText = 'COFFEE\nSHOP'
const displayedText = ref('')
const typingSpeed = 100 // Kecepatan mengetik (ms)
const loopDelay = 1000 // Jeda sebelum mengulang animasi (ms)

onMounted(() => {
  startTyping()
})

function startTyping() {
  let index = 0
  const interval = setInterval(() => {
    if (index < fullText.length) {
      displayedText.value += fullText[index]
      index++
    } else {
      clearInterval(interval)
      setTimeout(() => {
        displayedText.value = ''
        startTyping()
      }, loopDelay)
    }
  }, typingSpeed)
}
</script>

<template>
  <AppContainer
    class="flex flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row items-center w-full h-full px-[20px] sm:px-[20px] md:px-[20px] lg:px-[100px] xl:px-[100px]"
  >
    <!--  -->
    <AppContainer
      class="w-full sm:w-full md:w-full lg:w-[40%] xl:w-[40%] h-full flex flex-col items-center sm:items-center md:items-center lg:items-end xl:items-end justify-center"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <AppContainer
        class="flex flex-col items-center sm:items-center md:items-center lg:items-end xl:items-end gap-[30px]"
      >
        <h3 class="uppercase text-yellow-400 text-[12px] tracking-[10px] font-bold">illustrator</h3>
        <h1
          class="text-white h-[300px] leading-[150px] font-anton text-center sm:text-center md:text-center lg:text-right xl:text-right font-bold text-[100px] sm:text-[100px] md:text-[100px] lg:text-[160px] xl:text-[160px] uppercase"
        >
          {{ displayedText }}
        </h1>
        <!--  -->
        <AppContainer
          class="flex items-center gap-[10px] justify-center sm:justify-center md:justify-center lg:justify-end xl:justify-end"
        >
          <p
            class="text-white text-[16px] w-[60%] sm:w-[60%] md:w-[50%] lg:w-[50%] xl:w-[50%] text-right"
          >
            Est architecto enim cumque quod architecto enim cumque quod.
          </p>
          <AppContainer
            class="rounded-full p-[10px] border-[2px] border-white"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <Icon icon="mdi:coffee" class="text-yellow-400 text-[20px]" />
          </AppContainer>
        </AppContainer>
        <!--  -->
        <AppButton />
      </AppContainer>
    </AppContainer>
    <!--  -->
    <AppContainer
      class="w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%] h-full flex items-center justify-center"
    >
      <AppImage
        data-aos="zoom-in-left"
        src="/images/coffe.svg"
        alt="Home Section Image"
        class="w-full h-full"
      />
    </AppContainer>
    <!--  -->
  </AppContainer>
</template>

<script setup>
import AppContainer from '@/components/atoms/AppContainer/AppContainer.vue'
import { ref } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    default: () => [
      {
        id: 1,
        text: 'Interviews',
      },
      {
        id: 2,
        text: 'Tales',
      },
      {
        id: 3,
        text: 'Exhibition',
      },
    ],
  },
})

const picked = ref(0)

const handleClick = (index) => {
  picked.value = index
}
</script>

<template>
  <AppContainer
    class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row items-center border-[5px] border-[#b8392e] rounded-lg"
  >
    <template v-for="(item, index) in props.data" :key="item.id">
      <AppContainer
        @click="handleClick(index)"
        :class="`
          w-full sm:w-full md:w-max lg:w-max xl:w-max  px-[40px] py-[14px] text-center cursor-pointer transition-all duration-300 transform
          ${
            picked === index
              ? 'bg-white rounded-lg scale-105 translate-y-[-4px] z-[10] shadow-lg'
              : 'bg-[#F14A3A] '
          }
        `"
      >
        <p :class="`font-bold text-[21px] ${picked == index ? 'text-[#b8392e]' : 'text-white'} `">
          {{ item.text }}
        </p>
      </AppContainer>
    </template>
  </AppContainer>
</template>

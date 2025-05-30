<script setup>
import AppContainer from '@/components/atoms/AppContainer/AppContainer.vue'

const props = defineProps({
  title: { type: String, default: 'Cusco Barista' },
  subtitle: { type: String, default: 'varions work' },
  description: {
    type: String,
    default:
      'Minus sit ullam fugiat provident placeat deleniti debitis aperiam eos. Nihil tenetur aperiam et accusamus nam dolorum cumque et autem. ',
  },
  isDescription: { type: Boolean, default: false },

  class: {
    type: String,
    default: '',
  },
  titleClass: {
    type: String,
    default: '',
  },
  subtitleClass: {
    type: String,
    default: '',
  },
  descriptionClass: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <AppContainer :class="` flex flex-col gap-[20px] items-start w-full ${props.class}   `">
    <AppContainer class="flex flex-col">
      <h1 :class="`leading-none text-white text-[28px] font-bold  ${props.titleClass}`">
        {{ props.title }}
      </h1>
      <p
        v-if="!isDescription"
        :class="`uppercase text-white text-[12px] font-medium ${props.subtitleClass}`"
      >
        {{ props.subtitle }}
      </p>
    </AppContainer>
    <p v-if="isDescription" :class="`text-white text-[12px] ${props.descriptionClass}`">
      {{ props.description }}
    </p>
  </AppContainer>
</template>

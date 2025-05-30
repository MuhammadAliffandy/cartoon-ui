<script setup>
import AppContainer from '@/components/atoms/AppContainer/AppContainer.vue'
import AppChip from '@/components/atoms/AppChip/AppChip.vue'

const props = defineProps({
  chips: {
    type: Array,
    default: () => [
      { id: 'Chip 1', text: '3d' },
      { id: 'Chip 2', text: 'logotypes' },
      { id: 'Chip 3', text: 'flat' },
    ],
  },
})
</script>

<template>
  <AppContainer class="flex items-center justify-start gap-[10px]">
    <template v-for="(data, index) in chips" :key="index">
      <AppChip :text="data.text" />
    </template>
  </AppContainer>
</template>

<

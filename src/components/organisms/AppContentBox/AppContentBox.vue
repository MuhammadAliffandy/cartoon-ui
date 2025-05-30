<script setup>
import AppContainer from '@/components/atoms/AppContainer/AppContainer.vue'
import AppHeadline from '@/components/molecules/AppHeadline/AppHeadline.vue'
import AppChip from '@/components/atoms/AppChip/AppChip.vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  icon: {
    type: String,
    default: 'material-symbols:star-outline',
  },
  title: {
    type: String,
    default: 'Cusco Barista',
  },
  description: {
    type: String,
    default:
      'Reprehenderit animi enim aut quis tempora suscipit  Cumque deserunt asperiores quia neque voluptatum.',
  },
  year: {
    type: String,
    default: '2022',
  },
})
</script>

<template>
  <AppContainer
    class="flex flex-col items-center justify-center h-full gap-[25px] w-[300px] py-[40px] px-[20px] relative"
  >
    <Icon :icon="props.icon" class="text-white text-[100px]" />
    <AppHeadline
      :title="props.title"
      :description="props.description"
      :class="'!items-center'"
      :titleClass="'text-center'"
      :descriptionClass="'text-center'"
      isDescription
    />
    <AppChip :text="props.year" outlined />
    <!-- <AppButton class="absolute bottom-[-18px]" /> -->
  </AppContainer>
</template>

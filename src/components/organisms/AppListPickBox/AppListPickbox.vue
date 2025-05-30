<script setup>
import AppContainer from '@/components/atoms/AppContainer/AppContainer.vue'
import AppListCard from '@/components/organisms/AppListCard/AppListCard.vue'

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
  data: {
    type: Array,
    default: () => [
      {
        id: '1',
        year: '2023',
        icon: 'ion:logo-xbox',
        title: 'Bump Festival',
        location: 'Indonesia, IN',
        category: 'Design Trends',
      },
      {
        id: '2',
        year: '2022',
        icon: 'ion:logo-playstation',
        title: 'Game Dev Conference',
        location: 'Jakarta, ID',
        category: 'Game Development',
      },
      {
        id: '3',
        year: '2021',
        icon: 'ion:logo-nintendo-switch',
        title: 'Indie Game Showcase',
        location: 'Bandung, ID',
        category: 'Indie Games',
      },
    ],
  },
})
</script>

<template>
  <AppContainer
    class="w-full overflow-x-scroll sm:overflow-x-scroll md:overflow-x-scroll lg:overflow-visible xl:overflow-visible"
  >
    <template v-for="(item, index) in props.data" :key="item.id">
      <AppListCard />
    </template>
  </AppContainer>
</template>

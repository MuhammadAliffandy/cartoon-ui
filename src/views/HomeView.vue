<script setup>
import AppHomeSection from '@/components/templates/landingPages/AppHomeSection.vue'
import AppFeatureSection from '@/components/templates/landingPages/AppFeatureSection.vue'
import AppEventSection from '@/components/templates/landingPages/AppEventSection.vue'
import AppNewsSection from '@/components/templates/landingPages/AppNewsSection.vue'
import AppListViewSection from '@/components/templates/landingPages/AppListViewSection.vue'
import AppFooter from '@/components/templates/landingPages/AppFooter.vue'
import AppNavbar from '@/components/templates/landingPages/AppNavbar.vue'
</script>

<template>
  <main
    class="w-full h-full flex flex-col gap-[400px] sm:gap-[400px] md:gap-[400px] lg:gap-0 xl:gap-0 bg-[#FF5943] xl:overflow-x-hidden"
  >
    <AppNavbar />

    <section class="w-full h-full sm:h-full md:h-full lg:h-screen xl:h-screen">
      <AppHomeSection />
    </section>

    <section class="w-full h-full sm:h-full md:h-full lg:h-screen xl:h-screen">
      <AppFeatureSection />
    </section>

    <section class="w-full h-full sm:h-full md:h-full lg:h-screen xl:h-screen">
      <AppEventSection />
    </section>

    <section class="w-full h-full sm:h-full md:h-full lg:h-screen xl:h-screen">
      <AppNewsSection />
    </section>

    <section class="ww-full h-full sm:h-full md:h-full lg:h-screen xl:h-screen">
      <AppListViewSection />
    </section>

    <footer>
      <AppFooter />
    </footer>
  </main>
</template>

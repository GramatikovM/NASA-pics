<script setup lang="ts">
import BaseAppExample from '@/components/BaseAppExample.vue'
import { HOMEPAGE_DATA } from '../contants'
</script>

<template>
  <div class="container">
    <h1 class="home-title">
      Welcome to the place where you can find some of NASA's latest imagery.
    </h1>
    <BaseAppExample
      :pageTitle="HOMEPAGE_DATA.DAY_PICTURE_TITLE"
      :aboutPageText="HOMEPAGE_DATA.DAY_PICTURE_TEXT"
      exampleImageSrc="/apod-example.jpg"
      exampleImageAlt="pic of the day example"
    />

    <BaseAppExample
      :pageTitle="HOMEPAGE_DATA.EARTH_IMAGE_TITLE"
      :aboutPageText="HOMEPAGE_DATA.EARTH_IMAGE_TEXT"
      exampleImageSrc="/earth-api-example.png"
      exampleImageAlt="earth-example"
    />

    <BaseAppExample
      :pageTitle="HOMEPAGE_DATA.MOST_RECENT_TITLE"
      :aboutPageText="HOMEPAGE_DATA.MOST_RECENT_TEXT"
      exampleImageSrc="/epic-api-example.png"
      exampleImageAlt="epic-example"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding-right: 2em;
}
.home-title {
  font-size: 1.25em;
  font-style: oblique;
}
</style>

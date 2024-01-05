<script setup lang="ts">
interface Props {
  pageTitle: string
  aboutPageText: string
  exampleImageSrc: string
  exampleImageAlt: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="inner-container">
    <h2 class="page-title">{{ props.pageTitle }}</h2>
    <h2 class="about-page-text">{{ props.aboutPageText }}</h2>
    <h2 class="about-page-text">Tasty preview:</h2>
    <img class="example-image" :src="props.exampleImageSrc" :alt="props.exampleImageAlt" />
  </div>
</template>

<style scoped>
.inner-container {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.page-title {
  font-size: 1.15em;
  font-weight: 600;
}
.about-page-text {
  font-size: 1.1em;
}
.example-image {
  height: 400px;
  object-fit: contain;
}
</style>

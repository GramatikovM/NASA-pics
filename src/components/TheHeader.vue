<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TheNavigation from './TheNavigation.vue'
</script>

<template>
  <div class="header-container">
    <RouterLink class="left-side-container" :to="{ name: 'HomepageEl' }">
      <img class="the-logo" src="/logo.jpg" alt="logo" />
      <h1 class="app-name">The Universe App</h1>
    </RouterLink>
    <TheNavigation />
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  padding: 1em 3em;
  border-radius: 1em;
  background-color: #b7eef6;
}
.left-side-container {
  display: flex;
  align-items: center;
  column-gap: 1em;
}
.app-name {
  font-size: 1.25em;
  font-weight: 600;
}
.the-logo {
  border-radius: 50%;
}
a {
  text-decoration: none;
  color: unset;
}
</style>

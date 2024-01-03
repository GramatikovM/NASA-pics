<script setup lang="ts">
import { RouterView } from 'vue-router'
import 'reset-css'
import './assets/main.css'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="app-container">
    <TheHeader />
    <div class="content">
      <RouterView v-slot="{ Component }">
        <Suspense>
          <template #default>
            <component :is="Component" :key="$route.path" />
          </template>
          <template #fallback>
            <p>Loading...</p>
          </template>
        </Suspense>
      </RouterView>
    </div>
    <TheFooter />
  </div>
</template>

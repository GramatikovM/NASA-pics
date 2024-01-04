<script setup lang="ts">
import { useQuery } from 'vue-query'
import { getApiData, getUserLocation } from '@/services'
import { useEarthImageStore } from '@/stores/earthImageStore'
import type { EarthLocalImage } from '@/types'

const apiKey = import.meta.env.VITE_API_KEY
const store = useEarthImageStore()
const locationOptions = {
  enableHighAccuracy: true,
  timeout: 2000,
  maximumAge: 30 * (60 * 1000)
}
const userLocation = await getUserLocation(locationOptions)
// const currentDate = new Date().toISOString().split('T')[0]
const currentDate = '2019-12-12'

const url = `https://api.nasa.gov/planetary/earth/assets?lon=${userLocation.value?.longitude}
  &lat=${userLocation.value?.latitude}&date=${currentDate}&&dim=0.5&api_key=${apiKey}`

const { status, error } = useQuery('currentLocationImage', () => getApiData(url), {
  staleTime: 30 * (60 * 1000),
  cacheTime: 35 * (60 * 1000),
  onSuccess: (data: EarthLocalImage) => {
    store.setEarthImage(data)
  }
})
</script>

<template>
  <h1 class="image-title">
    Check out the Landsat 8 image for your current location (latitude:
    {{ userLocation?.latitude.toFixed(2) || '-' }}, longitude:
    {{ userLocation?.longitude.toFixed(2) || '-' }}):
  </h1>
  <span v-if="status === 'loading'">Loading...</span>
  <span v-else-if="status === 'error'">Error: {{ error.message }}</span>
  <div v-else class="card-container">
    <img class="picture" :src="store.earthImage?.url" alt="current location picture" />
  </div>
</template>

<style scoped>
.image-title {
  font-size: 1.2em;
  font-style: oblique;
  margin-bottom: 1em;
}
.card-container {
  width: inherit;
}
.picture {
  width: 50vw;
  height: 50vh;
  object-fit: cover;
}
</style>

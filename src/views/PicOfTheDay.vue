<script setup lang="ts">
import { ref, watch } from 'vue'
import { useQuery } from 'vue-query'
import { usePicOfTheDayStore } from '@/stores/picOfTheDayStore'
import { getApiData } from '@/services'
import type { NasaPic } from '@/types'
import BaseButton from '@/components/BaseButton.vue'

const apiKey = import.meta.env.VITE_API_KEY
const store = usePicOfTheDayStore()
const imageDate = ref(store.currentDate)

const { status, error, refetch } = useQuery(
  'picOfTheDay',
  () => getApiData(`https://api.nasa.gov/planetary/apod?date=${imageDate.value}&api_key=${apiKey}`),
  {
    staleTime: 5 * (60 * 1000),
    cacheTime: 10 * (60 * 1000),
    onSuccess: (data: NasaPic) => {
      store.setCurrentDate(data.date)
      store.setPicOfTheDay(data)
    }
  }
)

const handleChange = (event: Event) => {
  imageDate.value = (event.target as HTMLOptionElement).value
}
const handleImageSave = () => {
  store.addToFavourites(store.picOfTheDay)
}

watch(imageDate, () => {
  refetch.value()
})
</script>

<template>
  <div class="date-container">
    <label class="date-label" for="datepicker">Choose a date to see the image for that day: </label>
    <input type="text" id="datepicker" v-model.lazy="imageDate" @change="handleChange" />
  </div>

  <div v-if="store.picOfTheDay?.media_type === 'image'">
    <div v-if="status === 'loading'">Loading...</div>
    <div v-else-if="status === 'error'">Error: {{ error.message }}</div>
    <div v-else class="card-container">
      <h1 class="image-title">{{ store.picOfTheDay?.title }}</h1>
      <h2>Image was taken on: {{ store.picOfTheDay?.date }}</h2>
      <div>
        <h3>Fun facts:</h3>
        <p>{{ store.picOfTheDay?.explanation }}</p>
      </div>
      <BaseButton text="Save to Favourites" :action="handleImageSave" />
      <img class="picture" :src="store.picOfTheDay?.url" alt="picture of the day" />
    </div>
  </div>
  <div v-else-if="store.picOfTheDay?.media_type === 'video'">Show the video</div>
  <div v-else>Resource unavailable.</div>
</template>

<style scoped>
.date-container {
  display: flex;
  justify-content: center;
  gap: 1em;
  padding-bottom: 1em;
}
.date-label {
  font-size: 1.1em;
}
.image-title {
  font-size: 1.2em;
  font-style: oblique;
  align-self: center;
}
.card-container {
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding-left: 2em;
  padding-right: 2em;
}
.picture {
  width: inherit;
}

@media only screen and (max-width: 500px) {
  div .date-label {
    font-size: 1em;
  }
}
</style>

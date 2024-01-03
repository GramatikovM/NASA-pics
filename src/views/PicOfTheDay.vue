<script setup lang="ts">
import { ref, watch } from 'vue'
import { useQuery } from 'vue-query'
import { getApiData } from '@/services'
import type { NasaPic } from '@/types'

const currentDate = new Date().toISOString().split('T')[0]
const imageDate = ref(currentDate)
const updatedData = ref()

const { status, error, refetch } = useQuery(
  'picOfTheDay',
  () =>
    getApiData(
      `https://api.nasa.gov/planetary/apod?date=${imageDate.value}&api_key=IAPT7HPmKBNPRZ0O05HwhpiC7MDxJ6kBC4i4L5zt`
    ),
  {
    staleTime: 0,
    cacheTime: 0,
    onSuccess: (data: NasaPic) => {
      updatedData.value = data
    }
  }
)

const handleChange = (event: Event) => {
  imageDate.value = (event.target as HTMLOptionElement).value
}

watch(imageDate, () => {
  refetch.value()
})
</script>

<template>
  <div>{{ updatedData?.date }}</div>
  <div class="date-container">
    <label class="date-label" for="datepicker">Choose a date to see the image for that day: </label>
    <input type="text" id="datepicker" v-model.lazy="imageDate" @change="handleChange" />
  </div>

  <div v-if="updatedData?.media_type === 'image'">
    <div v-if="status === 'loading'">Loading...</div>
    <div v-else-if="status === 'error'">Error: {{ error.message }}</div>
    <div v-else class="card-container">
      <h1 class="image-title">{{ updatedData?.title }}</h1>
      <h2>Image was taken on: {{ updatedData?.date }}</h2>
      <div>
        <h3>Fun facts:</h3>
        <p>{{ updatedData?.explanation }}</p>
      </div>
      <img class="picture" :src="updatedData?.url" alt="picture of the day" />
    </div>
  </div>
  <div v-else-if="updatedData?.media_type === 'video'">Show the video</div>
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
</style>

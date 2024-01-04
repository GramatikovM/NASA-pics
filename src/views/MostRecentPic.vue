<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useQuery } from 'vue-query'
import { getApiData } from '@/services'
import type { MostRecentEarthPic, AllAvailableDates } from '@/types'
import { useMostRecentPicsStore } from '@/stores/mostRecentPicsStore'

const apiKey = import.meta.env.VITE_API_KEY
const store = useMostRecentPicsStore()
const chosenDate = ref(store.chosenDate)
const { status: allDateStatus, error: allDateError } = useQuery(
  'allDates',
  () => getApiData(`https://api.nasa.gov/EPIC/api/enhanced/all/?api_key=${apiKey}`),
  {
    staleTime: 10 * (60 * 1000),
    cacheTime: 15 * (60 * 1000),
    onSuccess: (data: AllAvailableDates) => {
      store.setChosenDate(data[0].date)
      store.setAllAvailableDates(data)
    }
  }
)

const enabled = computed(() => !!store.chosenDate)

const {
  status: mostRecentStatus,
  error: mostRecentError,
  isIdle,
  refetch
} = useQuery(
  'mostRecentPic',
  () =>
    getApiData(`https://api.nasa.gov/EPIC/api/enhanced/date/${chosenDate.value}?api_key=${apiKey}`),
  {
    staleTime: 5 * (60 * 1000),
    cacheTime: 10 * (60 * 1000),
    onSuccess: (data: MostRecentEarthPic[]) => {
      store.setmostRecentPics(data)
    },
    enabled
  }
)

const handleOptionSelect = async (event: Event) => {
  chosenDate.value = (event.target as HTMLOptionElement).value
}

watch(chosenDate, () => {
  refetch.value()
})
</script>

<template>
  <div v-if="allDateStatus === 'loading'">Loading date picker...</div>
  <div v-else-if="allDateStatus === 'error'">
    Date picker unavailable due to: {{ allDateError.message }}
  </div>
  <div v-else class="date-label">
    <label for="allDates">Choose date:</label>
    <select id="allDates" v-model="chosenDate" @change="handleOptionSelect">
      <option v-for="item in store.allAvailableDates" :key="item.date">
        {{ item.date }}
      </option>
    </select>
  </div>

  <div v-if="mostRecentStatus === 'loading' || isIdle">Loading pic...</div>
  <div v-else-if="mostRecentStatus === 'error'">
    Most recent pic unavailable due to: {{ mostRecentError.message }}
  </div>
  <div v-else>
    <h1 class="images-heading">
      Below you can find the most recent images collected by DSCOVR's Earth Polychromatic Imaging
      Camera (EPIC) instrument:
    </h1>
    <div class="image-gallery">
      <div v-for="item in store.mostRecentPics" :key="item.identifier" class="image-item">
        <div>Time: {{ item.date }}</div>
        <img
          class="image"
          :src="`https://epic.gsfc.nasa.gov/archive/enhanced/${item.date
            .split(' ')[0]
            .split('-')
            .join('/')}/png/${item.image}.png`"
          alt="earth image"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.date-label {
  margin-bottom: 1em;
}
.chosen-images {
  margin-bottom: 3em;
}
.images-heading {
  font-size: 1.2em;
  font-style: oblique;
  margin-bottom: 1em;
}
.image-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
}
.image-item {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
.image {
  width: 200px;
  height: 200px;
}
</style>
@/stores/mostRecentPicsStore

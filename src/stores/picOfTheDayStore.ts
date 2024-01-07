import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { NasaPic } from '@/types'

export const usePicOfTheDayStore = defineStore(
  'picOFTheDayStore',
  () => {
    const currentDate = ref('')
    const picOfTheDay = ref<NasaPic>()
    const favouritePics = ref<NasaPic[]>([])

    function setCurrentDate(this: any, date: string) {
      this.currentDate = date
    }

    function setPicOfTheDay(this: any, pic: NasaPic) {
      this.picOfTheDay = pic
    }

    function addToFavourites(this: any, pic?: NasaPic) {
      this.favouritePics.push(pic)
    }

    return {
      currentDate,
      picOfTheDay,
      favouritePics,
      setCurrentDate,
      setPicOfTheDay,
      addToFavourites
    }
  },
  { persist: { storage: sessionStorage } }
)

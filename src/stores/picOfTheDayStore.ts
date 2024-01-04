import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { NasaPic } from '@/types'

export const usePicOfTheDayStore = defineStore(
  'picOFTheDayStore',
  () => {
    const currentDate = ref('')
    const picOfTheDay = ref<NasaPic>()
    const favouritePics = ref<string[]>([])

    function setCurrentDate(this: any, date: string) {
      this.currentDate = date
    }

    function setPicOfTheDay(this: any, pic: NasaPic) {
      this.picOfTheDay = pic
    }

    return {
      currentDate,
      picOfTheDay,
      favouritePics,
      setCurrentDate,
      setPicOfTheDay
    }
  },
  { persist: { storage: sessionStorage } }
)

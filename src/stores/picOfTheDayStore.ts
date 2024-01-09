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
      if (this.favouritePics.some((image: NasaPic) => image.title !== pic?.title)) {
        this.favouritePics.push(pic)
      }
    }

    function removeFromFavourites(this: any, title: string) {
      this.favouritePics = this.favouritePics.filter((image: NasaPic) => image.title !== title)
    }

    return {
      currentDate,
      picOfTheDay,
      favouritePics,
      setCurrentDate,
      setPicOfTheDay,
      addToFavourites,
      removeFromFavourites
    }
  },
  { persist: { storage: sessionStorage } }
)

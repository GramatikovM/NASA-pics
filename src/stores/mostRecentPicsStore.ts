import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { AllAvailableDates, MostRecentEarthPic, QueryError } from '@/types'

export const useMostRecentPicsStore = defineStore(
  'mostRecentPicsStore',
  () => {
    const allAvailableDates = ref<AllAvailableDates>([])
    const chosenDate = ref('')
    const mostRecentPics = ref<MostRecentEarthPic[]>([])
    const status = ref('')
    const error = ref<QueryError>()

    function setAllAvailableDates(this: any, dates: AllAvailableDates) {
      this.allAvailableDates = dates
    }

    function setChosenDate(this: any, date: string) {
      this.chosenDate = date
    }

    function setmostRecentPics(this: any, pics: MostRecentEarthPic[]) {
      this.mostRecentPics = pics
    }

    return {
      allAvailableDates,
      chosenDate,
      mostRecentPics,
      status,
      error,
      setAllAvailableDates,
      setChosenDate,
      setmostRecentPics
    }
  },
  { persist: { storage: sessionStorage } }
)

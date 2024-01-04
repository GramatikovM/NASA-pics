import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { EarthLocalImage, QueryError } from '@/types'

export const useEarthImageStore = defineStore(
  'earthImageStore',
  () => {
    const earthImage = ref<EarthLocalImage>()
    const status = ref('')
    const error = ref<QueryError>()

    function setEarthImage(this: any, pic: EarthLocalImage) {
      this.earthImage = pic
    }

    function setStatus(this: any, status: string) {
      this.status = status
    }

    function setError(this: any, error: QueryError) {
      this.error = error
    }

    return {
      earthImage,
      status,
      error,
      setStatus,
      setError,
      setEarthImage
    }
  },
  { persist: { storage: sessionStorage } }
)

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePictureStore = defineStore('pictureStore', {
  state: () => ({ favouritePictures: [] })
})

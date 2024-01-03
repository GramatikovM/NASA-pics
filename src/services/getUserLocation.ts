import { ref } from 'vue'
import { type Options } from '@/types'

export const getUserLocation = async (locationOptions: Options) => {
  const geogLocation = ref<GeolocationCoordinates>()

  const triggerPosRequest = async (options: Options): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    })
  }

  const fetchCoordinates = async () => {
    try {
      const { coords } = await triggerPosRequest(locationOptions)
      geogLocation.value = coords
    } catch (error) {
      let message
      if (error instanceof Error) {
        message = error.message
      } else {
        message = String(error)
      }
      alert(`The following error occured: ${message}`)
    }
  }
  await fetchCoordinates()
  return geogLocation
}

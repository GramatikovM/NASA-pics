import type { NasaPic, MostRecentEarthPic } from '../types'

export const getApiData = async (
  url: string
): Promise<NasaPic | Response | MostRecentEarthPic[] | undefined> => {
  const controller = new AbortController()
  const response = await fetch(url)
  if (!response.ok) {
    controller.abort()
    throw new Error('Network response was unsuccessful.')
  }
  const result = await response.json()

  return result
}

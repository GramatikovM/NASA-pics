import type { NasaPic, MostRecentEarthPic } from '../types'

export const getApiData = async (
  url: string
): Promise<NasaPic | Response | MostRecentEarthPic[] | undefined> => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Network response was unsuccessful.')
  }
  const result = await response.json()

  return result
}

export type NasaPic = {
  title: string
  date: string
  explanation: string
  hdurl: string
  url: string
  mediaType: string
}

export type Options = {
  enableHighAccuracy: boolean
  timeout: number
  maximumAge: number
}

export type MostRecentEarthPic = {
  identifier: string
  date: string
  image: string
}

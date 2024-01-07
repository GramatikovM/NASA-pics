export type NasaPic = {
  title: string
  date: string
  explanation: string
  hdurl: string
  url: string
  media_type: string
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

export type EarthLocalImage = {
  id: string
  date: string
  url: string
  resource: { planet: string }
}

export type QueryError = {
  message: string
}

export type AllAvailableDates = Array<{ date: string }>

export type UserData = {
  token?: string
  id?: string
  nickname?: string
  email?: string
  avatar?: string
}

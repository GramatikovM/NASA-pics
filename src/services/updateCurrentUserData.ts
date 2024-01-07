import type { UserData } from '@/types'

const updateCurrentUserData = async (userData: UserData) => {
  const controller = new AbortController()
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${userData.token}`
  }
  const body = JSON.stringify({ userData })

  const requestOptions = {
    method: 'PATCH',
    headers,
    body
  }
  const response = await fetch(
    `https://login.auth0.com/api/v2/users/${userData.id}`,
    requestOptions
  )

  if (!response.ok) {
    controller.abort()
    throw new Error('Network response was unsuccessful.')
  }
  return await response.json()
}

export default updateCurrentUserData

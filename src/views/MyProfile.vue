<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import { auth0 } from '../main'
import BaseButton from '@/components/BaseButton.vue'
import { usePicOfTheDayStore } from '@/stores/picOfTheDayStore'
import updateCurrentUserData from '@/services/updateCurrentUserData'
import type { UserData } from '@/types'

const { user } = useAuth0()
const store = usePicOfTheDayStore()
// console.log(user.value)
// console.log(auth0.idTokenClaims.value?.__raw)
// console.log(await auth0.getAccessTokenSilently())

const userData = {
  token: await auth0.getAccessTokenSilently(),
  id: user.value?.sub,
  nickname: 'updatedFirstUser'
}

const updateUserDetails = async () => {
  const updatedUser = await updateCurrentUserData(userData)
  console.log(updatedUser)
}
</script>

<template>
  <div class="profile-page-container">
    <div class="user-data-container">
      <p>
        Nickname: <span class="user-details">{{ user?.nickname }}</span>
      </p>
      <p>
        Email: <span class="user-details">{{ user?.email }}</span>
      </p>
      <p>Avatar:</p>
      <img class="avatar" :src="user?.picture" alt="avatar" />
      <BaseButton text="Edit Profile" :action="updateUserDetails" />
    </div>
    <h1 class="fav-heading">Your favourite images:</h1>
    <div class="favourite-images-container">
      <div class="image-container" v-for="image in store.favouritePics" :key="image.title">
        <h2>{{ image.title }}</h2>
        <p>{{ image.date }}</p>
        <img class="favourite-image" :src="image.url" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-page-container {
  margin-right: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}
.user-data-container {
  margin: 1em;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  border: 1px solid #cec1c1;
  border-radius: 10px;
}
.user-details {
  font-weight: 600;
}
.avatar {
  width: 100px;
  align-self: center;
  border-radius: 50%;
}
.fav-heading {
  font-size: 1.1em;
  font-weight: 600;
}
.favourite-images-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
}
.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25em;
}
.favourite-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
</style>

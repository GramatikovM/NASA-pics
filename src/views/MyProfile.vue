<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import { usePicOfTheDayStore } from '@/stores/picOfTheDayStore'
import BaseButton from '@/components/BaseButton.vue'

const { user } = useAuth0()
const store = usePicOfTheDayStore()

const handleRemoveImage = (event?: Event) => {
  const title = (event?.target as HTMLElement).parentElement?.firstChild?.textContent
  title && store.removeFromFavourites(title)
}
</script>

<template>
  <div class="profile-page-container">
    <h1 class="fav-heading">Your Profile:</h1>
    <div class="user-data-container">
      <p>
        Nickname: <span class="user-details">{{ user?.nickname }}</span>
      </p>
      <p>
        Email: <span class="user-details">{{ user?.email }}</span>
      </p>
      <p>Avatar:</p>
      <img class="avatar" :src="user?.picture" alt="avatar" />
    </div>
    <h1 class="fav-heading">Your favourite images:</h1>
    <div class="favourite-images-container">
      <div class="image-container" v-for="image in store.favouritePics" :key="image.title">
        <h2>{{ image.title }}</h2>
        <p>{{ image.date }}</p>
        <img class="favourite-image" :src="image.url" />
        <BaseButton text="Remove Image" :action="handleRemoveImage" />
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
  margin-bottom: 1em;
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

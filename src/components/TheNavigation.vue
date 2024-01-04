<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import BaseProfileMenu from './BaseProfileMenu.vue'

const isProfileMenuShown = ref(false)
const showProfileMenu = () => {
  isProfileMenuShown.value = true
}
const hideProfileMenu = () => {
  isProfileMenuShown.value = false
}
</script>

<template>
  <nav class="nav-bar">
    <RouterLink class="nav-link" :to="{ name: 'HomepageEl' }">Home</RouterLink>
    <RouterLink class="nav-link" :to="{ name: 'PicOfTheDay' }">Picture of the day</RouterLink>
    <RouterLink class="nav-link" :to="{ name: 'EarthImage' }">Earth Image</RouterLink>
    <RouterLink class="nav-link" :to="{ name: 'MostRecentPic' }">Most Recent Picture</RouterLink>
    <div>
      <button
        class="profile-menu-button"
        @mousemove="showProfileMenu"
        @mouseleave="hideProfileMenu"
      >
        <img class="profile-menu-pic" src="/defaultProfile.jpg" alt="profile-menu" />
      </button>
      <BaseProfileMenu
        v-if="isProfileMenuShown"
        @mousemove="showProfileMenu"
        @mouseleave="hideProfileMenu"
      />
    </div>
  </nav>
</template>

<style scoped>
.nav-bar {
  display: flex;
  align-items: center;
  gap: 1em;
}
.nav-link {
  font-size: 1.1em;
  padding: 0.5em;
}
.nav-link:link {
  text-decoration: none;
}
.nav-link:visited {
  color: unset;
}
.nav-link:hover {
  color: #ffffff;
  background-color: #6a33fe;
}
.profile-menu-button {
  position: relative;
  padding: unset;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: unset;
}
.profile-menu-pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
</style>

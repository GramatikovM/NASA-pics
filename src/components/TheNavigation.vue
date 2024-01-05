<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import BaseProfileMenu from './BaseProfileMenu.vue'

const isProfileMenuShown = ref(false)
const isBurgerMenuShown = ref(false)
const showProfileMenu = () => {
  isProfileMenuShown.value = true
}
const hideProfileMenu = () => {
  isProfileMenuShown.value = false
}
const toggleBurgerMenu = () => {
  isBurgerMenuShown.value = !isBurgerMenuShown.value
}
const hideBurgerMenu = () => {
  isBurgerMenuShown.value = false
}
</script>

<template>
  <nav class="nav-bar">
    <div class="normal-menu">
      <RouterLink class="nav-link" :to="{ name: 'HomepageEl' }">Home</RouterLink>
      <RouterLink class="nav-link" :to="{ name: 'PicOfTheDay' }">Picture of the day</RouterLink>
      <RouterLink class="nav-link" :to="{ name: 'EarthImage' }">Earth Image</RouterLink>
      <RouterLink class="nav-link" :to="{ name: 'MostRecentPic' }">Most Recent Picture</RouterLink>
    </div>
    <div class="burger-menu-button" @click="toggleBurgerMenu">Menu</div>
    <div v-if="isBurgerMenuShown" class="burger-menu" @mouseleave="hideBurgerMenu">
      <RouterLink class="nav-link" :to="{ name: 'HomepageEl' }">Home</RouterLink>
      <RouterLink class="nav-link" :to="{ name: 'PicOfTheDay' }">Picture of the day</RouterLink>
      <RouterLink class="nav-link" :to="{ name: 'EarthImage' }">Earth Image</RouterLink>
      <RouterLink class="nav-link" :to="{ name: 'MostRecentPic' }">Most Recent Picture</RouterLink>
    </div>
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
  position: relative;
  display: flex;
  align-items: center;
  gap: 1em;
}
.normal-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
.burger-menu-button {
  display: none;
}
.burger-menu {
  display: none;
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

@media only screen and (max-width: 760px) {
  .nav-bar .normal-menu {
    display: none;
  }
  .nav-bar .burger-menu-button {
    display: block;
    font-size: 1.25em;
    cursor: pointer;
  }
  .nav-bar .burger-menu {
    position: absolute;
    bottom: -10.5em;
    display: flex;
    flex-direction: column;
    background-color: #04aa6d;
    border-radius: 0.25em;
    z-index: 10;
  }
  .burger-menu a.nav-link {
    color: #ffffff;
  }
}
@media only screen and (max-width: 480px) {
  div .nav-bar {
    gap: 0.1em;
  }
  .nav-bar .burger-menu {
    bottom: -12.5em;
  }
  .nav-bar .burger-menu-button {
    font-size: 1.1em;
  }
  div .profile-menu-pic {
    width: 40px;
    height: 40px;
  }
}
</style>

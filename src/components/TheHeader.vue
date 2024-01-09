<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { computed } from 'vue'
import { useAuth0 } from '@auth0/auth0-vue'
import TheNavigation from './TheNavigation.vue'

const { user, isAuthenticated } = useAuth0()
const avatarPic = computed(() => (isAuthenticated ? user.value?.picture : '/defaultProfile.jpg'))
</script>

<template>
  <div class="header-container">
    <RouterLink class="left-side-container" :to="{ name: 'HomepageEl' }">
      <img class="the-logo" src="/logo.jpg" alt="logo" />
      <h1 class="app-name">The Universe App</h1>
    </RouterLink>
    <TheNavigation :avatarPic="avatarPic" />
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  padding: 1em 3em;
  border-radius: 1em;
  background-color: #b7eef6;
}
.left-side-container {
  display: flex;
  align-items: center;
  column-gap: 1em;
}
.app-name {
  font-size: 1.25em;
  font-weight: 600;
}
.the-logo {
  border-radius: 50%;
}
a {
  text-decoration: none;
  color: unset;
}

@media only screen and (max-width: 850px) {
  .the-logo {
    width: 50px;
  }
  .app-name {
    font-size: 1.1em;
  }
}
@media only screen and (max-width: 480px) {
  div .header-container {
    padding: 1em 1em;
  }
  .the-logo {
    width: 40px;
  }
  a .app-name {
    font-size: 1.05em;
  }
}
</style>

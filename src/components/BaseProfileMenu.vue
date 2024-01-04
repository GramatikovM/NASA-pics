<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

const { loginWithRedirect, isAuthenticated, logout } = useAuth0()

const handleSignUp = () => {
  loginWithRedirect({
    appState: {
      target: '/pic-of-the-day'
    },
    authorizationParams: {
      screen_hint: 'signup'
    }
  })
}

const handleLogIn = () => {
  loginWithRedirect({
    appState: {
      target: '/pic-of-the-day'
    }
  })
}

const handleLogOut = () => {
  logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  })
}
</script>

<template>
  <menu class="profile-menu">
    <ul v-if="!isAuthenticated">
      <li class="profile-menu-item" @click="handleSignUp">SignUp</li>
      <li class="profile-menu-item" @click="handleLogIn">LogIn</li>
    </ul>
    <ul v-else>
      <li class="profile-menu-item" @click="handleLogOut">Log Out</li>
    </ul>
  </menu>
</template>

<style scoped>
.profile-menu {
  position: absolute;
  padding: 1em;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 6px;
  border: 1px solid #e2e3e7e5;
}
.profile-menu-item {
  padding: 0.5em 0.1em;
  font-size: 1.1em;
  cursor: pointer;
}
.profile-menu-item:hover {
  background-color: #f3f4f8e5;
}
</style>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
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
      <RouterLink class="profile-menu-link" :to="{ name: 'MyProfile' }">Profile</RouterLink>
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
.profile-menu-item,
.profile-menu-link {
  padding: 0.5em 0.1em;
  font-size: 1.1em;
  cursor: pointer;
}
.profile-menu-link {
  color: #000000;
  text-decoration: none;
}
.profile-menu-link:hover {
  color: #000000;
}
.profile-menu-item:hover,
.profile-menu-link:hover {
  background-color: #f3f4f8e5;
}

@media only screen and (max-width: 480px) {
  div .profile-menu {
    padding: 0.5em;
  }
  ul .profile-menu-item {
    font-size: 1em;
    padding: 0.3em 0;
  }
}
</style>

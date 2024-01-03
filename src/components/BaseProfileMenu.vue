<script setup lang="ts">
defineProps<{
  menuItems: string[]
}>()
</script>

<template>
  <menu class="profile-menu">
    <li class="profile-menu-item" v-for="menu in menuItems" :key="menu">{{ menu }}</li>
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
  padding: 0.5em 0.25em;
  font-size: 1.1em;
  cursor: pointer;
}
.profile-menu-item:hover {
  background-color: #f3f4f8e5;
}
</style>

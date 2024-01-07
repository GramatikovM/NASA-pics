<script setup lang="ts">
interface Props {
  text: string
  action?: () => void
}

defineProps<Props>()
</script>

<template>
  <button class="basic-button" @click="action">{{ text }}</button>
</template>

<style scoped>
.basic-button {
  width: fit-content;
  align-self: center;
  cursor: pointer;
  font-size: 0.9em;
  font-weight: 600;
  line-height: 1.5em;
  padding: 0.4em 0.9em;
  background-color: #2ea44f;
  color: #ffffff;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
}
.basic-button:hover {
  background-color: #2c974b;
}
</style>

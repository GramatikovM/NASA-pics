<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="footer-container">
    <div class="social-icon-container">
      <img class="social-icon" src="/facebook-icon.jpg" alt="facebook" />
      <img class="social-icon" src="/instagram-icon.jpg" alt="instagram" />
      <img class="social-icon" src="/twitter-icon.png" alt="twitter" />
      <img class="social-icon" src="/linkedin-icon.png" alt="linkedin" />
    </div>
    <div class="footer-links-container">
      <RouterLink class="footer-link" :to="{ name: 'AboutUs' }">About us</RouterLink>
      <RouterLink class="footer-link" :to="{ name: 'ContactUs' }">Contact us</RouterLink>
      <RouterLink class="footer-link" :to="{ name: 'PrivacyPolicy' }">Privacy Policy</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  height: 4rem;
  width: inherit;
  padding: 1em 3em;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: #b7eef6;
  border-radius: 1em;
}
.social-icon-container {
  display: flex;
  align-items: center;
  gap: 1em;
}
.social-icon {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
}
.footer-links-container {
  display: flex;
}
.footer-link {
  display: flex;
  align-items: center;
  font-size: 1.1em;
  padding: 0.5em;
  color: #000000;
}
.footer-link:link {
  text-decoration: none;
}
.footer-link:hover {
  color: #ffffff;
  background-color: #6a33fe;
}

@media only screen and (max-width: 770px) {
  div .footer-container {
    padding: 0.65em 1em;
  }
  div .social-icon-container {
    gap: 0.5em;
  }
  div .footer-link {
    font-size: 1.05em;
  }
}

@media only screen and (max-width: 500px) {
  div .footer-container {
    padding: 0.2em;
  }
  div .footer-link {
    font-size: 0.9em;
  }
  div .social-icon {
    width: 25px;
    height: 25px;
  }
}
</style>

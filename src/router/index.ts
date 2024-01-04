import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from '@auth0/auth0-vue'
import HomepageEl from '../views/HomepageEl.vue'
import EarthImage from '../views/EarthImage.vue'
import MostRecentPic from '../views/MostRecentPic.vue'
import PicOfTheDay from '../views/PicOfTheDay.vue'
import AboutUsVue from '@/views/AboutUs.vue'
import ContactUsVue from '@/views/ContactUs.vue'
import PrivacyPolicyVue from '@/views/PrivacyPolicy.vue'

const routes = [
  { path: '/', name: 'HomepageEl', component: HomepageEl },
  { path: '/earth-image', name: 'EarthImage', component: EarthImage, beforeEnter: authGuard },
  {
    path: '/most-recent-pic',
    name: 'MostRecentPic',
    component: MostRecentPic,
    beforeEnter: authGuard
  },
  { path: '/pic-of-the-day', name: 'PicOfTheDay', component: PicOfTheDay, beforeEnter: authGuard },
  { path: '/about-us', name: 'AboutUs', component: AboutUsVue },
  { path: '/contact-use', name: 'ContactUs', component: ContactUsVue },
  { path: '/privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicyVue }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

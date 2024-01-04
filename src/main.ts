import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue'
import { VueQueryPlugin } from 'vue-query'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import router from './router'

import App from './App.vue'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
app.use(pinia)
app.use(router)
app.use(
  createAuth0({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    authorizationParams: {
      redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL
    }
  })
)
app.use(VueQueryPlugin)

app.mount('#app')

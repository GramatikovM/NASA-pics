import { createApp } from 'vue'
import { VueQueryPlugin } from "vue-query";
import { createPinia } from 'pinia'
import router from "./router"

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)

app.mount('#app')

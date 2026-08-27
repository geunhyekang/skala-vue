import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import 'pretendard/dist/web/static/pretendard.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './assets/toss-theme.css'

import App from './App.vue'
import router from './exercise/router/index.js'
import TossPreset from './plugins/tossPreset'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: { preset: TossPreset },
})

app.mount('#app')
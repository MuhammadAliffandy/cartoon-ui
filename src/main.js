import './assets/main.css'
import 'animate.css'
import 'vue3-carousel/carousel.css'
import 'aos/dist/aos.css'
import AOS from 'aos'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

AOS.init()

app.mount('#app')

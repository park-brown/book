// register vue composition api globally
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import { createPinia } from 'pinia'
import VueMathjax from 'vue-mathjax-next'
import VuePlyr from 'vue-plyr'
import ThemeProvider from './ThemeProvider.vue'
// import QueryProvider from './QueryProvider.vue'
import '~/sass/_reset.scss'
import 'vue-plyr/dist/vue-plyr.css'
const pinia = createPinia()
// pinia.use()
const app = createApp(ThemeProvider)
const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.use(router)
app.use(pinia)
app.use(VueMathjax)
app.use(VuePlyr, {
  plyr: {
    i18n: {
      speed: '播放速度',
      normal: '正常',
    },
  },
})
app.mount('#app')

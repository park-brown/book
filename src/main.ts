// register vue composition api globally
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import { createPinia } from 'pinia'
import ThemeProvider from './ThemeProvider.vue'
// import QueryProvider from './QueryProvider.vue'
import '~/sass/_reset.scss'
const pinia = createPinia()
// pinia.use()
const app = createApp(ThemeProvider)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.use(pinia)
app.mount('#app')

import {
  createApp
} from 'vue'
import './tailwind.css'
import App from './App.vue'
import {
  routes
} from './routes.js'
import {
  createRouter,
  createWebHistory
} from 'vue-router'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        top: document.getElementById(to.hash.substring(1)).offsetTop, // use substring(1) to remove '#' from hash, since '#' is required in hashes
        behavior: 'smooth'
      }
    } else {
      return {
        top: 0
      }
    }
  }
})

app.use(router)
app.mount('#app')
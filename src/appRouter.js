import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/:catchAll(.*)',
    component: Home
  }
]

export const routeConfig = createRouter({
  history: createWebHistory(),
  routes
})

// routeConfig.beforeEach(async (to,from, next) => {
//     window.scrollTo(0,0)
//     next()
// })

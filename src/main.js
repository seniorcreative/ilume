import { createApp } from 'vue'
import App from './App.vue'
import * as appRouter from './appRouter'
import store from './store'
import http from './http'
require('@/assets/main.scss')

const app = createApp(App)

app.use(appRouter.routeConfig)
  .use(store)
  .use(http)
  .mount('#app')

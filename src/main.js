import { createApp } from 'vue'
import App from './App.vue'
import * as appRouter from './appRouter'
import store from './store'
import http from './http'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight, faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronLeft, faChevronRight, faSearch, faTimesCircle)
const app = createApp(App)

app.use(appRouter.routeConfig)
  .use(store)
  .use(http)
  .mount('#app')

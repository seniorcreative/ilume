import { createStore } from 'vuex'
import contentModule from './modules/content'

const store = createStore({
  modules: {
    content: contentModule
  }
})

export default store

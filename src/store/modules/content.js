
const state = () => ({
})

const getters = {
  getContentData: () => () => {
    return JSON.parse(localStorage.getItem('contentData'))
  }
}

const actions = {
}

const mutations = {
  setContentData (state, data) {
    state.contentData = data
    localStorage.setItem('contentData', JSON.stringify(data))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

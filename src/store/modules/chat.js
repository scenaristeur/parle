//import shop from '../../api/shop'

// initial state
const state = () => ({
  root: "",
  fileUrl: "",
  //  requests: [],
  messages: []
})

// getters
const getters = {}

// actions
const actions = {
  /*requestUpdate(state, url){

  //state.requests.push(url)
}*/
}

// mutations
const mutations = {
  setRoot (state, root) {
    state.root = root
  },
  setFileUrl(state, fileUrl){
    state.fileUrl = fileUrl
  },
  setMessages(state,messages){
    state.messages = messages
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

//import shop from '../../api/shop'

// initial state
const state = () => ({
  root: "",
  dataDate: "",
  path: "",
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
  setPath(state, path){
    state.path = path
  },
  setMessages(state,messages){
    state.messages = messages
  },
  setDataDate(state, date){
    state.dataDate = date
  },
  setFileUrl(state, fileUrl){
    state.fileUrl = fileUrl
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

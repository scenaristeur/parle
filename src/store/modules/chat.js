//import shop from '../../api/shop'

// initial state
const state = () => ({
  root: "",
  dataDate: "",
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
  },
  setDataDate(state, date){
    state.dataDate = date
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

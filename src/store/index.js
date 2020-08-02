import Vue from "vue";
import Vuex from "vuex";
import solid from './modules/solid'
import chat from './modules/chat'
import websocket from './modules/websocket'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    keyword: "",
    count: 0
  },
  mutations: {
    setKeyword(state, payload) {
      console.log(state.keyword, payload)
      state.keyword = payload;
    },
    add(state, montant){
      console.log(state.count)
      state.count = state.count+montant
      console.log(montant)
    }
  },
  actions: {},
  modules: { solid, chat, websocket }
});

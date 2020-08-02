import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

let solid = window.solid
console.log("SOLID",solid)
let SolidFileClient = window.SolidFileClient
console.log("SFC", SolidFileClient)

new Vue({
  router,
  store,
  solid,
  render: h => h(App)
}).$mount('#app')

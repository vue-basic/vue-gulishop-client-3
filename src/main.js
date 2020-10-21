
import App from './App.vue'
import Vue from 'vue'
import router from '@/router'

import TypeNav from '@/components/TypeNav'
Vue.component('TypeNav',TypeNav)

// import '@/api'
// import {reqCategoryList} from '@/api'
// reqCategoryList()

import store from '@/store'

Vue.config.productionTip = false

new Vue({
  el:"#app",
  render: h => h(App),
  router,
  store 
})

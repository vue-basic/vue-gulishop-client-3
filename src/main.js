
import App from './App.vue'
import Vue from 'vue'
import router from '@/router'

import TypeNav from '@/components/TypeNav'
Vue.component('TypeNav',TypeNav)

import sliderLoop from '@/components/sliderLoop'
Vue.component('sliderLoop',sliderLoop)

// import '@/api'
// import {reqCategoryList} from '@/api'
// reqCategoryList()

import store from '@/store'
import '@/mock/mockServer'

Vue.config.productionTip = false

new Vue({
  el:"#app",
  render: h => h(App),
  router,
  store 
})

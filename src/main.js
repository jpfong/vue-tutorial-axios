import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

const base = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com',
})

Vue.prototype.$http = base

new Vue({
  el: '#app',
  render: h => h(App)
})

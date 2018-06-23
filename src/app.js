import Vue from 'vue'
import Button from './button'

Vue.component('g-button', Button)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
  }
})

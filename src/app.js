import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
  }
})

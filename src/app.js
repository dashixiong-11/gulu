import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Picker from './address'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-picker',Picker)

new Vue({
  el:'#app',
  data:{
    message:'',
    loading1:true,
    loading2:false,
    loading3:false
  },
  methods:{
  }
})


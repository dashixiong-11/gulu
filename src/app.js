import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
new Vue({
  el:'#app',
  data:{
    loading1:true,
    loading2:false,
    loading3:false
  }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
{
  const Contructor = Vue.extend(Button)
  const button = new Contructor({
    propsData:{
      icon:'setting'
    }
  }).$mount()
  let useElement = button.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
  button.$el.remove()
  button.$destroy()
}
{
  const Contructor = Vue.extend(Button)
  const button = new Contructor({
    propsData:{
      icon:'setting',
      loading:true
    }
  }).$mount()
  let useElement = button.$el.querySelector('use')
  let herf = useElement.getAttribute('xlink:href')
  expect(herf).to.eq('#i-jiazaizhong')
  button.$el.remove()
  button.$destroy()
}
{
  const Contructor = Vue.extend(Button)
  const button = new Contructor({
    propsData:{
      icon:'setting',
      loading:true
    }
  }).$mount('#test')
  let svg = button.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  button.$el.remove()
  button.$destroy()
}
{
  const  div = document.createElement('div')
  document.body.appendChild(div)
  const Contructor = Vue.extend(Button)
  const button = new Contructor({
    propsData:{
      icon:'setting',
      loading:true,
      iconPosition:'right'
    }
  }).$mount(div)
  let svg = button.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  button.$el.remove()
  button.$destroy()
}
{
  const Contructor = Vue.extend(Button)
  const gbutton = new Contructor({
    propsData:{
      icon:'setting',
    }
  }).$mount()
  let spy = chai.spy(function(){})
  gbutton.$on('click',spy)
  let button = gbutton.$el
  button.click()
  expect(spy).to.have.been.called()
}

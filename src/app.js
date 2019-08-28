import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from  './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from  './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'



Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-sider',Sider)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.component('g-toast',Toast)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-popover',Popover)
Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)
Vue.use(plugin)


new Vue({
  el:'#app',
  data:{
    selectedTab:'dz',
    selected:'2'
  },
  methods: {
    showToast1(){
        console.log('1')
      this.showToast('top')
    },
    showToast2(){
      console.log('2')
      this.showToast('middle')
    },
    showToast3(){
      console.log('3')
      this.showToast('bottom')
    },
    showToast(position) {
      this.$toast('很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字', {
        position,
        closeButton: {
          text: '关闭',
          callback(/*toast*/) { //这里拿到组件实例
            //toast.log()
            console.log('关闭')
          }
        },
        autoClose: 2,
      })
    }
  }
})


import chai, {expect} from 'chai'
import {mount, shallowMount} from '@vue/test-utils'
// mount : 完成的渲染，包括子组件
// shallowMount : 只渲染当前组件，如果有子组件就会虚构一个假的子组件来渲染
import Nav from '../../src/nav/nav.vue'
import NavItem from '../../src/nav/nav-item.vue'
import NavSub from '../../src/nav/nav-sub.vue'

import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Vue from "vue"

chai.use(sinonChai)

describe('Nav.vue', () => {
   it('Nav 存在.', () => {
      expect(Nav).to.exist
   })

   it('支持 selected 属性', (done) => {
      Vue.component('GNavItem', NavItem)
      Vue.component('GNavSub', NavSub)
      const wrapper = mount(Nav, {
         propsData: {
            selected: 'home'
         },
         slots: {
            default: `
               <g-nav-item name="home">首页</g-nav-item>
        `
         },
      })
      setTimeout(()=>{
         wrapper.vm.$children.forEach( item =>{
            if(item.$props.name === 'home'){
               expect(item.$data.selected).to.equal(true)
            }
         })
         done()
      })
   })

   it('触发 update:selected 事件', (done) => {
      Vue.component('GNavItem', NavItem)
      Vue.component('GNavSub', NavSub)
      const callback = sinon.fake()
      const wrapper = mount(Nav, {
         propsData: {
            selected: 'home'
         },
         slots: {
            default: `
               <g-nav-item name="home">首页</g-nav-item>
               <g-nav-sub name="about">
                  <template slot="title">关于</template>
                  <g-nav-item name="culture">企业文化</g-nav-item>
                  <g-nav-item name="developers">开发团队</g-nav-item>
               </g-nav-sub>
               <g-nav-item name="hire">招聘</g-nav-item>
        `
         },
         listeners: {
            'update:selected': callback
         }
      })
      setTimeout(()=>{
         wrapper.find('[data-name="developers"]').trigger('click')
         expect(callback).to.have.been.calledWith('developers')
         done()
      })
   })

})

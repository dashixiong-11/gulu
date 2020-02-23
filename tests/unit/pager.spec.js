import chai, {expect} from 'chai'
import {mount, shallowMount} from '@vue/test-utils'
// mount : 完成的渲染，包括子组件
// shallowMount : 只渲染当前组件，如果有子组件就会虚构一个假的子组件来渲染
import Pager from '../../src/pager.vue'

import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

describe('Pager.vue', () => {
   it('存在.', () => {
      expect(Pager).to.exist
   })

   it('接受 totalPage 参数',() =>{
      const wrapper = mount(Pager, {
         propsData: {
            totalPage: 20,
            currentPage:3
         }
      })
      expect(wrapper.props('totalPage')).to.equal(20)
   })

   it('可以设置 当前选中页 currentPage',() =>{
      const wrapper = mount(Pager, {
         propsData: {
            totalPage: 20,
            currentPage:3
         }
      })
      const vm = wrapper.vm
      const pager = vm.$el.querySelector('.active')
      expect(wrapper.props('currentPage')).to.equal(3)
      expect(pager.innerHTML).to.equal('3')
   })


   it('可以触发 上一页',(done) =>{
      const callback = sinon.fake();
      const wrapper = mount(Pager, {
         propsData: {
            totalPage: 20,
            currentPage:3
         },
         listeners: {
            'update:currentPage': callback
         }
      })
      setTimeout(()=>{
         wrapper.find({ ref:'prev'}).trigger('click')
         expect(callback).to.have.been.calledWith(2)
         done()
      },21)
   })

   it('可以触发 下一页',(done) =>{
      const callback = sinon.fake();
      const wrapper = mount(Pager, {
         propsData: {
            totalPage: 20,
            currentPage:3
         },
         listeners: {
            'update:currentPage': callback
         }
      })
      setTimeout(()=>{
         wrapper.find({ref:'next'}).trigger('click')
         expect(callback).to.have.been.calledWith(4)
         done()
      },21)
   })

})

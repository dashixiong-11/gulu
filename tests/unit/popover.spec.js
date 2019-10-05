import Popover from '@/popover'
import chai, {expect} from 'chai'
import {mount, shallowMount} from '@vue/test-utils'// mount : 完成的渲染，包括子组件 shallowMount : 只渲染当前组件，如果有子组件就会虚构一个假的子组件来渲染
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)



describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.exist
    })
    it('可以设置position', () => {
        const wrapper = mount(Popover,{
            slots:{
                default:{template:`<button>点我</button>`},
                content:'<div>弹出内容</div>>',
            },
            propsData:{
                position:'bottom'
            }
        })
        wrapper.find('button').trigger('click')
        const classes = wrapper.find('.content-wrapper').classes()
        expect(classes).to.include('position-bottom')
    })
    it('可以设置trigger',()=>{
        const wrapper = mount(Popover,{
            slots:{
                default:{template:`<button>点我</button>`},
                content:'<div>弹出内容</div>>',
            },
            propsData:{
                position:'bottom',
                trigger:'hover'
            }
        })
        expect(wrapper.find('.content-wrapper').element).to.not.exist

        wrapper.find('.popover').trigger('mouseenter')
        expect(wrapper.find('.content-wrapper').element).to.exist
    })
})


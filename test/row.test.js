const expect = chai.expect
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row',()=>{
    it('存在',()=>{
        expect(Row).to.exist
    })
    it('接受gutter属性',()=>{
        Vue.component('g-row',Row)
        Vue.component('g-col',Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <g-row gutter="20">
                <g-col span="12"></g-col>
                <g-col span="12"></g-col>
            </g-row>
        `
        const vm = new Vue({
            el:div
        })
        setTimeout(()=>{
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(col[0]).paddingRight).tp.eq('10px')
            expect(getComputedStyle(col[1]).paddingLeft).tp.eq('10px')
            done()
        })
        vm.$el.remove()
        vm.$destroy()
    })
    it('接收align属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                align: 'center'
            }
        }).$mount(div)
        const useElement = vm.$el.querySelector('use')
        expect(getComputedStyle(element).justifyContent).to.equal('center')
        div.remove()
        vm.$destroy()
    })
})
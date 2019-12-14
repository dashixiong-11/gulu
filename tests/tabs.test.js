const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs/tabs'
import TabsHead from '../src/tabs/tabs-head'
import TabsBody from '../src/tabs/tabs-body'
import TabsItem from '../src/tabs/tabs-item'
import TabsPane from '../src/tabs/tabs-pane'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.be.ok
    })
    it('接受selected', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-tabs selected="dz">
            <g-tabs-head>
                <g-tabs-item name="fs">法师</g-tabs-item>
                <g-tabs-item name="zs">战士</g-tabs-item>
                <g-tabs-item name="dz">盗贼</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="fs">法师相关</g-tabs-pane>
                <g-tabs-pane name="zs">战士相关</g-tabs-pane>
                <g-tabs-pane name="dz">盗贼相关</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
        `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let x = vm.$el.querySelector(`.tabs-item[data-name="dz"]`)
            expect(x.classList.contains('active')).to.be.true
            done()
        })
    })
    it('可以接受 direction ',() => {

    })
})

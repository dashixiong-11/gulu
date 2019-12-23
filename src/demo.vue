<template>
   <div >
      <g-nav :selected.sync="selected">
         <g-nav-item name="home">首页</g-nav-item>
         <g-nav-sub>
            <template slot="title">关于</template>
            <g-nav-item name="culture">企业文化</g-nav-item>
            <g-nav-item name="developers">开发团队</g-nav-item>
            <g-nav-sub>
               <template slot="title">联系方式</template>
               <g-nav-item name="wechat">微信</g-nav-item>
               <g-nav-item name="qq">QQ</g-nav-item>
               <g-nav-sub>
                  <template slot="title">手机</template>
                  <g-nav-item name="cm">移动</g-nav-item>
                  <g-nav-item name="cn">联通</g-nav-item>
                  <g-nav-item name="cu">电信</g-nav-item>
               </g-nav-sub>
            </g-nav-sub>
         </g-nav-sub>
         <g-nav-item name="hire">招聘</g-nav-item>
      </g-nav>

   </div>
</template>
<script>
   import GNav from './nav/nav'
   import GNavItem from './nav/nav-item'
   import GNavSub from './nav/nav-sub'

   import Vue from 'vue'
   Vue.use(plugin)
   import plugin from './plugin'

   export default {
      components: {GNav,GNavItem,GNavSub},
      data() {
         return {
            selected:'culture'
         }
      },
      created() {
      },
      methods: {

      }
   }
</script>

<style>
   * { margin: 0; padding: 0; box-sizing: border-box; }
</style>
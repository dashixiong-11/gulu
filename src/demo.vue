<template>
   <div >
<!--
      <g-nav :selected.sync="selected">
         <g-nav-item name="home">首页</g-nav-item>
         <g-nav-sub name="about">
            <template slot="title">关于</template>
            <g-nav-item name="culture">企业文化</g-nav-item>
            <g-nav-item name="developers">开发团队</g-nav-item>
            <g-nav-sub name="contacts">
               <template slot="title">联系方式</template>
               <g-nav-item name="wechat">微信</g-nav-item>
               <g-nav-item name="qq">QQ</g-nav-item>
               <g-nav-sub name="phone">
                  <template slot="title">手机</template>
                  <g-nav-item name="cm">移动</g-nav-item>
                  <g-nav-item name="cn">联通</g-nav-item>
                  <g-nav-item name="cu">电信</g-nav-item>
               </g-nav-sub>
            </g-nav-sub>
         </g-nav-sub>
         <g-nav-item name="hire">招聘</g-nav-item>
      </g-nav>
-->

      <g-nav-vertical :selected.sync="selected" style="margin-top: 100px;width: 200px;">
         <g-nav-vertical-item name="home">首页</g-nav-vertical-item>
         <g-nav-vertical-sub name="about">
            <template slot="title">关于</template>
            <g-nav-vertical-item name="culture">企业文化</g-nav-vertical-item>
            <g-nav-vertical-item name="developers">开发团队</g-nav-vertical-item>
            <g-nav-vertical-sub name="contacts">
               <template slot="title">联系方式</template>
               <g-nav-vertical-item name="wechat">微信</g-nav-vertical-item>
               <g-nav-vertical-item name="qq">QQ</g-nav-vertical-item>
               <g-nav-vertical-sub name="phone">
                  <template slot="title">手机</template>
                  <g-nav-vertical-item name="cm">移动</g-nav-vertical-item>
                  <g-nav-vertical-item name="cn">联通</g-nav-vertical-item>
                  <g-nav-vertical-item name="cu">电信</g-nav-vertical-item>
               </g-nav-vertical-sub>
            </g-nav-vertical-sub>
         </g-nav-vertical-sub>
         <g-nav-vertical-item name="hire">招聘</g-nav-vertical-item>
      </g-nav-vertical>
   </div>
</template>
<script>
/*
   import GNav from './nav/nav'
   import GNavItem from './nav/nav-item'
   import GNavSub from './nav/nav-sub'
*/
   import GNavVertical from './nav-vertical/nav-vertical'
   import GNavVerticalItem from './nav-vertical/nav-vertical-item'
   import GNavVerticalSub from './nav-vertical/nav-vertical-sub'

   import Vue from 'vue'
   Vue.use(plugin)
   import plugin from './plugin'

   export default {
      components: {GNavVertical,GNavVerticalItem,GNavVerticalSub},
      data() {
         return {
            selected:'home'
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
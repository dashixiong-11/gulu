<template>
   <div >
      <g-nav :selected.sync="selected">
         <g-nav-item name="home">首页</g-nav-item>
         <g-nav-item name="about">关于</g-nav-item>
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
            selected:'about'
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
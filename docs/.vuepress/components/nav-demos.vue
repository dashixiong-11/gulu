<template>
   <div class="nav-demos">
      <g-nav :selected.sync="selected" :callback="callback">
         <g-nav-item name="x"> 主页</g-nav-item>
         <g-nav-sub name="y">
            <template slot="title">文档</template>
            <g-nav-item name="y1"> 安装</g-nav-item>
            <g-nav-item name="y2"> 说明</g-nav-item>
            <g-nav-sub name="y3">
               <template slot="title">组件</template>
               <g-nav-item name="y31"> 组件1</g-nav-item>
               <g-nav-item name="y32"> 组件2</g-nav-item>
            </g-nav-sub>
         </g-nav-sub>
         <g-nav-item name="z"> 交流</g-nav-item>
      </g-nav>

   </div>
</template>

<script>
   import GNav from '../../../src/nav/nav'
   import GNavItem from '../../../src/nav/nav-item'
   import GNavSub from '../../../src/nav/nav-sub'

   export default {
      name: "nav-demos",
      components: {GNav, GNavItem, GNavSub},
      data() {
         return {
            selected: 'y32'
         }
      },
      created() {

      },
      watch:{
         selected(name){
            console.log(name)
         }
      },
      methods:{
         callback(name){
            console.log(name)
         },
      }
   }
</script>

<style scoped lang="scss">
   .nav-demos {
   }

</style>
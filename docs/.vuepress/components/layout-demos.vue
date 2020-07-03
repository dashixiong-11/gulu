<template>
   <div>
      <g-layout style="height: 500px;">
         <g-sider> sider</g-sider>
         <g-layout>
            <g-header> header </g-header>
            <g-content> content </g-content>
            <g-footer> footer </g-footer>
         </g-layout>
      </g-layout>


      <g-layout style="height: 500px; margin-top: 2em;">
         <g-header> header </g-header>
         <g-layout>
            <g-sider> sider</g-sider>
            <g-content> content </g-content>
         </g-layout>
         <g-footer> footer </g-footer>
      </g-layout>
      <pre><code>{{content}}</code></pre>
   </div>
</template>

<script>
   import GHeader from '../../../src/layout/header'
   import GLayout from '../../../src/layout/layout'
   import GContent from '../../../src/layout/content'
   import GFooter from '../../../src/layout/footer'
   import GSider from '../../../src/layout/sider'
   import '../../../src/svg'

   export default {
      components: { GHeader,GLayout,GContent,GFooter,GSider },
      data(){
         return {
            content:`
<template>
   <div>
      <g-layout style="height: 500px;">
         <g-sider> sider</g-sider>
         <g-layout>
            <g-header> header </g-header>
            <g-content> content </g-content>
            <g-footer> footer </g-footer>
         </g-layout>
      </g-layout>


      <g-layout style="height: 500px; margin-top: 2em;">
         <g-header> header </g-header>
         <g-layout>
            <g-sider> sider</g-sider>
            <g-content> content </g-content>
         </g-layout>
         <g-footer> footer </g-footer>
      </g-layout>
      <pre><code>{{content}}</code></pre>
   </div>
</template>
                `.replace(/(^\s*)|(\s*$)/g, "")
         }
      }
   }
</script>
<style>
   .header{
      background: #7dbcea;
      min-height: 50px;
   }
   .footer{
      background: #7dbcea;
      min-height: 50px;
   }
   .sider{
      background: #1890ff;
      width: 100px;
   }
   .content{
      background: #108EE9;
   }
</style>

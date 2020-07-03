<template>
   <div class="toast-demos">
      <g-button @click="showToast"> 有关闭按钮 </g-button>
      <g-button @click="showToast1"> 无关闭按钮,自动关闭 </g-button>
      <g-button @click="showToast2"> top </g-button>
      <g-button @click="showToast3"> bottom </g-button>
      <g-button @click="showToast4"> middle </g-button>
   </div>
</template>

<script>
   import GButton from '../../../src/button/button'
   import Vue from 'vue'
   import plugin from "../../../src/plugin"
   Vue.use(plugin)
   export default {
      components:{ GButton },
      mounted() {
      },
      methods:{
         showToast(){
            this.$toast('这是一条提示',{
               position:'bottom',
               closeButton:{
                  text:'关闭',
                  callback:()=>{
                     console.log('关闭')
                  }
               }
            })
         },
         showToast1(){
            this.$toast('这是一条提示',{
               position:'bottom',
            })
         },
         showToast2(){
            this.$toast('这是一条提示',{
               closeButton: {
                  text:'关闭',
                  callback:()=>{}
               }
            })
         },
         showToast3(){
            this.$toast('这是一条提示',{
               position:'bottom'
            })
         },
         showToast4(){
            this.$toast('这是一条提示',{
               position:'middle'
            })
         }
      }
   }
</script>

<style>
   .toast-demos {
   }
</style>
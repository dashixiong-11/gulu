<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name:'GuluTabs',
        props:{
            selected:{
                type:String,
                required:true
            },
            direction:{
                type:String,
                default:'column',
                validator(value){
                    return ['column','row'].indexOf(value) >=0

                }
            },
            selectedColor:{
                type:String,
                default:'#1980FF'
            }
        },
        data(){
          return{
              eventBus:new Vue()
          }
        },
        provide(){
            return {
                eventBus:this.eventBus
            }
        },
        methods:{
            checkChildren(){
                if(this.$children.length === 0){
                    console && console.warn &&
                    console.warn('tabs 必须有一个组件:tabs-item和tabs-body')
                }
            },
            selectTab(){
                this.$children.forEach((vm)=>{
                    if(vm.$options.name === 'GuluTabsHead'){
                        vm.$children.forEach((childVm)=>{
                            if(childVm.$options.name === 'GuluTabsItem' && childVm.name === this.selected){
                                this.eventBus.$emit('update:selected',this.selected,childVm)
                            }
                        })
                    }
                })
            }
        },
        mounted() {
            this.checkChildren()
            this.selectTab()
            this.eventBus.$emit('update:selectedColor',this.selectedColor)
        }
    }

</script>

<style>

</style>
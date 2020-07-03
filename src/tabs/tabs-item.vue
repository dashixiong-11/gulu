<template>
    <div class="tabs-item" @click="onClick" :class="classes" :style="{color:active? color:''}" :data-name="name">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'GuluTabsItem',
        inject:['eventBus'],
        data(){
            return{
                active:false,
                color:null
            }
        },
        props:{
            disabled:{
                type:Boolean,
                default:false
            },
            name:{
                type:String|Number,
                required:true
            },
        },
        computed:{
            classes(){
                return{
                    active:this.active,
                    disabled:this.disabled
                }
            },
        },
        created(){
            if(this.eventBus){
                this.eventBus.$on('update:selected',(name)=>{
                    this.active = name === this.name
                })
                this.eventBus.$on('update:selectedColor',(color)=>{
                    this.color = color
                })
            }
        },
        methods:{
            onClick(){
                if(this.disabled){ return }
               this.eventBus && this.eventBus.$emit('update:selected',this.name,this)
                this.$emit('click',this)
            }
        }
    }

</script>

<style scoped lang="scss">
    $blue: blue;
    $disabled-text-color: grey;
    .tabs-item{
        cursor: pointer;
        flex-shrink: 0;
        padding:0 1em;
        height: 100%;
        display: flex;
        align-items: center;
        &.active{
            font-weight: bold;
        }
        &.disabled{
            color:$disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>

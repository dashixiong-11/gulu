<template>
    <div class="cascader">
        <div class="trigger" @click="open">{{result || '&nbsp'}}</div>
        <slot></slot>
        <div class="popover-wrapper" v-if="popoverVisible">
                <g-cascader-items :items="source"  :load-data="loadData" class="popover" :height="popoverHeight" @update:selected="upDateSelected" :selected="selected"></g-cascader-items>
        </div>
    </div>
</template>

<script>
    import CascaderItems from './cascader-items'

    export default {
        name: "GuluCascader",
        components: {
            gCascaderItems: CascaderItems
        },
        props: {
            source: {
                type: Array
            },
            popoverHeight:{
                type:String
            },
            selected:{
                type:Array,
                default:() => []
            },
            loadData:{
                type:Function
            }
        },
        data(){
            return {
                popoverVisible:false,
            }
        },
        methods:{
            upDateSelected(newSelected){
                this.$emit('update:selected',newSelected)
                let lastItem = newSelected[newSelected.length - 1]
                let simplest = (children,id) => {
                    return children.filter((item)=> item.id === id )[0]
                }
                let complex = (children,id) => {
                    let noChildren = []
                    let hasChildren = []
                    children.forEach( item => {
                        if(item.children){
                            hasChildren.push(item)
                        }else {
                            noChildren.push(item)
                        }
                    })
                    let found = simplest(noChildren,id)
                    if(found){
                        return found
                    }else {
                        found = simplest(hasChildren,id)
                        if(found){return found}
                        else{
                            for (let i=0; i<hasChildren.length; i++){
                               found =  complex(hasChildren[i].children,id)
                                if(found){
                                    return found
                                }
                            }
                            return undefined
                        }

                    }
                }
                let upDateSelected = (result)=>{
                    let copy = JSON.parse( JSON.stringify(this.source) )
                    let toUpdate = complex(copy,lastItem.id)
                    toUpdate.children = result
                    this.$emit('update:source',copy)
                }
                if(!lastItem.isLeaf){
                  this.loadData && this.loadData(lastItem,upDateSelected)
                }
            },
            open(){
                this.popoverVisible = !this.popoverVisible
            }
        },
        computed:{
            result(){
                return this.selected.map( item =>  item.name).join('/')
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "var";
    .cascader {
        position: relative;
        .trigger {
            display: inline-flex;
            height: $input-height;
            align-items: center;
            padding:0 1em;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            height: 32px;
            min-width: 10em;
        }
        .popover-wrapper{
            @extend .box-shadow;
            margin-top: 8px;
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
        }

    }

</style>
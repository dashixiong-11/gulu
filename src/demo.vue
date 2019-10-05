<template>
    <div style="padding:100px;">
        <g-cascader :source.sync="source" popover-height="200px" :selected.sync="selected"  :load-data="loadData"></g-cascader>
        <g-popover>
            <template slot="content">
                <div>内容</div>
            </template>
            <g-button>点我</g-button>
        </g-popover>
    </div>
</template>

<script>
    import Cascader from './cascader'
    import Popover from './popover'
    import Button from './button'
    import db from './db'
    import Input from './input'
    import plugin from './plugin'
    import Vue from 'vue'
    Vue.use(plugin)

    
    function find(parentId = 0) {
        return new Promise( (resolve,reject)=> {
            setTimeout(()=>{
                let result = db.filter( item =>   item.parent_id === parentId)
                result.forEach( node => {
                    if(db.filter(item => item.parent_id === node.id).length>0){
                        node.isLeaf = false
                    }else{
                        node.isLeaf = true
                    }
                })
                resolve(result)
            },300)
        } )

    }
    export default {
        components: { gCascader: Cascader,gInput:Input,gPopover:Popover,gButton:Button },
        data() {
            return {
                selected:[],
                source:[],
            }
        },
        created() {
            find().then( res => {
                this.source = res
            })
        },
        methods:{
            loadData({ id },callback){
                find(id).then( result => {
                    callback(result)
                })
            },
            xxx(){
                this.$toast('xxxx')
            }
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 14px;
    }
</style>
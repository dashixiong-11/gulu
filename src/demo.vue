<template>
    <div style="padding:100px;">
        <g-cascader :source.sync="source" popover-height="200px" :selected.sync="selected"  :load-data="loadData"></g-cascader>
    </div>
</template>

<script>
    import Cascader from './cascader'
    import db from './db'

    
    function find(parentId = 0) {
        return new Promise( (resolve,reject)=> {
            setTimeout(()=>{
                let result = db.filter( item =>   item.parent_id === parentId)
                resolve(result)
            },300)
        } )

    }
    export default {
        components: { gCascader: Cascader },
        data() {
            return {
                selected:[],
                source:[]
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
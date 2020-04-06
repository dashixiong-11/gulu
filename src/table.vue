<template>
   <div class="gulu-table-wrapper" ref="wrapper">
      <div style="overflow:auto" ref="tableWrapper">
         <table class="gulu-table" :class="{bordered,compact,striped}" ref="table">
            <thead>
            <tr>
               <th v-if="expandField" :style="{width:'50px'}">
               </th>
               <th v-else-if="choosable && !expandField" :style="{width:'50px'}" class="gulu-table-center">
                  <input type="checkbox" @change="onChangeAllItems" ref="allChecked" :checked="areAllItemsSelected"/>
               </th>
               <th v-if="numberVisible">#</th>
               <th :style="{width:column.width+'px'}" v-for="column in columns" :key="column.field">
                  <div class="gulu-table-header">
                     {{column.text}}
                     <span v-if=" column.field in orderBy" class="gulu-table-sorter"
                           @click="changeOrderBy(column.field)">
                  <g-icon name="asc" :class="{active:orderBy[column.field] === 'asc'}"></g-icon>
                  <g-icon name="desc" :class="{active:orderBy[column.field] === 'desc'}"></g-icon>
               </span>
                  </div>
               </th>
            </tr>
            </thead>
            <tbody>
            <template v-for="(item,index) in dataSource">
               <tr :key="item.id">
                  <td v-if="expandField" :style="{width:'50px'}" class="gulu-table-center">
                     <g-icon :name=" inExpandedIds(item.id)? 'sub':'add'" @click="expandItem(item.id)"></g-icon>
                  </td>
                  <td v-else-if="choosable && !expandField" :style="{width:'50px'}" class="gulu-table-center">
                     <input type="checkbox" @change="onChangeItem(item,index,$event)" :checked="inSelectedItems(item)"/>
                  </td>
                  <td :style="{width:'50px'}" class="gulu-table-center" v-if="numberVisible">{{index+1}}</td>
                  <td :style="{width:column.width+'px'}" v-for="column in columns" :key="column.field">
                     {{item[column.field]}}
                  </td>
               </tr>
               <tr v-if="inExpandedIds(item.id) && expandField" :key="`${item.id}-expand`">
                  <td style="width:50px">
                  </td>
                  <td :colspan="columns.length">
                     {{item[expandField] || '空'}}
                  </td>
               </tr>
            </template>
            </tbody>
         </table>
      </div>
      <div v-if="loading" class="gulu-table-loading">
         <g-icon name="loading"/>
      </div>
   </div>

</template>

<script>
   import GIcon from './icon'

   export default {
      name: "GuluTable",
      components: {GIcon},
      props: {
         height: {
            type: Number
         },
         orderBy: {
            type: Object,
            default: () => ({})
         },
         columns: {
            type: Array,
            required: true
         },
         dataSource: {
            type: Array,
            required: true,
            validator(array) {
               return !array.filter(item => item.id === undefined).length > 0
            }
         },
         numberVisible: {
            type: Boolean,
            default: false
         },
         bordered: {
            type: Boolean,
            default: false
         },
         compact: {
            type: Boolean,
            default: false
         },
         striped: {
            type: Boolean,
            default: true
         },
         selectedItems: {
            type: Array,
            default: () => []
         },
         loading: {
            type: Boolean,
            default: false
         },
         expandField: {
            type: String
         },
         choosable:{
            type:Boolean,
            default:false
         }
      },
      data() {
         return {
            tableCopy: null,
            expandedIds: []
         }
      },
      mounted() {
         let tableCopy = this.$refs.table.cloneNode(false)
         this.tableCopy = tableCopy
         let theadCopy = this.$refs.table.children[0]
         let {height} = theadCopy.getBoundingClientRect()
         this.$refs.tableWrapper.style.marginTop = height + 'px'
         this.$refs.tableWrapper.style.height = this.height - height + 'px'
         tableCopy.classList.add('gulu-table-copy')
         tableCopy.appendChild(theadCopy)
         this.$refs.wrapper.appendChild(tableCopy)
      },
      beforeDestroy() {
         this.tableCopy.remove()
      },
      computed: {
         areAllItemsSelected() {
            const a = this.dataSource.map(item => item.id).sort()
            const b = this.selectedItems.map(item => item.id).sort()
            if (a.length !== b.length) {
               return false
            }
            let equal = true
            for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) {
               equal = false
               break
            }
            return equal
         },
      },
      watch: {
         selectedItems() {
            if (this.selectedItems.length === this.dataSource.length) {
               this.$refs.allChecked.indeterminate = false
               this.$refs.allChecked.checked = true
            } else if (this.selectedItems.length === 0) {
               this.$refs.allChecked.indeterminate = false
            } else {
               this.$refs.allChecked.indeterminate = true
            }

         },
      },
      methods: {
         inSelectedItems(item) {
            return this.selectedItems.filter((i) => i.id === item.id).length > 0
         },
         onChangeItem(item, index, e) {
            let selected = e.target.checked
            let copy = JSON.parse(JSON.stringify(this.selectedItems))
            if (selected) {
               copy.push(item)
            } else {
               copy = copy.filter(i => i.id !== item.id)
            }
            this.$emit('update:selectedItems', copy)
         },
         onChangeAllItems(e) {
            let selected = e.target.checked
            this.$emit('update:selectedItems', selected ? this.dataSource : [])
         },
         changeOrderBy(key) {
            const copy = JSON.parse(JSON.stringify(this.orderBy))
            let oldValue = copy[key]
            if (oldValue === 'asc') {
               copy[key] = 'desc'
            } else if (oldValue === 'desc') {
               copy[key] = true
            } else {
               copy[key] = 'asc'
            }
            this.$emit('update:orderBy', copy)
         },
         expandItem(id){
            if(this.expandedIds.indexOf(id)>=0){
               this.expandedIds.splice(this.expandedIds.indexOf(id),1)

            }else {
               this.expandedIds.push(id)
            }
         },
         inExpandedIds(id){
            return this.expandedIds.indexOf(id) >= 0
         }
      }
   }
</script>

<style scoped lang="scss">
   @import "../styles/var";

   $grey: darken($grey, 10%);
   .gulu-table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      border-bottom: 1px solid $grey;

/*
      &.bordered {
         border: 1px solid $grey;

         td, th {
            border: 1px solid $grey;
         }
      }
*/

      &.compact {
         td, th {
            padding: 4px;
         }
      }

      td, th {
         border-bottom: 1px solid $grey;
         text-align: left;
         padding: 8px;
      }

      &.striped {
         tbody {
            > tr {
               &:nth-child(odd) {
                  background: white;
               }

               &:nth-child(even) {
                  background: lighten($grey, 10%);
               }
            }
         }
      }

      &-sorter {
         display: inline-flex;
         flex-direction: column;
         margin: 0 4px;
         cursor: pointer;

         svg {
            width: 10px;
            height: 10px;
            fill: $grey;

            &.active {
               fill: black;
            }

            &:first-child {
               position: relative;
               bottom: -1px;
            }

            &:nth-child(2) {
               position: relative;
               top: -1px;
            }
         }
      }

      &-header {
         display: flex;
         align-items: center;
      }

      &-wrapper {
         position: relative;
         overflow: auto;
      }

      &-loading {
         background: rgba(255, 255, 255, 0.8);
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         display: flex;
         justify-content: center;
         align-items: center;

         svg {
            width: 50px;
            height: 50px;
            @include spin;
         }
      }

      &-copy {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         background: white;
      }

      &-expandIcon {
         width: 10px;
         height: 10px;
      }

      & &-center {
         text-align: center;
      }
   }
</style>
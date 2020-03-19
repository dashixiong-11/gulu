<template>
   <div class="gulu-table-wrapper">
      <table class="gulu-table" :class="{bordered,compact,striped}">
         <thead>
         <tr>
            <th>
               <input type="checkbox" @change="onChangeAllItems" ref="allChecked" :checked="areAllItemsSelected"/>
            </th>
            <th v-if="numberVisible">#</th>
            <th v-for="column in columns" :key="column.field">
               <div class="gulu-table-header">
                  {{column.text}}
                  <span v-if=" column.field in orderBy" class="gulu-table-sorter" @click="changeOrderBy(column.field)">
                  <g-icon name="asc" :class="{active:orderBy[column.field] === 'asc'}"></g-icon>
                  <g-icon name="desc" :class="{active:orderBy[column.field] === 'desc'}"></g-icon>
               </span>
               </div>
            </th>
         </tr>
         </thead>
         <tbody>
         <tr v-for="(item,index) in dataSource" :key="item.id">
            <td>
               <input type="checkbox" @change="onChangeItem(item,index,$event)" :checked="inSelectedItems(item)"/>
            </td>
            <td v-if="numberVisible">{{index+1}}</td>
            <td v-for="column in columns" :key="column.field">
               {{item[column.field]}}
            </td>
         </tr>
         </tbody>
      </table>
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
         loading:{
            type:Boolean,
            default:false
         }
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
            if(oldValue === 'asc'){
               copy[key] = 'desc'
            }else if(oldValue === 'desc'){
               copy[key] = true
            }else {
               copy[key] = 'asc'
            }
            this.$emit('update:orderBy', copy)
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

      &.bordered {
         border: 1px solid $grey;

         td, th {
            border: 1px solid $grey;
         }
      }

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

      &-expendIcon {
         width: 10px;
         height: 10px;
      }

      & &-center {
         text-align: center;
      }
   }
</style>
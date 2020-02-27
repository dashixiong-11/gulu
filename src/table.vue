<template>
   <div class="gulu-table-wrapper">
      <table class="gulu-table" :class="{bordered,compact,striped}">
         <thead>
         <tr>
            <th>
               <input type="checkbox"/>
            </th>
            <th v-if="numberVisible">#</th>
            <th v-for="column in columns" :key="column.name">
               {{column.text}}
            </th>
         </tr>
         </thead>
         <tbody>
         <tr v-for="(item,index) in dataSource" :key="item.id">
            <td>
               <input type="checkbox" @change="onChangeItem(item,index,$event)"/>
            </td>
            <td v-if="numberVisible">{{index+1}}</td>
            <template v-for="column in columns">
               <td :key="column.id">
                  {{item[column.field]}}
               </td>
            </template>
         </tr>
         </tbody>
      </table>
   </div>

</template>

<script>
   export default {
      name: "GuluTable",
      props: {
         columns: {
            type: Array,
            required: true
         },
         dataSource: {
            type: Array,
            required: true
         },
         numberVisible: {
            type: Boolean,
            default: false
         },
         bordered:{
            type:Boolean,
            default:false
         },
         compact:{
            type:Boolean,
            default:false
         },
         striped:{
            type:Boolean,
            default:true
         }
      },
      methods:{
         onChangeItem(item,index,e){
            this.$emit('changeItem',{selected:e.target.checked, item,index})
            console.log(e.target.checked)
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
               fill: red;
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
<template>
   <div style="width: 100%">
      <div>
         <g-row>
            <g-col class="col col1" span="12"> 12/24 </g-col>
            <g-col class="col col2" span="12"> 12/24 </g-col>
         </g-row>
         <g-row>
            <g-col class="col col3" span="9"> 9/24 </g-col>
            <g-col class="col col4" span="15"> 15/24 </g-col>
         </g-row>
         <g-row>
            <g-col class="col col5" span="5"> 5/24 </g-col>
            <g-col class="col col6" span="19"> 19/24 </g-col>
         </g-row>
      </div>
      <div style="margin-top: 20px;">
         <g-row>
            <g-col class="col col1" span="10"> 10/24 </g-col>
            <g-col class="col col2" span="12" offset="2"> 12/24 </g-col>
         </g-row>
         <g-row>
            <g-col class="col col3" span="4" offset="5"> 4/24 </g-col>
            <g-col class="col col4" span="15"> 15/24 </g-col>
         </g-row>
         <g-row>
            <g-col class="col col5" span="5"> 5/24 </g-col>
            <g-col class="col col6" span="19"> 19/24 </g-col>
         </g-row>
      </div>
      <pre><code>
         {{content}}
      </code></pre>
   </div>
</template>
<style>
   .col{
      text-align: center;
   }
   .col6{
      background: 	#696969;
   }
   .col1{
      background: 	#DCDCDC;
   }
   .col2{
      background: #D3D3D3;
   }
   .col3{
      background: 	#C0C0C0;
   }
   .col4{
      background: 	#A9A9A9;
   }
   .col5{
      background: 	#808080;
   }
</style>
<script>
   import GCol from '../../../src/grid/col'
   import GRow from '../../../src/grid/row'
   import '../../../src/svg'

   export default {
      components: {GCol,GRow},
      data(){
         return {
            content:`
         <g-row>
            <g-col class="col col1" span="12"> 12/24 </g-col>
            <g-col class="col col2" span="12"> 12/24 </g-col>
         </g-row>
         <g-row>
            <g-col class="col col3" span="9"> 9/24 </g-col>
            <g-col class="col col4" span="15"> 15/24 </g-col>
         </g-row>
         <g-row>
            <g-col class="col col5" span="5"> 5/24 </g-col>
            <g-col class="col col6" span="19"> 19/24 </g-col>
         </g-row>



         <g-row>
            <g-col class="col col1" span="10"> 10/24 </g-col>
            <g-col class="col col2" span="12" offset="2"> 12/24 </g-col>
         </g-row>
         <g-row>
            <g-col class="col col3" span="4" offset="5"> 4/24 </g-col>
            <g-col class="col col4" span="15"> 15/24 </g-col>
         </g-row>
         <g-row>
            <g-col class="col col5" span="5"> 5/24 </g-col>
            <g-col class="col col6" span="19"> 19/24 </g-col>
         </g-row>
                `.replace(/(^\s*)|(\s*$)/g, "")
         }
      }
   }
</script>

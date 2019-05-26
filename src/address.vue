<template>
  <div>
    <div class="box">
      <div class="body">
        <div class="province">
          <span>{{activeprovince}}</span>
          <ul>
            <li :class="proindex==index? 'active':'' "  v-for="(province,index) in provincelist" @click='active(province,index,0)'>{{province.label}}</li>
          </ul>
        </div>
        <div class="city">
          <span>{{activecity}}</span>  
          <ul>
            <li :class="cityindex==index? 'active':'' " v-for="(city,index) in citylist" @click='active(city,index,1)'>{{city.label}}</li>
          </ul>
        </div>
        <div class="area">
          <span>{{activearea}}</span>
          <ul>
            <li v-for="(area,index) in arealist" @click='active(area,index,2)'>{{area.label}}</li>
          </ul>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  import Province from './province'
  import City from './city'
  import Area from './area'
  console.log(City)
  console.log(Area)
  export default{
    data(){
      return{
        provincelist:Province,
        citylist:[],
        arealist:[],
        activeprovince:'省',
        activecity:'市',
        activearea:'区',
        proindex:null,
        cityindex:null,
      }
    },
    mounted(){
    },
    methods:{
      active(e,index,z){
        if(z===0){
        this.activeprovince = e.label
        this.citylist = City[index]
        this.proindex = index
        this.activecity = '市'
        this.activearea = '区'
        this.arealist = []
        this.cityindex = null
        }else if(z===1){
        this.activecity = e.label
        this.cityindex = index
        this.arealist = Area[this.proindex][index]
        this.activearea = '区'
        }else if(z===2){
          this.activearea = e.label
          console.log(this.activeprovince,this.activecity,this.activearea)
        }
      }
    }
  }

</script>

<style lang='scss' scoped>
.box{
  display:inline-block;
  border:1px solid #ddd;
  width:475px;
    .province,.city,.area{
      text-align:center;
      width:33%;
    }
}
            ul{
              height:6em;
              overflow-y:scroll;
              overflow-x:hidden;
              margin-top:1em;
                .active{
                  color:red;
                }
            }
            li{
              list-style:none;
            }
            .body{
              display:flex;
              justify-content:space-between;
            }
            ul::-webkit-scrollbar{
              display:none;
            }
</style>

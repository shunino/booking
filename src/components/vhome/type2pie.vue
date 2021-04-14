<template>
 <div style="width:100%;height: 100%;">
    <div class="mytab">
      <span @click="changeC(1)" :class="type==1 ? 'cur' :'' ">2020</span>
      <span @click="changeC(2)" :class="type==2 ? 'cur' :'' ">2019</span>
      <span @click="changeC(3)" :class="type==3 ? 'cur' :'' ">2018及以前</span>
    </div>
    <div class="mychart">
      <pie1 v-if="uiu" myid="trtf5rt" :mydata="data"></pie1>
    </div>
 </div>
</template>

<script>
import Pie1 from '@/components/vhome/pie1'
export default {
  name: 'HelloWorld',
  data () {
    return {
      data:[],
      type:3,
      data1:[],
      data2:[],
      data3:[],
      uiu:true
    }
  },
  mounted () {
    this.getData();
  },
  methods: {
      changeC(type){
        this.type=type;
        this.uiu = false;
        if(type==1){
          this.data = this.data1;
        } else if(type==2){
          this.data = this.data2;
        } else if(type==3){
          this.data = this.data3;
        }
        this.uiu = true;
      },
      getData(){
        this.$http.post('api/conserv/statistical/statisticAllProjectByStatus',{token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          let all1 = all[0].data;
          let all2 = all[1].data;
          let all3 = all[2].data; 
          this.data1=[
            {
              name:'已开工',
              value:all1[0]
            },
            {
              name:'未开工',
              value:all1[1]
            },
            {
              name:'整合',
              value:all1[2]
            }
          ];
          this.data2=[
            {
              name:'已完工',
              value:all2[0]
            },
            {
              name:'未完工',
              value:all2[1]
            },
            {
              name:'整合',
              value:all2[2]
            }
          ];
          this.data3=[
            {
              name:'已验收',
              value:all3[0]
            },
            {
              name:'未验收',
              value:all3[1]
            },
            {
              name:'整合',
              value:all3[2]
            }
          ];
          this.data = this.data3;
        }).catch(err => {
          console.log(err)
        })
      }
  },
   components: {
    'pie1': Pie1,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mytab{
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
}
.mytab span{
  display: inline-block;
  width: 100px;
  text-align: center;
  margin-right: 20px;
  cursor: pointer;
}
.mytab span.cur{
  border-bottom: 1px solid #45D7DA;
  color: #45D7DA;
}
.mychart{
  width: 100%;
  height: 90%;
}
</style>

<template>
  <div style="width:100%;height: 100%;margin-top: 1%;">
    <div class="monitor-box" style="width:100%;" v-for="i in mydata">
        <div class="left">
          <div class="title">{{i.programfileno || i.name || '无文件名号'}}</div>
          <div class="content left-c">
            <div class="img"><img src="../../assets/vdata/ic1.png"></div>
            <div class="txt">
              <div v-if="type==1">治理面积</div>
              <div v-if="type==2">项目数量</div>
              <div>{{i.governarea || i.checkPlanProjectNum}}</div>
            </div>
          </div>
        </div>
        <div class="left right">
          <div class="title" v-if="type==1">总投资（万元）</div>
          <div class="title" v-if="type==2">检查情况</div>
          <div class="content">
            <pie2 :myid="i.id" :mydata="i.cData"></pie2>
          </div>
        </div>
     </div>
  </div>
</template>
<script>
import Pie2 from '@/components/vdata/pie2'
export default {
  name: 'HelloWorld',
  data () {
    return {
      cData: []
    }
  },
  props: ['mydata','type'],
  watch:{
    mydata:{
        handler(newValue, oldValue) {
          if(this.type==1){
            this.getChart();
          } else {
            this.getChart1();
          }
　　　　　　
　　　　},
　　　　deep: true
    }
  },
  mounted () {
    if(this.mydata.length!=0){
       if(this.type==1){
          this.getChart();
        } else {
          this.getChart1();
        }
    }
  },
  methods: {
    getChart(){
      for(let i in this.mydata){
        let all = this.mydata[i].provinceinvest + this.mydata[i].regioninvest +this.mydata[i].countyinvest + this.mydata[i].raiseinvest + this.mydata[i].otherinvest;
        this.mydata[i].cData = [{name:'地方投资',value:all},{name:'中央投资',value:this.mydata[i].centralinvest}];
      }
    },
    getChart1(){
      for(let i in this.mydata){
        let all = this.mydata[i].checkPlanProjectNum - this.mydata[i].checkProjectNum;
        this.mydata[i].cData = [{name:'已检查',value:this.mydata[i].checkProjectNum},{name:'未检查',value:all}];
      }
    }
  },
  components: {
    'pie2': Pie2,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .monitor-box{
    display: flex;
  }
  .monitor-box .left{
    width: 48%;
  }
  .monitor-box .left .title{
    height: 20px;
    line-height: 20px;
    color: #3AAEBF;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .monitor-box .left .content{
    height: 100px;
    width: 100%;
  }
  .right{
    margin-left: 4%;
  }
  .left-c{
    display: flex;
  }
  .left-c .img{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left-c .img img{
    width: 65%;
    height: 65%;
  }
  .left-c .txt{
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #92A1B3;
  }
</style>

<style type="text/css">
 .el-progress-bar__innerText{
  color: white;
 }
/* .el-progress-bar__inner{
    display: flex;
    align-items: center;
    justify-content: center;
  }*/
</style>
<template>
  <div class="num-div">
    <div class="num-box">
      <div class="percentage"><span style="background: #E26B52;" class="picon"></span><span>{{(mydata.yearApprovalProgress*100).toFixed(0)}}%</span></div>
      <div class="ptxt">报件数{{mydata.yearAcceptAdd}}</div>
      <div class="progress">
        <div class="p-num"></div>
        <el-progress color="#E26B52" :stroke-width="18" :text-inside="true"  :format="myformat1" :percentage="50"></el-progress>
      </div>
      <div class="ptxt">年</div>
    </div>
    <div class="num-box">
      <div class="percentage"><span style="background: #C63ED3;" class="picon"></span><span>{{(mydata.quarterApprovalProgress*100).toFixed(0)}}%</span></div>
      <div class="ptxt">报件数{{mydata.quarterAcceptAdd}}</div>
      <div class="progress">
        <div class="p-num"></div>
        <el-progress color="#C63ED3" :stroke-width="18" :text-inside="true"  :format="myformat2" :percentage="50"></el-progress>
      </div>
      <div class="ptxt">季度</div>
    </div>
    <div class="num-box">
      <div class="percentage" style="border: none;"><span style="background: #45D7DA;" class="picon"></span><span>{{(mydata.monthApprovalProgress*100).toFixed(0)}}%</span></div>
      <div class="ptxt">报件数{{mydata.monthAcceptAdd}}</div>
      <div class="progress">
        <div class="p-num"></div>
        <el-progress color="#45D7DA" :stroke-width="18" :text-inside="true"  :format="myformat3" :percentage="50"></el-progress>
      </div>
      <div class="ptxt">月</div>
    </div>
  </div>
</template>

<script>
import Gauge from '@/components/vdata/gauge'
export default {
  name: 'HelloWorld',
  components: {
    'gauge': Gauge,
  },
  data () {
    return {
      
    }
  },
  props: ['myid','mydata'],
  mounted () {
    
  },
  methods: {
    myformat1(percentage) {
         return '批复数'+this.mydata.yearFAAdd;
    },
    myformat2(percentage) {
       return '批复数'+this.mydata.quarterFAAdd;
    },
    myformat3(percentage) {
       return '批复数'+this.mydata.monthFAAdd;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
::-webkit-scrollbar {
        width: 10px;     

        height: 10px;

    }

::-webkit-scrollbar-thumb {

        border-radius: 10px;

         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);

        background: #1B2638;

    }

::-webkit-scrollbar-track {

        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);

        border-radius: 10px;

        background: #EDEDED;

}
.num-div{
  width: 100%;
  height: 100%;
  display: flex;
}
.num-div .num-box{
  width: 33.3%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.num-box .percentage{
  font-size: 36px;
  color: white;
  width:100%;
  display: flex;
  align-items: center;
  height: 46%;
  border-right: 1px solid #838784;

}
.num-box .percentage .picon{
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: red;
  margin-right: 10%;
  margin-left: 10%;
}
.num-box .ptxt{
  font-size: 14px;
  color: #838784;
  width: 90%;
  text-align: center;
}
.num-box .progress{
  width: 90%;
  text-align: center;
  margin-top: 4%;
  margin-bottom: 4%;
}
</style>

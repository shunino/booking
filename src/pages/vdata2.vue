<template>
  <div class="data-bg">
    <img class="data-img" src="../assets/vdata/bg3.jpg">
      <div class="data-title">监督管理大数据</div>
      <div class="data-content">
        <div class="d-left">
          <!--国家规划-->
          <div class="c-box" style="height: 35%;">
            <div class="c-title" style="height: 22%">查处情况</div>
            <div class="c-content" style="height: 78%">
              <round :mydata="roundData"></round>
            </div>
          </div>
          <!---->
          <div class="c-box" style="height: 57%;">
            <div class="c-title" style="height: 12%">监督计划</div>
            <div class="c-content" style="height: 88%">
              <div style="display: flex;flex-direction: column;margin-left:2%;width: 98%;height: 100%;">
                <monitor type="2" :mydata="planData"></monitor>
              </div>
             <!--  <span>暂时无数据！</span> -->
            </div>
          </div>
        </div>
        <div class="d-center">
          <div class="c-box" style="height: 67%;">
            <div class="c-title" style="height: 9%"></div>
            <div class="c-content" style="height: 91%">
              <center2  :mydata1="center11" :mydata2="center12"></center2>
            </div>
          </div>

           <div class="c-box" style="height: 23%;">
              <div class="c-title" style="height: 23%">实时动态</div>
              <div class="c-content" style="height: 77%">
                <div class="cflex" style="height: 100%;width: 95%; align-items: end;">
                  <div class="cflex" style="width: 3.5%;height: 80%;writing-mode: tb;background: #1E204E;margin-left: 1.5%; letter-spacing:0.4em;color: #04EFE3;">新增方案</div>
                  <div class="cflex" style="width: 94%;height: 100%;"><line2 :mydata="center2" myid="9445556687"></line2></div>
                </div>
                <!-- <span>暂时无数据！</span> -->
              </div>
            </div>
        </div>
        <div class="d-right">
            <div class="c-box" style="height: 18%;">
              <div class="c-title" style="height: 32%">补偿情况</div>
              <div class="c-content" style="height: 68%">
                <num :mydata="check1"></num>
              </div>
            </div>
            <div class="c-box" style="height: 41%;">
              <div class="c-title" style="height: 12%">验收情况</div>
              <div class="c-content" style="height: 88%">
                <pie3 :mydata="check2" myid="k354d"></pie3>
              </div>
            </div>
            <div class="c-box" style="height: 33%;">
              <div class="c-title" style="height: 20%">信息化监管</div>
              <div class="c-content" style="height: 80%">
                <div style="width: 90%;height: 100%;"><bar2 :mydata="manage" myid="k3d"></bar2></div>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Pie1 from '@/components/vdata/pie1'
import Pie3 from '@/components/vdata/pie3'
import Num from '@/components/vdata/num'
import Round from '@/components/vdata/round'
import Line1 from '@/components/vdata/line1'
import Line2 from '@/components/vdata/line2'
import Bar1 from '@/components/vdata/bar1'
import Bar2 from '@/components/vdata/bar2'
import Monitor from '@/components/vdata/monitor'
import Center2 from '@/components/vdata/center2'
export default {
  name: 'Home',
  data () {
    return {
      roundData:[],
      center11:[],
      center12:0,
      center2:[],
      check1:{},
      check2:{},
      manage:[],
      planData:[]
    }
  },
  mounted () {
    // this.getRound();
    // this.getCenter();
    // this.getCheck();
    //this.getManage();
    this.getType1();
    this.getType2();
  },
  methods: {
    getType1(){
      this.$http.get(this.$other+'/gzstbcapi/api/services/app/GZExternal/GetStatistics1',{token:this.$Ctoken}).then(res => {
          let all = res.data.result;
          this.roundData = [{name:'监督检查',value:all.checkProjectNum},{name:'检查整改中',value:all.rectifingNum},{name:'整改完成',value:all.rectifedNum}];
          // this.roundData = [{name:'监督检查',value:18},{name:'检查整改中',value:6},{name:'检查整改后',value:13}];
      }).catch(err => {
        console.log(err)
      })
      this.$http.get(this.$other+'/gzstbcapi/api/services/app/GZExternal/GetStatistics2',{token:this.$Ctoken}).then(res => {
          let all = res.data.result;
          this.check1 =all;
          this.check2 = all;
          this.center11 = [{name:'国家级',count:all.yearSpNat,percentage:((all.yearAcceptNat/all.yearSpNat) * 100).toFixed(2)},{name:'省级',count:all.yearSpProv,percentage:((all.yearAcceptProv/all.yearSpProv) * 100).toFixed(2)},{name:'市级',count:all.yearSpCity,percentage:((all.yearAcceptCity/all.yearSpCity) * 100).toFixed(2)},{name:'县级',count:all.yearSpDistrict,percentage:((all.yearAcceptDistrict/all.yearSpDistrict) * 100).toFixed(2)}];
          // this.center11 = [{name:'国家级',count:0,percentage:0},{name:'省级',count:0,percentage:0},{name:'市级',count:0,percentage:0},{name:'县级',count:0,percentage:0}];
          this.center12 = all.approvalProgress;
          //this.center12 = 0;
          this.manage = {name:['合规','未批先建','建设地点变更','超出责任范围','待核查图斑','可不编包方案','已批项目']
          ,value:[all.complProject1,all.wpxj,all.jsddbg,all.cczrfw,all.needCheckSpot,all.nONeedPlan,all.replyProject]};
          // this.manage = {name:['合规','未批先建','建设地点变更','超出责任范围','待核查图斑','可不编包方案','已批项目']
          // ,value:[0,0,0,0,0,0,0]};
      }).catch(err => {
        console.log(err)
      })
    },
    getType2(){
      this.$http.get(this.$other+'/gzstbcapi/api/services/app/GZExternal/GetFAAdd',{token:this.$Ctoken}).then(res => {
          this.center2 = res.data.result;
      }).catch(err => {
        console.log(err)
      })

      this.$http.get(this.$other+'/gzstbcapi/api/services/app/GZExternal/GetSJCheckPlan',{token:this.$Ctoken}).then(res => {
          this.planData = res.data.result.items;
      }).catch(err => {
        console.log(err)
      })
    },
    getRound(){
      this.$http.post('api/supervise/statistical/statisticCheckCount',{year:'0',areaCode:null,token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          let mydata = [];
          for(let i in all){
              let obj = {};
              obj.name = all[i].checkNatureName;
              obj.value = all[i].count;
              mydata.push(obj);
          } 
        this.roundData = mydata;
      }).catch(err => {
        console.log(err)
      })
    },
    getCenter(){
      this.$http.post('api/supervise/statistical/statisticByLevel',{year:'0',areaCode:null,token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          for(let i in all){
            all[i].percentage = ((all[i].value / all[i].count) * 100).toFixed(2);
          }
          this.center11 = all
      }).catch(err => {
        console.log(err)
      })
      this.$http.post('api/supervise/statistical/statisticReplyRate',{year:'0',areaCode:null,token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          this.center12 = all
      }).catch(err => {
        console.log(err)
      })
      this.$http.post('api/supervise/statistical/statisticIncrementCount',{year:'0',areaCode:null,token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          this.center2 = all
      }).catch(err => {
        console.log(err)
      })
    },
    getCheck(){
      this.$http.post('api/supervise/statistical/statisticYearFee',{year:'0',areaCode:null,token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          this.check1 = all;
          this.check2 = all
      }).catch(err => {
        console.log(err)
      })
    },
    getManage(){
      this.$http.post('api/supervise/statistical/statisticPatchCount',{year:null,areaCode:null,token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          debugger;
          this.check1 = all;
          this.check2 = all
      }).catch(err => {
        console.log(err)
      })
    },
  },
  components: {
    'pie1': Pie1,
    'pie3': Pie3,
    'round': Round,
    'line1': Line1,
    'line2': Line2,
    'bar1': Bar1,
    'bar2': Bar2,
    'monitor': Monitor,
    'num': Num,
    'center2': Center2
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
  .cflex{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pie-box{
    width: 95%;
    height: 95%;
    /*background: red;*/
  }
  .pie-title{
    width: 60%;
    height: 8%;
    display: flex;
    align-items: center;
    background: white;
    border-radius: 0 50% 50% 0;
    color: #12E4D0;
    padding-left: 2%;
    background-color: rgba(255,255,255,0.1);
    font-size: 24px;
  }
  .pie-con{
    width: 100%;
    height: 92%;
  }

  .data-bg{
    width: 100%;
    height: 100%;
  }
  .data-img{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0px;
    left: 0px;
    z-index: -1;
  }
  .data-title{
    width:100%;
    height: 8%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0EF5F3;
    font-size: 35px;
    font-weight: bold;
  }
  .data-content{
    position: absolute;
    top:8%;
    left: 3.5%;
    display: flex;
    color: white;
    height: 92%;
    width: 96%;
    
    /*border:1px solid red;*/
  }
  .d-left{
    width: 26.9%;
   /* border: 1px solid white;*/
    height: 100%;
  }
  .d-center{
    margin-left: 0.8%;
    width: 41.3%;
    /*border: 1px solid white;*/
    height: 100%;
  }
  .d-right{
    margin-left: 1.1%;
    width: 27%;
    /*border: 1px solid white;*/
    height: 100%;
  }
  .c-box{
    width: 100%; 
  }
  .c-box .c-title{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0EF5F3;
    font-size: 27px;
    font-weight: bold;
  }
  .c-box .c-content{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
  }
</style>

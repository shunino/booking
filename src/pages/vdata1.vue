<template>
  <div class="data-bg">
    <img class="data-img" src="../assets/vdata/bg4.jpg">
      <div class="data-title">治理项目大数据</div>
      <div class="data-content">
        <div class="d-left">
          <!--国家规划-->
          <div class="c-box" style="height: 35%;">
            <div class="c-title" style="height: 22%">国家规划</div>
            <div class="c-content" style="height: 78%">
              <round :mydata="roundData"></round>
            </div>
          </div>
          <!---->
          <div class="c-box" style="height: 57%;">
            <div class="c-title" style="height: 12%">省级计划</div>
            <div class="c-content" style="height: 88%">
              <div style="display: flex;flex-direction: column;margin-left:2%;width: 98%;height: 100%;">
                 <monitor type="1" :mydata="planData"></monitor>
              </div>
             
            </div>
          </div>
        </div>
        <div class="d-center">
          <div class="c-box" style="height: 67%;">
            <div class="c-title" style="height: 9%"></div>
            <div class="c-content" style="height: 91%">
              <div class="pie-box">
                <div class="pie-title">水保治理项目</div>
                <div class="pie-con">
                  <pie1 :mydata="center1" myid="chart1"></pie1>
                </div>
              </div>
            </div>
          </div>

           <div class="c-box" style="height: 23%;">
              <div class="c-title" style="height: 23%">实时动态</div>
              <div class="c-content" style="height: 77%">
               <!--  <line1 myid="9445587"></line1> -->
               <line1 :mydata="center2" myid="9445556687"></line1>
              </div>
            </div>
        </div>
        <div class="d-right">
            <div class="c-box" style="height: 35%;">
              <div class="c-title" style="height: 16%">目标考核</div>
              <div class="c-content" style="height: 84%">
                <bar1 :mydata="verifyData" myid="9787"></bar1>
              </div>
            </div>
            <div class="c-box" style="height: 57%;">
              <div class="c-title" style="height: 11%">治理完成情况</div>
              <div class="c-content" style="height: 89%;">
                <div style="width: 95%;height: 100%;">
                  <!-- <div style="width: 100%;height: 49%;display: flex;align-items: center;justify-content: center;">
                    <div style="width: 10%;color:#92A1B3;">国家水土保持重点工程</div>
                    <div style="width: 90%;height: 100%">
                      <bar2 myid="kd"></bar2>
                    </div>
                  </div> -->
                  <!-- <div style="width: 100%;height: 49%;margin-top:1%;display: flex;align-items: center;justify-content: center;">
                    <div style="width: 10%;color:#92A1B3;">坡耕地水土流失综合治理工程</div>
                    <div style="width: 90%;height: 100%">
                      <bar2 myid="k3d"></bar2>
                    </div>
                  </div> -->
                  <bar2 myid="k3d" :mydata="bardata"></bar2>
                </div>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Pie1 from '@/components/vdata/pien1'
import Round from '@/components/vdata/round'
import Line1 from '@/components/vdata/line1'
import Line2 from '@/components/vdata/line2'
import Bar1 from '@/components/vdata/bar1'
import Bar2 from '@/components/vdata/bar11'
import Monitor from '@/components/vdata/monitor'
export default {
  name: 'Home',
  data () {
    return {
        roundData:[],
        planData:[],
        center1:[],
        center2:[],
        verifyData:[],
        bardata:[]
    }
  },
  mounted () {
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '../assets/dicon.png';
    document.getElementsByTagName('head')[0].appendChild(link);
    this.getRound();
    this.getPlan();
    this.getCenter();
    this.getVerify();
    this.getMounth();
  },
  methods: {
    getRound(){
      this.$http.post('api/conserv/plan/provincePlanList',{itemtype:0,token:this.$Ctoken}).then(res => {
          let all = res.data.data.data;
          let centralinvest = 0;
          let governarea = 0;
          let localinvest = 0;
          for(let i in all){
              centralinvest = all[i].centralinvest + centralinvest;
              governarea = all[i].governarea + governarea;
              localinvest = all[i].localinvest + localinvest;
          }
          centralinvest = (centralinvest / 10000).toPrecision(4);
          governarea = (governarea / 1).toPrecision(4);
          localinvest = (localinvest / 10000).toPrecision(4);
          let mydata = [{name:'治理任务',value:governarea,unit:'平方公里'},{name:'中央投资',value:centralinvest,unit:'亿元'},{name:'地方配套',value:localinvest,unit:'亿元'}]
          this.roundData = mydata;
      }).catch(err => {
        console.log(err)
      })
    },
    getPlan(){
      this.$http.post('api/conserv/plan/provinceProgramList',{itemtype:0,token:this.$Ctoken}).then(res => {
          let all = res.data.data.data;
          this.planData = all
      }).catch(err => {
        console.log(err)
      })
    },
    getCenter(){
      this.$http.post('api/conserv/statistical/statisticItemTypeByYear',{year:'0',areaCode:null,token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          this.center1 = all
      }).catch(err => {
        console.log(err)
      })
      this.$http.post('api/conserv/statistical/statisticRealStatus',{year:'0',areaCode:null,token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          this.center2 = all
      }).catch(err => {
        console.log(err)
      })
    },
    getVerify(){
      this.$http.post('api/assess/resultreport/provincelist',{id:'',pageno:'1',countperpage:'1000000',token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          for(let i in all){
            if(all[i].planYear=='2018') this.verifyData = all[i].content.scoring;
          }
      }).catch(err => {
        console.log(err)
      })
    },
    getMounth(){
      this.bardata = {name:['重点工程','综合治理','坡改梯专项','老区项目','农发项目','小流域治理']
          ,value:[0,0,16,14,12,16]};
      // this.$http.post('api/conserv/statistical/statisticMonthAreaRate',{year:null,month:null,token:this.$Ctoken}).then(res => {
      //     debugger;
      //     let all = res.data.data.data;
      //     this.planData = all
      // }).catch(err => {
      //   console.log(err)
      // })
    },
  },
  components: {
    'pie1': Pie1,
    'round': Round,
    'line1': Line1,
    'line2': Line2,
    'bar1': Bar1,
    'bar2': Bar2,
    'monitor': Monitor
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
  .pie-box{
    width: 95%;
    height: 95%;
    /*background: red;*/
  }
  .pie-title{
    width: 34%;
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

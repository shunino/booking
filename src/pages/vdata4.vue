<style type="text/css">
  .el-progress-bar__innerText{
  color: white;
 }
 .el-progress-bar__inner{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
<template>
  <div class="home-box">
    <div class="left">
      <div class="tab" :class="mytype==1 ? 'cur' : ''" @click="changeType(1)">
        <div class="cspan"><span class="cicon el-icon-news"></span>监督管理</div>
      </div>
      <div class="tab" :class="mytype==2 ? 'cur' : ''" @click="changeType(2)">
        <div class="cspan"><span class="cicon el-icon-setting"></span>治理工程</div>
      </div>
      <div class="tab" :class="mytype==3 ? 'cur' : ''" @click="changeType(3)">
        <div class="cspan"><span class="cicon el-icon-s-home"></span>站网监测</div>
      </div>
    </div>
    <div class="right" v-if="mytype==1">
      <div class="right-div">
        <div class="com-box" style="width: 32.6%;">
          <div class="box-title">
            <span>整体情况</span>
            <span class="t-icon">
              <el-popover
                placement="bottom"
                width="160"
                v-model="visible">
                <p>数据：平台全数据M</p>
                <p>违规：天地一体化中未批先建+超出责任范围的项目数量加</p>
                <span class="el-icon-more" slot="reference"></span>
              </el-popover>
            </span>
          </div>
          <div class="box-co">
           <!--  <span>暂时无数据！</span> -->
           <!--  <pie1 myid="trtrt" :mydata="pdata1"></pie1> -->
           <bar11 myid="qqtrtrt43" :mydata="pdata1"></bar11>
          </div>
        </div>
        <div class="com-box" style="width: 32.6%;margin-left: 1%;">
          <div class="box-title">
            <span>查处情况</span>
            <span class="t-icon">
              <el-popover
                placement="bottom"
                width="160"
                v-model="visible">
                <p>1、监督检查：监督项目的数量。</p>
                <p>2、检查整改中：整改项目数量（ 包括监督管理中有检查意见的项目数量，以及监测管理中三色评价属于红色的项目数量）。</p>
                <p>3、整改数：监督检查之后，项目整改数量。</p>
                <span class="el-icon-more" slot="reference"></span>
              </el-popover>
            </span>
          </div>
          <div class="box-co">
            <bar1 myid="qqtrtrt" :mydata="bdata"></bar1>
          </div>
        </div>
        <div class="com-box" style="width: 32.6%;margin-left: 1%;">
            <div class="box-title">
                <span>补偿费征收情况</span>
                <span class="t-icon">
                  <el-popover
                    placement="bottom"
                    width="160"
                    v-model="visible">
                    <p>1、应收数据：已批复所有项目的应缴费用</p>
                    <p>2、实收数据：已批复所有项目缴清的费用相加</p>
                    <p>3、欠款数据：应缴费用减去缴清费用</p>
                    <span class="el-icon-more" slot="reference"></span>
                  </el-popover>
                </span>
            </div>
            <div class="box-co">
              <pie2 myid="r334" :mydata="pdata2"></pie2>
            </div>
        </div>
      </div>
      <div class="right-div" style="height: 50%;margin-top: 1%;">
        <div class="com-box" style="width: 49.5%">
          <div class="box-title">
            <span>监督检查计划</span>
            <span class="t-icon">
              <el-popover
                placement="bottom"
                width="160"
                v-model="visible">
                <p>今年检查计划清单</p>
                <span class="el-icon-more" slot="reference"></span>
              </el-popover>
            </span>
          </div>
          <div class="box-co">
            <!-- <span>暂时无数据！</span> -->
            <vTable :mydata="tdata"></vTable>
          </div>
        </div>
         <div style="width: 49.5%;margin-left: 1%;height: 100%;">
            <div class="com-box" style="width: 100%;height: 57%;">
               <div class="box-title" style="height: 26%;">
                  <span>新增方案审批数</span>
                  <span class="t-icon">
                    <el-popover
                      placement="bottom"
                      width="160"
                      v-model="visible">
                      <p>年：去年全年数据（例如现在是2020年，采用2019年数据）</p>
                      <p>季度：上个季度数据（例如现在是2020年第二季度，采用2020年第一季度数据）</p>
                      <p>月：上个月数据（例如现在是2020年5月，采用2020年4月数据）</p>
                      <span class="el-icon-more" slot="reference"></span>
                    </el-popover>
                  </span>
              </div>
              <div class="box-co" style="height: 74%;">
                <num :mydata="numdata"></num>
              </div>
            </div>
            <div class="com-box" style="width: 100%;height: 40%;margin-top: 2%;">
              <div class="box-title" style="height: 44%;">
                  <span>新增方案防治责任范围总量</span>
                  <span class="t-icon">
                    <el-popover
                      placement="bottom"
                      width="160"
                      v-model="visible">
                      <p>数据来源：新增方案审批数中对应时间内，新增的防责范围总和</p>
                      <span class="el-icon-more" slot="reference"></span>
                    </el-popover>
                  </span>
              </div>
              <div class="box-co" style="height: 56%;">
                <num1 :mydata="numdata1"></num1>
              </div>
            </div>
         </div>
      </div>
    </div>
    <div class="right" v-if="mytype==2">
      <div class="right-div">
        <div class="com-box" style="width: 32.6%;">
          <div class="box-title">
            <span>任务情况</span>
            <span class="t-icon">
              <el-popover
                placement="bottom"
                width="160"
                v-model="visible">
                <p>1、已开工、未开工：已开工以下的全部状态项目，未开工是审核通过以上的项目</p>
                <p>2、完工和未完工：已完工以下的状态项目，未完工是已开工以上的项目。</p>
                <p>3、已验收和未验收：已验收是已验收状态，未验收是除已验收状态的所有状态项目。</p>
                <p>4、以上全部状态不含整合，整合单独整理。</p>
                <span class="el-icon-more" slot="reference"></span>
              </el-popover>
            </span>
          </div>
          <div class="box-co">
              <type2pie></type2pie>
          </div>
        </div>
        <div class="com-box" style="width: 47.6%;margin-left: 1%;">
          <div class="box-title">
            <span>投资情况</span>
            <span class="t-icon">
              <el-popover
                placement="bottom"
                width="160"
                v-model="visible">
                <p>1、兰色：国家任务治理面积、投资金额</p>
                <p>2、黄色：省级计划治理面积、投资金额</p>
                <p>3、紫色：实际项目治理面积、投资金额</p>
                <span class="el-icon-more" slot="reference"></span>
              </el-popover>
            </span>
          </div>
          <div class="box-co flex">
            <div class="rela" style="width:50%;height:100%">
              <span class="unit" style="bottom:10px;left: 10px;">单位：km² </span>
              <bar22 myid="qqtrt3rt" :mydata="type21"></bar22>
            </div>
             <div class="rela" style="width:50%;height:100%">
              <span class="unit" style="bottom:10px;left: 5px;">单位：万元 </span>
              <bar2 myid="qqtrt3Trt" :mydata="type21"></bar2>
            </div>
          </div>
        </div>
        <div class="com-box" style="width: 17.6%;margin-left: 1%;">
          <div class="box-title">
            <span>整合情况</span>
            <span class="t-icon">
              <el-popover
                placement="bottom"
                width="160"
                v-model="visible">
                <p>所有被整合的项目情况</p>
                <span class="el-icon-more" slot="reference"></span>
              </el-popover>
            </span>
          </div>
          <div class="box-co">
            <type2merge :mydata="type22"></type2merge>
          </div>
        </div>
      </div>
      <div class="right-div" style="height: 50%;margin-top: 1%;">
        <div class="com-box" style="width: 68.4%">
          <div class="box-title">
            <span>治理进度</span>
            <span class="t-icon">
              <el-popover
                placement="bottom"
                width="160"
                v-model="visible">
                <p>今年检查计划清单</p>
                <span class="el-icon-more" slot="reference"></span>
              </el-popover>
            </span>
          </div>
          <div class="box-co">
            <line1 myid="r334" :mydata="ldata"></line1>
          </div>
        </div>
        <div class="com-box" style="width: 30.6%;margin-left: 1%;">
            <div class="box-title">
                <span>验收情况</span>
                <span class="t-icon">
                  <el-popover
                    placement="bottom"
                    width="160"
                    v-model="visible">
                    <p>省市县验收情况对比。</p>
                    <span class="el-icon-more" slot="reference"></span>
                  </el-popover>
                </span>
            </div>
            <div class="box-co">
              <myprogress :mydata="type23"></myprogress>
            </div>
        </div>
      </div>
    </div>
    <div class="right" v-if="mytype==3">
      <div class="right-div">
        <div class="com-box" style="width: 32.6%;">
          <div class="box-title">
            <span>地图分布</span>
            <span class="t-icon">
              <el-popover
                placement="bottom"
                width="160"
                v-model="visible">
                <p>3种颜色区分：国家级、公告项目、省级自建</p>
                <p>2种样式：综合观测点和坡面径流场。</p>
                <span class="el-icon-more" slot="reference"></span>
              </el-popover>
            </span>
          </div>
          <div class="box-co">
            <mymap @changeMap="changeMap" :mydata="type31" myid="ttda3"></mymap>
          </div>
        </div>
        <div class="com-box" style="width: 32.6%;margin-left: 1%;">
          <div class="box-title">
            <span>基本情况</span>
            <span class="t-icon">
              <el-popover
                placement="bottom"
                width="160"
                v-model="visible">
                <p>站点的设备情况，数据来源系统平台。</p>
                <span class="el-icon-more" slot="reference"></span>
              </el-popover>
            </span>
          </div>
          <div class="box-co">
            <type3base :mydata="type32"></type3base>
          </div>
        </div>
        <div class="com-box" style="width: 32.6%;margin-left: 1%;">
            <div class="box-title">
                <span>视频监控</span>
                <span class="t-icon">
                  <el-popover
                    placement="bottom"
                    width="160"
                    v-model="visible">
                    <p>当前站点的监控。</p>
                    <span class="el-icon-more" slot="reference"></span>
                  </el-popover>
                </span>
            </div>
            <div class="box-co">
              <type3video @changeV="changeV" :mysrc="mysrc" :mydata="type33"></type3video>
            </div>
        </div>
      </div>
      <div class="right-div" style="height: 50%;margin-top: 1%;">
        <div class="com-box" style="width: 100%">
          <div class="box-title">
            <span>降雨、径流、泥沙曲线月度数据</span>
            <span class="t-icon">
              <el-popover
                placement="bottom"
                width="160"
                v-model="visible">
                <p>1、降雨：小区记录表1，日降雨量月度相加，</p>
                <p>2、径流：小区计算表2-径流泥沙表，单个小区总径流量的当月相加。小流域的用小流域计算表-2 流域径流泥沙(悬移质)表中，用当月时段径流量相加。</p>
                <p>3、泥沙：小区计算表2-径流泥沙表，单个小区泥沙总量的当月相加，小流域用小流域计算表-2 流域径流泥沙(悬移质)表中，用当月时段产沙量相加。</p>
                <span class="el-icon-more" slot="reference"></span>
              </el-popover>
            </span>
          </div>
          <div class="box-co">
            <type3chart :mocd="mocd" :mydata="type34"></type3chart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pie1 from '@/components/vhome/pie1'
import Pie2 from '@/components/vhome/pie2'
import VTable from '@/components/vhome/table'
import Num from '@/components/vhome/num'
import Num1 from '@/components/vhome/num1'
import Line1 from '@/components/vhome/line1'
import Bar1 from '@/components/vhome/bar1'
import Bar11 from '@/components/vhome/bar11'
import Bar2 from '@/components/vhome/bar2'
import Bar22 from '@/components/vhome/bar22'
import Myprogress from '@/components/vhome/progress'
import Mymap from '@/components/vhome/mymap'
import Type2pie from '@/components/vhome/type2pie'
import Type2merge from '@/components/vhome/type2merge'

import Type3base from '@/components/vhome/type3base'
import Type3chart from '@/components/vhome/type3chart'
import Type3video from '@/components/vhome/type3video'
export default {
  name: 'Home',
  data () {
    return {
       mytype:1,
       pdata1:[],
       pdata2:[],
       bdata:{},
       bdata1:[],
       tdata:[],
       type21:[],
       type22:[],
       type23:[],
       type31:[],
       type32:{},
       type33:[],
       type34:[],
       mocd:16,
       mysrc:'',
       numdata:{},
       numdata1:{}
    }
  },
  mounted () {
    this.getType1();
    this.getType2();
    this.getType3();
  },
  methods: {
    changeType(type){
      this.mytype = type;
    },
    getType1(){
      this.$http.get(this.$other+'/gzstbcapi/api/services/app/GZExternal/GetSJCheckPlan',{token:this.$Ctoken}).then(res => {
          this.tdata = res.data.result.items;
      }).catch(err => {
        console.log(err)
      })

      this.$http.get(this.$other+'/gzstbcapi/api/services/app/GZExternal/GetStatistics1',{token:this.$Ctoken}).then(res => {
          let all = res.data.result;
          this.bdata = all;
          //this.bdata = {checkProjectNum:0,rectifingNum:0,rectifedNum:0};
      }).catch(err => {
        console.log(err)
      })
      this.$http.get(this.$other+'/gzstbcapi/api/services/app/GZExternal/GetStatistics2',{token:this.$Ctoken}).then(res => {
          let all = res.data.result;
          this.numdata =all;
          this.numdata1 = all;
          //,{name:'未验收',value:all.noAcceptProject}
          this.pdata1 = [{name:'合规',value:all.complProject},{name:'违规',value:all.violationProject},{name:'已验收',value:all.acceptProject},{name:'未验收',value:all.noAcceptProject}];
          this.pdata2 = {payAmount:all.payAmount,noPayAmount:all.noPayAmount};

      }).catch(err => {
        console.log(err)
      })
    },
    getType2(){
      this.$http.post('api/conserv/statistical/statisticRealStatus',{year:'2019',areaCode:null,token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          this.ldata = all
      }).catch(err => {
        console.log(err)
      })
      this.$http.post('api/conserv/statistical/statisticPlan',{token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          this.type21 = all;
      }).catch(err => {
        console.log(err)
      })
      this.$http.post('api/conserv/statistical/statisticIntegrated',{token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          this.type22 = all;
      }).catch(err => {
        console.log(err)
      })
      this.$http.post('api/conserv/statistical/statisticAcceptance',{token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          this.type23 = all;
      }).catch(err => {
        console.log(err)
      })
    },
    changeV(item){
      this.mysrc = item.url1;
    },
    changeMap(val){
      this.mocd = val.mocd;
      this.getType3();
    },
    getType3(){
      this.$http.post('api/station/findStations',{token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          this.type31 = all
      }).catch(err => {
        console.log(err)
      })
      this.$http.post('api/station/findSwcJcStationById',{mocd:this.mocd,token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          this.type32 = all
      }).catch(err => {
        console.log(err)
      })
      this.$http.post('api/station/findSwcJcStationChannelById',{mocd:this.mocd,token:this.$Ctoken}).then(res => {
          let all = res.data.data;
          this.type33 = all;
          this.mysrc = all[0].url1;
      }).catch(err => {
        console.log(err)
      })
      this.$http.post('api/station/findTotalMonthLines',{mocd:this.mocd,token:this.$Ctoken,year:'2018'}).then(res => {
          let all = res.data.data;
          if(all){
            this.type34 = all;
          } else {
            this.type34 = [];
          }
          
      }).catch(err => {
        console.log(err)
      })
    },
  },
  components: {
    'pie1': Pie1,
    'pie2': Pie2,
    'num': Num,
    'num1': Num1,
    'vTable': VTable,
    'line1': Line1,
    'bar1': Bar1,
    'bar11': Bar11,
    'bar2': Bar2,
    'bar22': Bar22,
    'myprogress': Myprogress,
    'mymap': Mymap,
    'type2pie': Type2pie,
    'type2merge': Type2merge,
    'type3chart': Type3chart,
    'type3base': Type3base,
    'type3video': Type3video
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

        background: #0649A3;

    }

::-webkit-scrollbar-track {

        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);

        border-radius: 10px;

        background: #EDEDED;

}
.rela{
  position: relative;
}
.unit{
  position: absolute;
  font-size: 12px;
}
.home-box{
  width: 100%;
  height: 100%;
  display: flex;
  background: #0649A3;
  justify-content: center;
  align-items: center;
}
.home-box .left{
  width: 15%;
  height: 100%;
  background: #0C275D;
}
.home-box .left .tab{
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #9B9EA1;
  border-bottom: 1px solid #9B9EA1;
  font-size: 25px;
  cursor: pointer;
}
.home-box .left .tab .cspan{
  height: 40%;
  width: 100%;
  display: flex;
  align-items: center;
}
.cspan .cicon{
  margin: 0px 17% 0px 10%;
  font-size: 30px;
}
.home-box .left .tab.cur{
  color: #45D7DA;
}
.home-box .left .tab.cur .cspan{
  border-left:4px solid #45D7DA;
}
.home-box .right{
  margin-left: 1%;
  margin-right: 1%;
  width: 83%;
  height: 95%;
  background: #0649A3;
}
.home-box .right .right-div{
  width: 100%;
  height: 50%;
  display: flex;
}
.com-box{
  height: 100%;
  background: #0C275D;
  color: #CFD0D2;
}
.com-box .box-title{
  height: 15%;
  display: flex;
  align-items: center;
  text-indent: 15px;
  font-size: 20px;
  font-weight: bold;
  justify-content: space-between;
}
.com-box .box-title .t-icon{
  margin-right: 15px;
  cursor: pointer;
}
.com-box .box-co{
  height: 85%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
}
</style>

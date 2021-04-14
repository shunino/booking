<style type="text/css">
.el-progress--circle .el-progress__text, .el-progress--dashboard .el-progress__text{
  font-size: 16px !important;
}
</style>
<template>
  <div  style="width:100%;height: 100%;display: flex;flex-direction: column;align-items: center;justify-content: center;">
      <div class="proTop">
        <div class="ptitle"><span class="pspan"></span>实收数：{{(mydata.payAmount/10000).toFixed(0)}}万元</div>
          <el-progress color="#E16A51" width="200" stroke-width="15" type="dashboard" percentage="50" :format="format" ></el-progress>
      </div>
      <div class="proB">
        <!-- <div> -->
          <div><span class="sicon"></span><span class="num">{{0-(mydata.noPayAmount/10000).toFixed(0)}}</span><span>万元</span></div>
          <div style="margin-top: 5%;color: gray;">欠款数</div>
      <!--   </div> -->
      </div>
  </div>
 
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      nopay:''
    }
  },
  props: ['myid','mydata'],
  mounted () {
    //debugger;
    //if(this.mydata){
     // this.loadChart();
    //}
  },
  watch:{
    mydata:{
        handler(newValue, oldValue) {
　　　　　 this.loadChart();
          //debugger;
          //this.nopay = 0 - this.mydata.noPayAmount;
　　　　},
　　　　deep: true
    }
  },
  methods: {
    format(percentage) {
      let all = ((this.mydata.payAmount - this.mydata.noPayAmount)/10000).toFixed(0);
        return '应收数：'+all+'万元';
    },
    loadChart () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById(this.myid))
      let data = this.mydata
      // 指定图表的配置项和数据
      let option = {
          title: {
                "text": '刘浩',
                subtext:'1516',
                itemGap:3,
                "x": '49%',
                "y": '62%',
                textAlign: "center",
                "textStyle": {
                    "fontWeight": 'normal',
                    "fontSize": 12,
                    color:'#aaaaaa',

                },
                "subtextStyle": {
                    "fontWeight": 'normal',
                    "fontSize": 12,
                    color:'#aaaaaa',
                    lineHeight:14
                },

            },
            "color": ["#0696ff","#7ed321", "transparent"],
            "startAngle": 180,
            series: [
                {
                    name:'',
                    type:'pie',
                    radius: ['45%', '90%'],
                    avoidLabelOverlap: false,
                    startAngle: 180,
                    center:["50%","70%"],
                    label: {

                        normal: {
                            position: 'inner',
                            textStyle: {
                                color: '#fff',
                                fontSize: 12
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '12',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[{value:335, name:'刘浩0'},{value:310, name:'刘浩1'},{value:879, name:'',tooltip:{formatter:function(a){return ""}}}]
                },

            ]
      };


      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener('resize', function(){
          myChart.resize();
        });
     // myChart.resize();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.proTop{
  width: 80%;
  height: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid gray;
}
.proTop .pro-intro{
  position: absolute;
  bottom: 0px;
  left: 20%;
}
.proTop .ptitle{
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
}
.proTop .ptitle .pspan{
  width: 10px;
  height: 10px;
  display: inline-block;
  background: #E16A51;
  margin-right:5%;
}
.proB{
  width: 80%;
  height: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  justify-content: center;
}
.proB div{
  width: 100%;
  text-align: center;;
}
.proB .num{
  font-size: 30px;
  margin-right: 5px;
}
.proB .sicon{
  width: 10px;
  height: 10px;
  display: inline-block;
  background: gray;
  margin-right:10%;
}
</style>

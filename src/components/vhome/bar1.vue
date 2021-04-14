<template>
 <div :id="myid" style="width:100%;height: 100%;">

 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: ['myid','mydata'],
  watch:{
    mydata:{
        handler(newValue, oldValue) {
　　　　　　this.loadChart();
　　　　},
　　　　deep: true
    }
  },
  mounted () {
    if(this.mydata.checkProjectNum){
      this.loadChart();
    }
  },
  methods: {
    loadChart () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById(this.myid))
      let arr = this.mydata;
      // let name = [];
      // let cdata = [];
      // for(let i in arr){
      //   if(arr[i].cityName.length>3) arr[i].cityName=arr[i].cityName[0] + arr[i].cityName[1] + arr[i].cityName[2];
      //   name.push(arr[i].cityName);
      //   cdata.push(arr[i].totalScore);
      // }
      // 指定图表的配置项和数据
      let cname = ['监督检查', '检查整改中', '整改完成'];
      let cdata = [arr.checkProjectNum,arr.rectifingNum,arr.rectifedNum];
      let option = {
        //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '5%',
                top:'10%',
                right: '5%',
                bottom: '5%',
               containLabel: true
            },
            xAxis: [{
                type: 'category',
                  data: cname,
                axisLine: {
                    show: true,
                 lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },
            
                axisTick: {
                    show: false,
                },
            axisLabel:  {
                        interval: 0,
                       // rotate:50,
                        show: true,
                        splitNumber: 15,
                        textStyle: {
                            color: "#CFD0D2",
                            fontSize: '16',
                        },
                    },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                   //formatter: '{value} %'
                show:true,
                textStyle: {
                      color: "#CFD0D2",
                      fontSize: '14',
                  },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1 )",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                       color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [
            {
                type: 'bar',
                data: cdata,
                barWidth:'35%', //柱子宽度
               // barGap: 1, //柱子之间间距
                itemStyle: {
                    normal: {
                        color: function(params) {
                          let colorList = ['#E26B52','#C53ED2','#45D7DA','#61A0A8'];
                          return colorList[params.dataIndex]
                        },
                        opacity: 1,
                        barBorderRadius: 5,
                    }
                }
            }
            
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

</style>

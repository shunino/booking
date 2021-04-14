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
    if(this.mydata.length!=0){
      this.loadChart();
    }
  },
  methods: {
    loadChart () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById(this.myid))
      let arr = this.mydata;
      let name = [];
      let cdata = [];
      for(let i in arr){
        if(arr[i].cityName.length>3) arr[i].cityName=arr[i].cityName[0] + arr[i].cityName[1] + arr[i].cityName[2];
        name.push(arr[i].cityName);
        cdata.push(arr[i].totalScore);
      }
      // 指定图表的配置项和数据
       let option = {
          //  backgroundColor: '#00265f',
            title: {
                text: '得分',
                x:'center',
                y:'top',
                textStyle:{
                            color:'#0DB9F2',        //颜色
                            fontStyle:'normal',     //风格
                            fontWeight:'bold',    //粗细
                            fontFamily:'Microsoft yahei',   //字体
                            fontSize:16,     //大小
                            align:'right'   //水平对齐
                        },
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '0%',
                top:'10px',
                right: '0%',
                bottom: '4%',
               containLabel: true
            },
            xAxis: [{
                type: 'category',
                  data: name,
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
                  color: "rgba(255,255,255,.6)",
                            fontSize: '12',
                        },
                    },
            }],
            grid:{
              top:"60px",
                              left:"12px",
                              right:"15px",
                              bottom:"50px"

            },
            yAxis: [{
                type: 'value',
                axisLabel: {
                   //formatter: '{value} %'
              show:false,
               textStyle: {
                  color: "rgba(255,255,255,.6)",
                            fontSize: '12',
                        },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "rgba(255,255,255,.1 )",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                       color: "rgba(255,255,255,.1)",
                    },
                    show:false
                }
            }],
            series: [
            {
                type: 'bar',
                data: cdata,
                barWidth:'50%', //柱子宽度
               // barGap: 1, //柱子之间间距
                itemStyle: {
                    normal: {
                        label: {
                                   show: true,    //开启显示
                                   position: 'top', //在上方显示
                                   textStyle: {     //数值样式
                                       color: '#2F89CF',
                                       fontSize: 16
                                   }
                               },
                        color:'#2f89cf',
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

<template>
 <div :id="myid" style="width:96%;height: 100%;">

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
    //if(this.mydata.length!=0){
      this.loadChart();
    //}
  },
  methods: {
    loadChart () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById(this.myid))
      let arr = this.mydata;
      let t1 = [];
      let t2 = [];
      let t3 = [];
      for(let i in arr){
        t1.push(arr[i][0]);
        t2.push(arr[i][1]);
        t3.push(arr[i][2]);
      }
      // 指定图表的配置项和数据
      let option = {
          tooltip: {//鼠标指上时的标线
              trigger: 'axis',
              axisPointer: {
                  lineStyle: {
                      color: '#fff'
                  }
              }
          },
          legend: {
              icon: 'circle',
              itemWidth: 14,
              itemHeight: 10,
              itemGap: 40,
              data: ['开工率', '治理完成率', '投资任务完成率'],
              left: '10px',
              top: '0px',
              bottom:'20px',
              textStyle: {
                  fontSize: 12,
                  color: '#fff'
              }
          },
          grid: {
              x: 45,
              y: 60,
              x2: 15,
              y2: 60,
          },
          xAxis: [{
              type: 'category',
              boundaryGap: false,
              axisLine: {
                  lineStyle: {
                      color: '#57617B'
                  }
              },
              axisLabel: {
                  textStyle: {
                      color:'#fff',
                  },
              },
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          }],
          yAxis: [{
              type: 'value',
              axisTick: {
                  show: false
              },
              axisLine: {
                  lineStyle: {
                      color: '#57617B'
                  }
              },
              axisLabel: {
                  margin: 10,
                  textStyle: {
                      fontSize: 14
                  },
                  textStyle: {
                      color:'#fff',
                  },
                  formatter: '{value} %'  
              },
              splitLine: {
                  lineStyle: {
                      color: '#57617B'
                  }
              }
          }],
          series: [{
              name: '开工率',
              type: 'line',
              smooth: true,
              lineStyle: {
                  normal: {
                      width: 2
                  }
              },
              itemStyle: {
                  normal: {
                      color: '#44D6D9'
                  }
              },
              data: t1
          }, {
              name: '治理完成率',
              type: 'line',
              smooth: true,
              lineStyle: {
                  normal: {
                      width: 2
                  }
              },
              itemStyle: {
                  normal: {
                      color: '#C63ED3'
                  }
              },
              data: t2
          }, {
              name: '投资任务完成率',
              type: 'line',
              smooth: true,
              lineStyle: {
                  normal: {
                      width: 2
                  }
              },
              itemStyle: {
                  normal: {
                      color: '#E16A51'
                  }
              },
              data: t3
          }, ]
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

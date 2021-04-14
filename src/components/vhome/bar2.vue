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
    //if(this.mydata.length!=0){
      this.loadChart();
    //}
  },
  methods: {
    loadChart () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById(this.myid))
      let arr = this.mydata;
      // 指定图表的配置项和数据
      let option = {
          legend: {
              icon: 'circle',
              itemWidth: 14,
              itemHeight: 10,
              itemGap: 40,
              data: ['国家规划', '省级计划','实际项目'],
              // left: '30px',
              // top: '0px',
              x:'left',
              y:'top',
              bottom:'5%',
              textStyle: {
                  fontSize: 14,
                  color: '#fff'
              }
          },
          grid:{
            x: 60,
            y: 45,
            x2: 15,
            y2: 45
          },
          tooltip: {},
          dataset: {
              source: [
                  ['product', '国家规划', '省级计划','实际项目'],
                  //['治理面积', arr[0][0], arr[0][1], arr[0][2]],
                  ['投资情况', arr[1][0], arr[1][1], arr[1][2]],
              ]
          },
          xAxis: {
            type: 'category',
            axisLine: {
              show: false,
              lineStyle: {
                color: "#393E44",
              },
            },
            splitLine: {
              show:false,
              lineStyle: {
                color: 'red'
              }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                }
            },
            // data: ["岳阳市","益阳市","长沙市","株洲市","衡阳市","永州市","娄底市","郴州市","湘潭市"],
            axisTick: {
              alignWithLabel: true
            }
          },
          yAxis: {
            axisLine: {
              show:false,
              lineStyle: {
                color: "#4E5258",
              }
            },
            splitLine: {
              lineStyle: {
                color: '#4E5258'
              }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            }
          },
          series: [
            {
              type: 'bar',
              barMaxWidth: '40',
              barCateGoryGap:'50',
              itemStyle: { 
                normal:{    
                  color: '#45D7DA',
                  label:{
                    formatter:"国\n家\n规\n划",
                    show:false,
                    position:"inside",
                    textStyle:{

                    }
                  }     
                },
              },
            },
            {
              type: 'bar',
              barMaxWidth: '40',
              barCateGoryGap:'50',
              itemStyle: { 
                normal:{    
                  color: '#E26B52',
                  label:{
                    formatter:"省\n级\n计\n划",
                    show:false,
                    position:"inside",
                    textStyle:{

                    }
                  }     
                },
              },
            },
            {
              type: 'bar',
              barMaxWidth: '40',
              barCateGoryGap:'50',
              itemStyle: { 
                normal:{    
                  color: '#C63ED3',
                  label:{
                    formatter:"实\n际\n项\n目",
                    show:false,
                    position:"inside",
                    textStyle:{

                    }
                  }   
                },
              },
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

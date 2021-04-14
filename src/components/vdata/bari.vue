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
  props: ['myid'],
  mounted () {
    this.loadChart();
  },
  methods: {
    loadChart () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById(this.myid))

      // 指定图表的配置项和数据
       let option = {
        
        legend: {
            x : 'center',
            y : 'bottom',
            itemWidth: 8,
            itemHeight: 8,
            textStyle:{//图例文字的样式
                color:'#fff',
                fontSize:12
            },
            data:['上限','上上限','下限','下下限','正跳变','负跳变']
        },
        calculable : true,
        series : [
            {
                name:'面积模式',
                type:'pie',
                radius : [30, 100],
                center : ['50%', '45%'],
                roseType : 'area',
                data:[
                    {value:43, name:'上限',itemStyle:{normal:{color:'#ff7800'}}},
                    {value:22, name:'上上限',itemStyle:{normal:{color:'#23eb6a'}}},
                    {value:31, name:'下限',itemStyle:{normal:{color:'#7627cb'}}},
                    {value:32, name:'下下限',itemStyle:{normal:{color:'#fffc00'}}},
                    {value:23, name:'正跳变',itemStyle:{normal:{color:'#46afdb'}}},
                    {value:43, name:'负跳变',itemStyle:{normal:{color:'#ff0000'}}}
                ]
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

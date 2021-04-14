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
    if(this.mydata.length!=0){
      this.loadChart();
    }
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
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['开工率','治理完成率','投资完成率'],
                textStyle:{
                    color: '#fff'
                },
                top: '8%',
            },
            grid: {
                top: '25%',
                left: '13',
                right: '2.5%',
                bottom: '3%',
                containLabel: true
            },
            color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: '',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: {
                  formatter: '{value} %'  
              },
            },
            series: [
                {
                    name:'开工率',
                    type:'line',
                    data:t1
                },
                {
                    name:'治理完成率',
                    type:'line',
                    data:t2
                },
                {
                    name:'投资完成率',
                    type:'line',
                    data:t3
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

<template>
  <div style="width:100%;height: 100%;display:flex;align-items: center;
    justify-content: center;">
    <div  :id="myid" style="width:96%;height: 100%;">
    </div>
    <!-- <div v-if="mydata.length==0">此站点暂时无数据！</div> -->
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
  props: ['myid','mydata','type'],
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
      $('#'+this.myid).removeAttr("_echarts_instance_").empty();
      var myChart = this.$echarts.init(document.getElementById(this.myid))
      let arr = this.mydata;
      let name = [];
      let cdata=[];
      let yname;
      if(this.type==1){
        yname='mm'
      } else {
        yname='t/hm²'
      }
      for(let i in arr){
        let ob = {};
        name.push(arr[i][0].bz);
        ob.name = arr[i][0].bz;
        ob.type = 'line';
        let mydata = [];
        for(let j in arr[i]){
          if(this.type=='1') mydata.push(arr[i][j].zjll);
          else mydata.push(arr[i][j].trlsl);
        }
        ob.data = mydata;
        cdata.push(ob);
      }
      // 指定图表的配置项和数据
      let option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis',
                //formatter: '{b}<br />{c}'+yname
            },
            legend: {
                data:name,
                textStyle:{
                    color: '#fff'
                },
                //top: '9%',
                type: 'scroll',
                pageIconColor: 'white',
                pageTextStyle:{
                  color:'white'
                }
                
            },
            grid: {
                top: '22%',
                left: '13',
                right: '2%',
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
                },
                axisLabel:{
                    interval:1,
                },
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
                }
            },
            series: cdata
        };


      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option,true,true);
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

<template>
  <div style="width:100%;height: 100%;display:flex;align-items: center;
    justify-content: center;">
    <div  :id="myid" style="width:100%;min-height:100%;">
    </div>
   <!--  <div v-if="mydata.value.length==0">此站点暂时无数据！</div> -->
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
      let yname ="";
      // if(this.type==1){
      //   yname='单位：mm'
      // } else {
      //   yname='单位：t/hm²'
      // }
      var myChart = this.$echarts.init(document.getElementById(this.myid))
      let arr = this.mydata;
      // 指定图表的配置项和数据
     let leng  = arr.value.length;
     //debugger;
     let a1 = Math.ceil(leng / 5);
     let end =Math.ceil(100 / a1);
    let option = {
              color:['#7ecef4'],
                // backgroundColor: 'rgba(1,202,217,.2)',
                grid: {
                          left:0,
                          right:20,
                          top:30,
                          bottom:0,
                          containLabel: true
                        },
                tooltip : {
                    show: true,
                     trigger: 'item'
        //            trigger: 'axis',
        //            axisPointer: {
        //                type: 'cross',
        //                label: {
        //                    backgroundColor: '#6a7985'
        //                }
        //            }
                },
                dataZoom:
                {
                  type: 'slider',
                  yAxisIndex: 0,
                  filterMode: 'empty',
                  start: 0,
                  end: end,
                  zoomLock:true
                },
                xAxis: {
                    type: 'value',
                    axisLine:{
                     lineStyle:{
                       color:'rgba(255,255,255,0)'
                     }
                   },
                   splitLine:{
                     lineStyle:{
                       color:'rgba(255,255,255,0)'
                     }
                   },
                   axisLabel:{
                       color:"rgba(255,255,255,0)"
                   },
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    name:yname,
                    nameTextStyle:{
                        color:"white", 
                    },
                    type: 'category',
                    axisLine:{
                     lineStyle:{
                       color:'rgba(255,255,255,.5)'
                     }
                   },
                   splitLine:{
                     lineStyle:{
                       color:'red'
                     }
                   },
                   axisLabel:{
                       textStyle: {
                        color: "#92A1B3",
                        fontSize: '14',
                      },
                   },
                    data: arr.name
                },
                series: [
                    {
                       // name: '2011年',
                        type: 'bar',
                        barWidth :20,
                        itemStyle: {
                            // normal: {
                            //     color: new echarts.graphic.LinearGradient(
                            //         1, 0, 0, 1,
                            //         [
                            //             {offset: 0, color: 'rgba(230,253,139,.7)'},
                            //             {offset: 1, color: 'rgba(41,220,205,.7)'}
                            //         ]
                            //     )
                            // }
                        },
                        data: arr.value
                    }
                ]
            };


      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option,true);
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

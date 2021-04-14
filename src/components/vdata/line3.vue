<template>
 <div :id="myid" style="width:95%;height: 100%;">
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
    getLatestDays(num)
        {
            var currentDay = new Date();
            var returnDays = [];
            for (var i = 0 ; i < num ; i++)
            {
                currentDay.setDate(currentDay.getDate() - 1);
                returnDays.push((currentDay.getMonth()+1)+"/"+currentDay.getDate());
            }
            return returnDays;
        },
    loadChart () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById(this.myid))
       let arr = this.mydata;
          let name = [];
          let data = [];
          for(let i in arr){
            if(this.type==1) data.push(arr[i].rjsl);
            else data.push(arr[i].sum);
            name.push(this.$times(arr[i].mytime));
            //data.push(arr[i].replyCount);
          }
      // 指定图表的配置项和数据
        let self = this;
     let option = {
            title: {
                text: ''
            },
    //         tooltip : {
    //             show: true,
    //              trigger: 'item'
    // //            trigger: 'axis',
    // //            axisPointer: {
    // //                type: 'cross',
    // //                label: {
    // //                    backgroundColor: '#6a7985'
    // //                }
    // //            }
    //         },
            legend: {
                data:[]
            },
            grid: {
                left: '13',
                right: '4%',
                bottom: '5%',
                top:'4%',
                containLabel: true
            },
            xAxis :
            {
                type : 'category',
                boundaryGap: true,
                axisLine: {onZero: false},
                data : name,
                axisLabel:{
                    textStyle:{
                        color:"white", //刻度颜色
                        fontSize:12  //刻度大小
                    },
                    rotate:45,
                    interval:5,
                    show:false
                },
                axisTick:{show:false},
                axisLine:{
                    show:true,
                    lineStyle:{
                        color: '#0B3148',
                        width: 1,
                        type: 'solid'
                    }
                },
                splitLine: {  
                    show:false,   //X网格线
                    lineStyle:{   //x网格线
                        color: '#ffffff',
                        width: 1
                    }
                }
            },
            yAxis : 
            {
                name:'单位：mm',
                nameTextStyle:{
                    color:"white", 
                },
                 inverse: true,
                type : 'value',
                axisTick:{show:false},
                axisLabel:{
                    textStyle:{
                        color:"white", //刻度颜色
                        fontSize:12 //刻度大小
                        }
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color: '#0B3148',
                        width: 1,
                        type: 'solid'
                    }
                },
                splitLine:{
                    show:true,
                    lineStyle:{   //x网格线
                        color: '#0F2F51',
                        width: 1
                    }
                }
            },
            tooltip:{
                    show: true,
                 //trigger: 'item',
                trigger: 'axis',
               formatter: '{b}<br />降雨量（mm）：{c}mm'
            },
            series : [
                {
                    name:'',
                    lineStyle: {
                        width: 2
                    },
                    type:'bar',
                    smooth:false,
                    areaStyle:{
                        normal:{
                            color:'#3988F3',
                            opacity:1
                        }
                    },
                    itemStyle : {  
                            normal : {  
                                  color:'#3988F3',
                            },
                            lineStyle:{
                                normal:{
                                color:'#009895',
                                opacity:1
                            }
                        }
                    },
                    symbol:'true',
                    data:data
                }
            ]
        }


      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option,true);
     // myChart.resize();
     window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

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
            name.push(arr[i].name+'月');
            data.push(arr[i].value);
            //data.push(arr[i].replyCount);
          }
      // 指定图表的配置项和数据
        let self = this;
         let option = {
                title: {
                    text: ''
                },
                grid: {
                    left: '2.5%',
                    right: '2.5%',
                    bottom: '5%',
                    top:'5%',
                    containLabel: true
                },
                xAxis :
                {
                    type : 'category',
                    boundaryGap : false,
                    data : name,
                    axisLabel:{
                        textStyle:{
                            color:"white", //刻度颜色
                            fontSize:12  //刻度大小
                        },
                        rotate:45,
                       // interval:2
                    },
                    axisTick:{show:false},
                    axisLine:{
                        show:true,
                        lineStyle:{
                            color: '#0B3148',
                            width: 1,
                            type: 'solid'
                        }
                    }
                },
                yAxis : 
                {
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
                        show:false
                    }
                },
                tooltip:{
                    trigger: 'axis'
                },
                series : [
                    {
                        name:'',
                        type:'line',
                        smooth:true,
                        areaStyle:{
                            normal:{
                                color:'#12456E',
                                opacity:0.2
                            }
                        },
                        itemStyle : {  
                                normal : {  
                                      color:'#009991'
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
      myChart.setOption(option);
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

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
  mounted () {
    //debugger;
    if(this.mydata){
      this.loadChart();
    }
  },
  watch:{
    mydata:{
        handler(newValue, oldValue) {
　　　　　　this.loadChart();
　　　　},
　　　　deep: true
    }
  },
  methods: {
    loadChart () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById(this.myid))
      let data = this.mydata
      let name = [];
      for(let i in this.mydata){
        name.push(this.mydata[i].name);
      }
      // 指定图表的配置项和数据
      let option = {
          tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
              orient: 'vertical',
              data: name,
              x: '40%',
              y: '30',
              right:'5%',
              icon:"circle",
              formatter:function(name){
                  let target;
                  for(let i=0;i<data.length;i++){
                      if(data[i].name===name){
                          target=data[i].value
                      }
                  }
                  // let arr=["{a|"+target+"}","{b|"+name+"}"]
                  // return arr.join("\n")
                  return name+' '+target;

              },
              textStyle: { //图例文字的样式
                  color: '#92A1B3',
                  fontSize: 12
              },
          },
          color : [ '#FB2872', '#42C7DC'],
          series: [
              {
                  name: '访问来源',
                  type: 'pie',
                  radius: ['50%', '70%'],
                  center : [ '20%', '50%' ],
                  avoidLabelOverlap: false,
                  label: {
                      normal: {
                          show: false,
                          position: 'center'
                      },
                      emphasis: {
                          show: true,
                          textStyle: {
                              fontSize: '10',
                              fontWeight: 'bold'
                          }
                      }
                  },
                  labelLine: {
                      normal: {
                          show: false
                      }
                  },
                  data: data
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

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
  props: ['myid','mydata','type'],
  watch:{
    mydata:{
        handler(newValue, oldValue) {
　　　　　　this.loadChart();
　　　　},
　　　　deep: true
    },
    type:{
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
      let cdata=[];
      // for(let i in arr){
      //   let ob = {};
      //   name.push(arr[i].name);
      //   ob.name = arr[i].name;
      //   ob.type = 'line';
      //   ob.data = arr[i].value;
      //   cdata.push(ob);
      // }
      for(let i in arr){
        let ob = {};
        name.push(arr[i][0].bz);
        ob.type = 'line';
        ob.name = arr[i][0].bz;
        let mydata = [];
        for(let j in arr[i]){
          if(this.type=='2') mydata.push(arr[i][j].zjll);
          else mydata.push(arr[i][j].trlsl);
        }
        ob.data = mydata;
        cdata.push(ob);
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
              left: '10px',
              top: '0px',
              bottom:'20px',
              textStyle: {
                  fontSize: 12,
                  color: '#fff'
              }
          },
          color:['#C23531','#61A0A8', '#D48265', '#91C7AE', '#01A0FF', '#FFE707' ,'#FC7F00' ,'#9A27CB' ,'#4DA568'],
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
                  formatter: '{value}'  
              },
              splitLine: {
                  lineStyle: {
                      color: '#57617B'
                  }
              }
          }],
          series: cdata
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

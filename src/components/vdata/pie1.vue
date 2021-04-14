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
      let cdata = [];
      let all = 0;
      for(let i in arr){
        if(arr[i].count!=0){
          name.push(arr[i].typeName);
          let ob = {};
          ob.value = arr[i].count;
          ob.name = arr[i].typeName;
          cdata.push(ob);
          all = all + arr[i].count;
        }
      }
      // 指定图表的配置项和数据
       let option = {
        
        legend: {
            x : 'center',
            y : 'bottom',
            itemWidth: 20,
            itemHeight: 20,
            textStyle:{//图例文字的样式
                color:'#fff',
                fontSize:14
            },
            data:name
        },
        calculable : true,
        series : [
            {
                name:'面积模式',
                type:'pie',
                radius : [30, 100],
                center : ['50%', '45%'],
                roseType : 'area',
                data:cdata
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

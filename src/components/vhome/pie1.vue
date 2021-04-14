<template>
 <div  :id="myid" style="width:100%;height: 100%;">
      <!-- <span class="kong"></span> -->
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      myall:6,
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
  // updated() {
  //    // 获取考勤数据
  //    this.loadChart();
  // },
  methods: {
      loadChart () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(document.getElementById(this.myid))
        let arr = this.mydata;
        //if(arr[0].value==0) return;
        let data = arr;
        let name = [];
        let all = 0;
        for(let i in arr){
            name.push(arr[i].name);
            all = all + arr[i].value;
        }
        let option = {
              tooltip : {
                  trigger: 'item',
                  formatter: "{a} <br/>{b} : {c} ({d}%)",
                  show:false
              },
              color : [ '#45D7DA', '#C63ED3', '#E26B52'],
              legend: {
                  orient : 'vertical',
                  x: '75%',
                  y: '5%',
                  right:'5%',
                  icon:"circle",
                  textStyle : {
                      color : '#ffffff',
                      fontSize: 18,
                      rich:{
                            a:{
                                fontSize:22,
                                color:"white",
                                padding:[0,15,28,0]
                            },
                            b:{
                                fontSize:14,
                                color:"#CFD0D2",
                                lineHeight:30
                            }
                        }
                  },
                  formatter:function(name){
                        let target;
                        let total = 0;
                        for(let i=0;i<data.length;i++){
                            if(data[i].name===name){
                                target=data[i].value
                            }
                            total = total + data[i].value;
                        }
                        let per = ((target/total) * 100).toFixed(1)
                        let arr=["{a|"+per+"%}","{b|"+name+":  "+target+"}"]
                        return arr.join("\n")

                  },
                  data:name
              },
              grid: {
                  top: '25%',
                  left: '-60',
                  right: '2%',
                  bottom: '3%',
                  containLabel: true
              },
              //calculable : false,
              series : [
                  {
                      name:'',
                      type:'pie',
                      radius : ['80%', '60%'],
                      center: ['40%', '50%'],
                      label: {
                          normal: {
                              show:true,
                              position: 'center',
                              formatter:function (argument) {
                                  let num = '454545';
                                  let txt = '项目总数量';
                                  let arr=["{a|"+all+"}","{b|"+txt+"}"];
                                  return arr.join("\n")
                                  return arr;
                              },
                              rich: {
                                  a: {
                                      color: 'white',
                                      fontSize: 33,
                                      lineHeight:50
                                  },
                                  b: {                        //name 文字样式
                                      fontSize: 20,
                                      lineHeight: 20,
                                      color: '#CDCDD0'
                                  }
                              },
                          },
                      },
                      itemStyle : {
                          normal : {
                              label : {
                                  show : false
                              },
                              labelLine : {
                                  show : false
                              }
                          },
                          emphasis : {
                              label : {
                                  show : false,
                                  position : 'center',
                                  textStyle : {
                                      fontSize : '20',
                                      fontWeight : 'bold'
                                  }
                              }
                          }
                      },
                      data:arr
                  }
              ]
            };
        myChart.setOption(option);
        // 使用刚指定的配置项和数据显示图表。
        window.addEventListener('resize', function(){
          myChart.resize();
        });
        //myChart.resize();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

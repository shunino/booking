<style type="text/css">
  .el-table th, .el-table tr{
    background: #393E44;
  }
  .vhome .el-table th{
    background: #393E44;
  }
  .vhome .el-table tr{
    background: #393E44;
  }
  .vhome .el-table td, .el-table th.is-leaf{
    border-bottom:1px solid #4E5258;
  }
  .vhome .el-table{
    color:white;
  }
  .vhome .el-table--enable-row-hover .el-table__body tr:hover>td{
    background: #393E44;
  }
</style>
<template>
 <div class="vhome" style="width:94%;height: 100%;">
    <el-table
      :data="tableData"
      align="center"
      style="width: 100%;">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    }
  },
  props: ['myid'],
  mounted () {
    //this.loadChart();
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
     // myChart.resize();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

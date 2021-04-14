<style scoped>

</style>
<template>
<div style="width: 100%;">
  <el-table
    :data="tableData"
    stripe
    style="width: 100%;min-height: 600px;">
    <el-table-column
      prop="dataname"
      label="数据名称"
      >
    </el-table-column>
    <el-table-column
      prop="filesize"
      label="数据大小"
      >
    </el-table-column>
    <el-table-column
      prop="createtime"
      label="下载时间">
    </el-table-column>
  </el-table>
  <div class="mt20" style="text-align: left;">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        mysearch:{
          userid:this.$userId,
          countperpage: 12,
          pageno: 1,
          token:this.$token
        },
        tableData: [],
        currentPage4:1

      }
    },
    created(){
      this.getList();
    },
    methods: {
      getList() {
        this.$http.post('api/resshare/datacenter/mydownload',this.mysearch).then(res => {
          this.tableData = res.data.data.data;
          this.pageno = res.data.data.pageno;
          this.total = res.data.data.total;
          for(let i in this.tableData ){
            this.tableData[i].createtime = this.tableData[i].createtime.split('T')[0];
          }
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
      },
      handleSizeChange(){}, // 失去焦点事件
      handleCurrentChange(){}, // 获得焦点事件
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


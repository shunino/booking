<style>
  .mynews .el-table th>.cell{
    color: rgb(0, 168, 255);
  }
</style>
<template>
    <div class="mynews">
        <el-table
          :data="tableData"
          style="width: 100%;min-height: 700px;">
          <el-table-column
            label="新闻名称"
            prop="title"
            width="500"
          >
            <template slot-scope="scope">
              <span class="pointer" @click="goto(scope.row)">{{scope.row.title}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="作者"
            prop="author"
          >
          </el-table-column>
          <el-table-column
            label="上传时间"
            prop="createtime"
          >
          </el-table-column>
          <el-table-column
            label="来源"
            prop="sources"
          >
          </el-table-column>
        </el-table>
        <div class="block mt10">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageno"
            :page-size="mysearch.countperpage"
            layout="total, sizes, prev, pager, next, jumper"
            :total=total>
          </el-pagination>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'news',
    data() {
      return {
        mysearch:{
          //userid: this.$userId,
          searchKey: "",
          countperpage: 12,
          pageno: 1,
         // token:this.$token
        },
        total:1,
        pageno: 1,
        tableData: []
      }
    },
    mounted(){
     this.getList();
    },
    methods: {
      getList() {
        this.$http.post('api/resshare/maintain/listNews',this.mysearch).then(res => {
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
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.mysearch.pageno = val;
        this.getList();
        console.log(`当前页: ${val}`);
      },
      goto(row){
        this.$router.push({path:'/newsDetail',query:{id:row.id}});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mynews{
  width: 100%;
}
</style>

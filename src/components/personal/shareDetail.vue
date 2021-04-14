<style scoped>
.share-head{
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
}
.share-list{
  min-height: 600px;
}
  .list-div{
    display: flex;
    flex-direction: row;
    height: 150px;
    border:1px solid #E4E7ED;
  }
.list-div .list-img{
  height: 100%;
  width: 20%;
}
.list-con{
  padding: 10px;
  width: 80%;
}
  .list-con>div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
.list-con .con-center{
  height: 80px;
  display: flex;
  align-items: baseline;
  margin-top: 5px;
  text-indent: 10px;
  color: gray;
}
</style>
<template>
  <div class="per-share">
      <div class="share-head">
        <div>
            <el-button size="small">小型按钮</el-button>
          </div>
        <div>
          <el-input placeholder="请输入内容" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <div class="share-list mt20">
          <div class="list-div">
              <div class="list-img">
                <img style="width:100%;height: 100%;" src="../../../static/1.jpg">
              </div>
            <div class="list-con">
              <div class="con-top">
                <span>测试数据<span>[2019.06.02]</span></span>
                <span>1各文件，共45.0kb</span>
              </div>
              <div class="con-center">
                dfdsfdsfdsfdsfdsfs
              </div>
              <div>
                <span>dsfdsfdsfx需要<b>1</b>积分</span>
                <span>
                    <el-button size="mini" round>删除共享</el-button>
                  <el-button size="mini" round>查看</el-button>
                </span>
              </div>
            </div>
          </div>
      </div>
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
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


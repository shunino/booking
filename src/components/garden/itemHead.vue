<style scoped>
  .data-head{
    border: 1px solid #E4E4E4;
    border-top:3px solid #BDDFE8;
    font-size: 14px;
  }
  .head-top{
    background: #F2F2F2;
    display: flex;
    height: 50px;
    display: flex;
    align-items: center;
  }
  .head-top>span{
      display: inline-block;
     margin-left: 10px;
  }
  .head-bottom{
    display: flex;
    height: 50px;
    align-items: center;
  }
  .head-bottom>span{
    display: inline-block;
    border-right: 1px solid gray;
    padding: 0px 15px;
  }
</style>
<style>
  .data-head .el-input__inner{
    width: 150px;
    height: 30px;
  }
  .data-head .data-haed-fan .el-input__inner{
    width: 300px;
    height: 30px;
    padding: 0px;
    padding-left: 5px;
  }
</style>
<template>
  <div class="data-head">
      <div class="head-top">
        <span>数据检索：</span>
        <span><el-input v-model="input" placeholder="请输入内容"></el-input></span>
        <span>数据时间范围：</span>
        <span class="data-haed-fan"> <el-date-picker
          v-model="value6"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker></span>
        <span><el-button size="mini">搜索</el-button></span>
        <span><el-button size="mini">重置</el-button></span>
      </div>
      <div class="head-bottom">
        <span>排序：<span style="color:#FF0D01 ;">相关度</span></span>
        <span>访问量</span>
        <span>最新更新时间</span>
        <span><el-checkbox v-model="checked">近显示可在线下载数据</el-checkbox></span>
        <span style="border-right: none"> <el-checkbox v-model="checked">备选项</el-checkbox></span>
        <span style="border-right: none;margin-left: 30px;">共<span style="color:#FF0D01 ;">362</span>条数据</span>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        input:'',
        value6: '',
        checked:true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


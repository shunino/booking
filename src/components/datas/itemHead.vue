<style scoped>
  .data-head{
    border: 1px solid #E4E4E4;
    border-top:3px solid #426EFF;
    font-size: 14px;
  }
  .head-top{
    background: #F2F2F2;
    display: flex;
    height: 66px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .head-top .head-div{
    display: flex;
    padding-left: 10px;
    width: 100%;
    height: 50%;
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
<!--        <div class="head-div">-->
<!--          <span>关键词检索：</span>-->
<!--          <span><el-input size="small"   v-model="form.themes" placeholder="请输入内容"></el-input></span>-->
<!--          <span style="margin-left: 30px;">地区查询：</span>-->
<!--          <span><el-input  size="small" v-model="form.location" placeholder="请输入内容"></el-input></span>-->
<!--        </div>-->
        <div class="head-div">
          <span>关键词检索：</span>
          <span><el-input size="small"   v-model="form.themes" placeholder="请输入内容"></el-input></span>
          <span style="margin-left: 10px;">数据时间范围：</span>
          <span class="data-haed-fan"> <el-date-picker
            style="width: 400px;"
            v-model="form.date"
            type="datetimerange"
            value-format="yyyy-MM-dd HH:mm:ss"
            format="yyyy-MM-dd HH:mm:ss"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions0"
            size="small">
        </el-date-picker></span>
          <span style="margin-left: 10px;"><el-button @click="toSearch()" size="mini">搜索</el-button></span>
          <span style="margin-left: 10px;"><el-button @click="reset()" size="mini">重置</el-button></span>
        </div>
      </div>
<!--      <div class="head-bottom">-->
<!--        <span>排序：<span style="color:#FF0D01 ;">相关度</span></span>-->
<!--        <span>访问量</span>-->
<!--        <span>最新更新时间</span>-->
<!--        <span><el-checkbox v-model="checked">近显示可在线下载数据</el-checkbox></span>-->
<!--        <span style="border-right: none"> <el-checkbox v-model="checked">备选项</el-checkbox></span>-->
<!--        <span style="border-right: none;margin-left: 30px;">共<span style="color:#FF0D01 ;">{{total}}</span>条数据</span>-->
<!--      </div>-->
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() > Date.now() - 8.64e6;//如果没有后面的-8.64e6就是不可以选择今天的
          }
        },
        form:{
          themes:'',
          date: null
        },
        checked:true
      }
    },
    props:['total'],
    methods:{
      toSearch(){
        this.$emit('search',this.form);
      },
      reset(){
        this.form.themes = '';
        this.form.date = null;
        this.$emit('search',this.form);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


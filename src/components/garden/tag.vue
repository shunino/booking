<style scoped>
  .data-tag{
      display: flex;
      height: 100px;
  }
  .data-tag .tag-left{
      width: 20%;
      background: #F2F2F2;
      display: flex;
      align-items: center;
      justify-content: flex-end;
  }
  .data-tag .tag-center{
    display: flex;
    align-items: center;
    width: 75%;
  }
  .data-tag .tag-right{
    width: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .data-tag .tag-button{
    margin-left: 10px;
    min-width: 80px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border:1px solid #F2F2F2;
  }
</style>
<template>
  <div class="data-tag">
    <div class="tag-left">
        主题间：
    </div>
    <div class="tag-center">
        <span class="tag-button">全部</span>
        <span class="tag-button">凯撒的</span>
    </div>
    <div class="tag-right">
      <span class="el-icon-caret-bottom">更多</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


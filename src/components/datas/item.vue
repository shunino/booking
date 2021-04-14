<template>
  <div class="data-item">
      <div class="img-box" @click="goto(mydata.id)">
        <img style="width:270px;height:270px;" :src="$URL+'/file/'+mydata.cover">
      </div>
    <div class="title mt10 ml10" :title="mydata.name">
      {{mydata.name}}
    </div>
    <div class="num mt10 ml10">
      数据量 约{{mydata.filesize}}
    </div>
    <div class="school mt10 ml10">
      {{mydata.location}}
    </div>
    <div class="handle mt10 ml10">
      <span class="handle-button" @click="goto(mydata.id)">查看数据</span>
         <span class="handle-button" @click="restore(mydata.id)">收藏数据</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
    props:['mydata'],
    mounted(){

    },
    methods:{
      goto(id){
        this.$router.push({path:'/DatasDetail1',query:{id:id}});
      },
      restore(id){
        if(this.$userId==""){
          this.$message({
            message: '请先登录！',
            type: 'error'
          });
          return;
        }
        this.$http.post('api/resshare/datacenter/collect',{id:id,userid:this.$userId,token:this.$token}).then(res => {
          this.$message({
            message: '收藏成功！' ,
            type: 'success'
          });
        }).catch(err => {
          this.$message({
            message: '已经收藏过该数据！',
            type: 'error'
          });
          console.log(err)
        })
      }
    }
  }
</script>
<style scoped>
  .data-item{
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 300px;
    font-size: 13px;
    margin-left: 20px;
    cursor: pointer;
  }
  .data-item .img-box{
    display: flex;
    align-items: center;
    justify-content: center;
    border:1px solid #E4E7ED;
    height: 300px;
    margin-top: 10px;
    margin-left: 10px;
  }
  .data-item .title{
    color: #00A8FF;
    height: 17px;
    overflow: hidden;
  }
  .data-item .num{

  }
  .data-item .school{

  }
  .data-item .handle{
    display: flex;
    justify-content: space-between;
  }
  .data-item .handle-button{
    width: 70px;
    height: 25px;
    line-height: 25px;
    border: 2px solid #BBEAF6;
    text-align: center;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


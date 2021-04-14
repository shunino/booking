<style scoped>
.ga-img{
  width: 100%;
  height: 100%;
  display: flex;
}
  .img-box{
    width: 40%;
    height: 100%;
  }
  .img-text{
    width:59%;
    margin-left: 1%;
    text-align: left;
    display: flex;
    flex-direction: column;
  }
.mydes{
  /* height: 77px; */
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  /* width: 200px; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  text-indent: 20px;
  color: gray;
}
.mydes1{
  /* height: 77px; */
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  /* width: 200px; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  text-indent: 20px;
  color: gray;
}
</style>
<template>
  <div class="ga-img pointer" @click="goto(mydata.id)">
     <div class="img-box">
       <img style="width:100%;height:100%;" :src="$URL+'/file/'+mydata.cover">
     </div>
    <div class="img-text">
      <div style="height: 90%;">
        <div style="color:#426DFE; font-weight: bold;">{{mydata.name}}</div>
        <div v-show="small" class="mt10 mydes">
         {{mydata.des}}
        </div>
        <div v-show="!small" class="mt10 mydes1">
          {{mydata.des}}
        </div>
      </div>
      <div style="color: rgb(0, 168, 255);">{{mydata.address}}<span class="el-icon-location"></span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        small:null
      }
    },
    props:['mydata','type'],
    mounted(){
      if(this.type=='1'){
        this.small= true;
      } else{
        this.small= false;
      }
    },
    methods:{
      goto(id){
        this.$router.push({path:'/gardenDetail',query:{id:id}});
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


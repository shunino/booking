<template>
    <el-carousel height="100%" class="mycarrousel" trigger="click" :autoplay="true">
      <el-carousel-item class="pointer car" v-for="i in tableData" >
        <!-- <span class="txt">{{i.title}}</span> -->
        <img :src="$URL+'/file/'+i.newsimg" @click="goto(i.id)">
      </el-carousel-item>
    </el-carousel>
</template>

<script>
  export default {
    name: 'carousel',
    data () {
      return {
          tableData:[],
          mysearch:{
            searchKey: "",
            countperpage: 3,
            pageno: 1,
          },
        }
    },
    mounted(){
      this.getList();
    },
    methods:{
      getList() {
        this.$http.post('api/resshare/maintain/listNews',this.mysearch).then(res => {
          this.tableData = res.data.data.data;
        }).catch(err => {
          console.log(err)
        })
      },
      goto(id){
        this.$router.push({path:'/newsDetail',query:{id:id}});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
<style scoped>
  .mycarrousel{
    width: 500px;
  }
  .mycarrousel img{
      width: 100%;
      height:100%;
  }
 /* .car{
    width: 100%;
    height: 100%;
    position: relative;
  }*/
  .txt{
    position: absolute;
    top:5px;
    left: 0px;
    color:black;
    width: 100%;
    text-align: center;  
  }
</style>

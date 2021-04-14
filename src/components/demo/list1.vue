<template>
    <div class="mydemo">
      <div class="demo-head">
          <span class="ml10 xin">专题展示</span>
           <span @click="$commonGo('/show')" class="mya">查看更多<span class="ml10 el-icon-circle-plus-outline
"></span></span>
         <!--  <span class="mr10 pointer mya" @click="$commonGo('/show')">更多>></span> -->
      </div>
      <div class="demo-content">
          <div  v-for="i in tableData" class="demo-list pointer" @click=goto(i.mapservice,i.id,i.imageparams,i.imageheight,i.imagewidth,i.coverlayerflag)>
            <el-image
              style="width: 100%; height: 200px"
              :src="$URL+'/file/'+i.cover"
              >
            </el-image>
            <div class="center mt10">{{i.name}}</div>
          </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'demo',
    data () {
      return {
        mysearch:{
          searchKey: "",
          countperpage: 8,
          pageno: 1,
        },
        tableData:[]
      }
    },
    mounted () {
      this.getList();
    },
    methods:{
      getList() {
        this.$http.post('api/resshare/maintain/listSpecial',this.mysearch).then(res => {
          this.tableData = res.data.data.data;
          for(let i in tableData ){
          }
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
      },
      goto(link,id,imageparams,height,width,coverlayerflag){
       // console.log(link);
       // if(this.type==5){
         // this.$router.push({path:'/gardenDetail',query:{id:id}});
      //  } else {
     
          this.$router.push({path:'/olmap',query:{id:id}});
          //window.open(link);
        //}
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .demo-head{
    width:100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: black;
    border-bottom: 2px solid #A5A5A5;
    justify-content: space-between;
  }
  .demo-head .xin{
    color: black;
    font-weight: bold;
    font-size: 20px;
  }
  .demo-head .xin{
    font-size: 20px;
  }
  .demo-content{
    display: flex;
    width: 99.8%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-bottom: 30px;
  }
  .demo-list{
    display: flex;
    flex-direction: column;
    width:24%;
    margin-top: 20px;
  }
</style>

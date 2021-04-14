<style scoped>
  .mylist{
    height: 100%;
    color: gray;
  }
  .list-head{
    width:100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: black;
    border-bottom: 2px solid #A5A5A5;
    justify-content: space-between;
  }
  .list-content{
    display: flex;
    width: 100%;
  }
  .list-content .list-ul{
    width: 100%;
    padding-bottom: 10px;
  }
</style>
<template>
    <div class="mylist">
      <div class="list-head mb10">
        <span  class="xin">{{title}}</span>
        <span @click="$commonGo('/datas')" class="mya">查看更多<span class="ml10 el-icon-circle-plus-outline
"></span></span>
      </div>
      <div class="list-content">
        <ul class="list-ul" style="overflow:auto">
          <li v-for="i in mydata" class="list-li" @click="goto(i.id)">
            <span class="span4" :title="i.name"><img src="../../assets/vnew/san.png" /> {{i.name}}</span>
            <span class="span1">{{i.createtime}}</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import Carousel from '@/components/home/carousel'
  export default {
    name: 'list',
    components: {
      'carousel': Carousel,
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        data:[],
        tableData:[],
        mysearch:{
          searchKey: "",
          countperpage: 8,
          pageno: 1,
        },
      }
    },
    props:['title','mydata'],
    mounted(){
     // this.getList();
    },
    methods:{
      getList() {
        this.$http.post('api/resshare/maintain/listNews',this.mysearch).then(res => {
          this.tableData = res.data.data.data;
          this.pageno = res.data.data.pageno;
          this.total = res.data.data.total;
          debugger;
          for(let i in this.tableData ){
            this.tableData[i].createtime = this.tableData[i].createtime.split('T')[0];
          }
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
      },
      goto(id){
        this.$router.push({path:'/DatasDetail1',query:{id:id}});
        //this.$router.push({path:'/newsDetail'});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .licon{

  }
  .mylist{
    height: 100%;
    color: gray;
  }
  .list-head{
    width:100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: black;
    border-bottom: 2px solid #A5A5A5;
    justify-content: space-between;
  }
  .list-head .xin{
    color: black;
    font-weight: bold;
    font-size: 20px;
  }
  .list-li{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 7px;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    justify-content: space-between;
  }
  .list-li .span1{
  }
  .list-li .span2{
  }
  .list-li .span3{
  }
  .list-li .span4{
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>

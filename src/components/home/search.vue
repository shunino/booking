<style scoped>
  .mytop{
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../../assets/vnew/sbg.png") no-repeat;
    background-size:cover;
  }
  .sdv{
    width: 720px;
    height: 60px;
    display: flex;
    position: relative;
  }
  .sdv .sinpit{
    width: 90%;
    height: 100%;
  }
  .sdv .sinpit input{
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    border-width: 0px;
    font-size: 18px;
    text-indent: 20px;
    color: #7C7C7C;
    background: rgba(255,255,255,1);
    border: 1px solid rgba(36,55,149,1);
    opacity: 0.8;
  }
  .sdv .sicon{
    width: 10%;
    height: 100%;
    background: #243795;  
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .s-result{
    width: 649px;
    min-height: 60px;
    max-height: 165px;
    position: absolute;
    top: 61px;
    background: #F5F7FC;
    border: 1px solid rgba(36,55,149,1);
    padding-bottom: 5px;
    overflow-y: auto;
  }
  .re-box{
    width: 94%;
    height: 100%;
    margin-left: 5%;
    margin-top: 1%;
  }
  .wre-box{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .re-box .title{
    width: 100%;
    text-indent: 10px;
    border-left: 2px solid #05469E;
    color: #000000;
    font-weight: bold;
  }
  .re-box .list{
    width: 100%;
    margin-top:10px;
  }
  .re-box .list div{
    margin-top:5px;
    cursor: pointer;
  }
</style>
<template>
       <div class="mytop">
          <div class="sdv">
            <div class="sinpit"><input v-on:keyup="search()" v-model="searchinput" placeholder="请输入你想要搜索的内容" type="" name=""></div>
            <div class="sicon pointer" @click="search()">
              <img src="../../assets/vnew/search.png">
            </div>
            <div class="s-result" v-if="hasxia">
              <div class="re-box" v-if="newData.length!=0">
                <div class="title">新闻动态</div>
                <div class="list">
                  <div @click="goto(1,i.dataid)" v-for="i in newData">{{i.name}}</div>
                </div>
              </div>
              <div class="re-box" v-if="mydata.length!=0">
                <div class="title">数据中心</div>
                <div class="list">
                  <div @click="goto(2,i.dataid)" v-for="i in mydata">{{i.name}}</div>
                </div>
              </div>
              <div class="re-box" v-if="showData.length!=0">
                <div class="title">专题展示</div>
                <div class="list">
                  <div @click="goto(3,i.dataid)" v-for="i in showData">{{i.name}}</div>
                </div>
              </div>
              <div class="wre-box" v-if="!hasData">
                暂时无搜索结果！
              </div>
            </div>
          </div>
       </div>
</template>

<script>
  $(function () {

  })
export default {
  name: 'Head',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      searchinput:'',
      hasxia:false,
      hasData:false,
      newData:[],
      mydata:[],
      showData:[]
    }
  },
  watch: {
    '$route' (to, from) {
      this.init();
      this.search();
    },
  },
  mounted(){
  },
  methods:{
    getKey()
    {
       this.$router.push({path:'/datas',query:{key:this.searchinput}});
    },
    init(){
      this.searchinput = "";
    },
    search(){
        this.newData=[];
        this.mydata=[];
        this.showData=[];
        if(this.searchinput==""){
            this.hasxia = false;
            return;
        } else {
            this.hasxia = true;
        } 
        this.$http.post('api/resshare/datacenter/listSearch',{searchKey:this.searchinput,token:this.$token}).then(res => {
          let myda = res.data.data;
          if(myda.length==0||this.searchinput==""){
            this.hasData = false;
            return;
          } else {
            this.hasData = true;
          }
          for(let i in myda ){
            if(myda[i].typename=="新闻动态") this.newData.push(myda[i])
            if(myda[i].typename=="数据中心") this.mydata.push(myda[i])
            if(myda[i].typename=="专题展示") this.showData.push(myda[i])
          }
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
    },
    goto(type,id){
        if(type==1){
          this.$router.push({path:'/newsDetail',query:{id:id}});
        } else if(type==2){
          this.$router.push({path:'/DatasDetail1',query:{id:id}});
        } else if(type==3){
          this.$router.push({path:'/olmap',query:{id:id}});
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


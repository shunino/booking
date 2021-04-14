<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .da-left{
    width: 19%;
    margin-right: 1%;
  }
  .da-center{
    width: 80%;
  }
  .left-bottom .bottom-head{
      text-align: left;
    border-bottom: 3px solid #426EFF;
    height: 35px;
    line-height: 30px;
    font-weight: bold;
    font-size: 20px;
  }
  .list-li>span{
    font-size: 13px !important;
    color: gray;
  }
  .wushu{
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
</style>
<template>
  <div class="commondiv">
    <div style="width: 95%;margin-top: 10px;display: flex">
        <div class="da-left" >
          <div class="left-top">
            <dataClass @search="toSearch"></dataClass>
          </div>
          <div class="left-bottom mt10">
              <div class="bottom-head">
                本类数据热度排行榜
              </div>
            <commonList :mydata="tableData1" type="data"></commonList>
          </div>
        </div>
        <div class="da-center" >
          <div class="center-top">
            <dataTag  @search="toSearch" ></dataTag>
          </div>
          <div class="center-bottom mt10">
            <dataItemHead @search="toSearch" :total="total"></dataItemHead>
            <div style="display: flex;flex-wrap: wrap;margin-left:-20px;">
              <div v-if="tableData.length==0" class="wushu">暂时无数据！</div>
              <dataItem :mydata="i"  v-for="i in tableData"></dataItem>
            </div>
            <div class="block mt10">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="mysearch.pageno"
                layout="total, prev, pager, next, jumper"
                page-size="6"
                :total=total>
              </el-pagination>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import Head from '@/components/home/Head'
  import Carousel from '@/components/home/carousel'
  import Rank from '@/components/home/rank'
  import Footer from '@/components/home/footer'

  import Table from '@/components/news/table'
  import List from '@/components/news/list'
  import NewDetail from '@/components/news/detail'

  import DemoList from '@/components/demo/list'

  import CommonList from '@/components/common/list1'

  import DataItem from '@/components/datas/item'
  import DataTag from '@/components/datas/tag'
  import DataClass from '@/components/datas/class'
  import DataItemHead from '@/components/datas/itemHead'
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        tableData1:[],
        tableData:[],
        mysearch:{
          searchWrap:{
            status:2
          },
          countperpage: 6,
          pageno: 1,
        },
        total:1,
        mysearch1:{
          sort:2,
          total:10,
        },
      }
    },
    mounted(){
      $('.head-left').find('span').removeClass('cur');
      $('#datas').addClass('cur');
      $('#mysearch').hide();
      this.getList();
      this.getList1();
      if(this.$route.query.key){
          let kob = {themes:this.$route.query.key};
          this.toSearch(kob);
      }  
    },
    methods:{
      toSearch(con){
        console.log(con);
        this.mysearch.searchWrap['searchKey'] = con.themes;
        this.mysearch.searchWrap['topic'] = con.topic;
        if(con.type1){
          if(con.type2=='wu'){
            this.mysearch.searchWrap.type1 = con.type1;
            this.mysearch.searchWrap.type2 = null;
          } else {
            this.mysearch.searchWrap.type1 = con.type1;
            this.mysearch.searchWrap.type2 = con.type2;
          }
        }
        if(con.date){
          this.mysearch.searchWrap.starttime = con.date[0];
          this.mysearch.searchWrap.endtime =con.date[1];
        } else{
          this.mysearch.searchWrap.starttime = null;
          this.mysearch.searchWrap.endtime = null;
        }
        this.getList();
      },
      getList1() {
        this.$http.post('api/resshare/datacenter/listBySort',this.mysearch1).then(res => {
          this.tableData1 = res.data.data;
          for(let i in this.tableData1 ){
            if(this.tableData1[i].name=="一个数据") this.tableData1[i].name = "贵州省水土保持规划（2012-2020年)";
            this.tableData1[i].createtime = this.tableData1[i].createtime.split('T')[0];
          }
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.mysearch.pageno = val;
        this.getList();
        console.log(`当前页: ${val}`);
      },
      getList() {
        this.$http.post('api/resshare/datacenter/list',this.mysearch).then(res => {
          this.tableData = res.data.data.data;
          this.pageno = res.data.data.pageno;
          this.total = res.data.data.total;
          for(let i in this.tableData ){
            this.tableData[i].createtime = this.tableData[i].createtime.split('T')[0];
          }
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
      },
    },
    components: {
      'myhead': Head,
      'carousel': Carousel,
      'rank': Rank,
      'myfooter': Footer,
      'newstable': Table,
      'mylist': List,
      'demoList': DemoList,
      'commonList': CommonList,
      'newDetail': NewDetail,
      'dataItem': DataItem,
      'dataTag': DataTag,
      'dataClass': DataClass,
      'dataItemHead': DataItemHead
    }
  }
</script>



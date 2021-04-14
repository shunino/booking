<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .po-head{
    height: 40px;
    line-height: 40px;
    background: #EEEEEE;
    color: #85909F;
    padding-left: 10px;
    font-size: 16px;
    text-align: left;
  }
  .po-list{
      text-align: left;
  }
  .po-list ul{

  }
  .po-list ul li{
        display: flex;
    margin-top: 10px;
    color: gray;
    justify-content: space-between;
  }
  .po-list ul li .pot{
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #828282;
    display: inline-block;
  }
  .po-head1{
    width:100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    background: #E6EEFB;
    border-left: 3px solid #416EFF;
  }
</style>
<template>
  <div>
    <div v-if="mylittle">
        <div class="po-head1"><span class="ml10">科技推广</span>
        <span class="mr10 pointer" @click="$commonGo('/popular')">更多</span>
        </div>
        <div class="po-list mt20" style="">
          <ul>
            <li class="pointer" @click="goto(item)" v-for="(item,i) in tableData" v-if="i<4" >
              <div style="display: flex;align-items: center">
                <span class="pot ml10 mr10"></span>
                <span>{{item.title}}</span>
              </div>
              <div>
                {{item.createtime}}
              </div>
            </li>
            <li v-if="tableData.length==0">
              <div style="display: flex;align-items: center">
                <span class="pot ml10 mr10"></span>
                <span>暂时无数据！</span>
              </div>
              <div>

              </div>
            </li>
          </ul>
        </div>
    </div>
    <div v-if="!mylittle" class="commondiv" :style="'minHeight:'+myheight">
      <div style="width: 95%;margin-top: 10px;min-height: 700px;">
        <div class="po-head">科技推广</div>
        <div class="po-list mt20" style="">
          <ul>
            <li class="pointer" @click="goto(i)" v-for="i in tableData">
              <div style="display: flex;align-items: center">
                <span class="pot ml10 mr10"></span>
                <span>{{i.title}}</span>
              </div>
              <div>
                {{i.createtime}}
              </div>
            </li>
            <li v-if="tableData.length==0">
              <div style="display: flex;align-items: center">
                <span class="pot ml10 mr10"></span>
                <span>暂时无数据！</span>
              </div>
              <div>

              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="block mt10">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="mysearch.pageno"
          layout="total, prev, pager, next, jumper"
          :page-size="mysearch.countperpage"
          :total=total>
        </el-pagination>
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

  import CommonList from '@/components/common/list'

  import DataItem from '@/components/datas/item'
  import DataTag from '@/components/datas/tag'
  import DataClass from '@/components/datas/class'
  import DataItemHead from '@/components/datas/itemHead'
  export default {
    name: 'Home',
    data () {
      return {
        mylittle:false,
        mysearch:{
          //userid: this.$userId,
          searchKey: "",
          countperpage: 22,
          pageno: 1,
          //token:this.$token
        },
        total:1,
        pageno: 1,
        tableData: [],
        myheight:'auto'
      }
    },
    props:['little'],
    mounted(){
            $('#mysearch').hide();
      if(this.little){
        this.mylittle = true;
      }
      let win =  window.innerHeight;
      let he = win - 260 +'px';
      this.myheight = he;
      $('.head-left').find('span').removeClass('cur');
      $('#popular').addClass('cur');
      this.getList();
    },
    methods: {
      getList() {
        this.$http.post('api/resshare/maintain/listTechnology',this.mysearch).then(res => {
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
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.mysearch.pageno = val;
        this.getList();
        console.log(`当前页: ${val}`);
      },
      goto(row){
        this.$router.push({path:'/popularDetail',query:{id:row.id}});
      }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

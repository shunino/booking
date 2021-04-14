<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .new-detail{
    display: flex;
    border-top:3px solid #60BFD8;
    width: 96%;
    padding-top: 30px;
    margin-top: 20px;
  }
  .new-detail .left{
    width: 79%;
    margin-left: 1%;
    display: flex;
    text-align: left;
    flex-direction: column;
    font-size: 16px;
  }
  .new-detail .left>div{
    margin-top: 20px;
  }
  .new-detail .left .title{
    font-size: 20px;
    color: #60BFD8;
  }
  .new-detail .left .attribute{
    font-size: 14px;
    color: gray;
  }
  .new-detail .left .ctxt{
    font-size: 16px;
    font-weight: bold;
  }
  .new-detail .right{
    width: 18%;
    margin-left: 1%;
    margin-right: 1%;
  }
  .news-head{
    text-align: left;
    border-bottom: 3px solid #60BFD8;
    height: 30px;
    line-height: 30px;
    font-weight: bold;
  }

</style>
<style>
  .fujian .el-table th{
    background: #CCCCCC;
    color: black;
  }
  .benshu .el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed{
    border-right: 0px solid #EBEEF5;
  }
  .benshu .el-table thead{
    display: none;
  }
</style>
<template>
  <div class="commondiv">
    <div class="new-detail">
      <div class="left">
        <div class="title" style="margin-top: 0px;">{{mydata.name}}</div>
        <div class="attribute">数据贡献者：{{mydata.username}}
<!--          ({{dataUser.company}})-->
        </div>
        <div>
<!--          <img src="../assets/22.png">-->
        </div>
        <div class="ctxt">上传时间：{{mydata.createtime}}</div>
        <div class="ctxt">主题词：{{mydata.themes}} </div>
        <div class="ctxt"><span>数据分类体系：	{{$STATE[mydata.type1-1].head}}</span> <span style="margin-left: 200px;">位置区别：{{mydata.location}}</span></div>
        <div class="ctxt" style="display: flex;">
          <div>数据描述：</div>
          <div style="width: 808px;margin-left: 10px;">{{mydata.datades}}</div>
        </div>
        <div class="ctxt" >
          <div>数据使用声明</div>
          <div class="mt20" style="width: 808px;font-weight: 400;text-indent: 20px;">为尊重知识产权、保障数据贡献者和服务者的权益，请数据使用者在基于本数据所产生的研究成果（包括项目评估报告、验收报告，以及学术论文或毕业论文等） 中标注数据来源，并按照[文献引用方式]标注需引用的参考文献。</div>
            <div style="width: 808px;font-weight: 400;text-indent: 20px;"> 数据来源引用参考以下规范：贵州水土保持-数据共享中心</div>
            <div style="width: 808px;font-weight: 400;text-indent: 20px;">  致谢方式参考以下规范：“感谢贵州水土保持-数据共享中心提供数据支撑”。</div>
        </div>
        <div class="ctxt" >
          <div>法律责任</div>
          <div class="mt20" style="width: 808px;font-weight: 400;text-indent: 20px;">· 本平台对其发布的或数据贡献者贡献的数据产品或服务及平台上发布的相关信息的全部内容拥有版权等知识产权，受法律保护。</div>
          <div  style="width: 808px;font-weight: 400;text-indent: 20px;">· 未经本平台书面许可，任何单位及个人不得以任何方式或理由对上述数据产品、服务、信息、材料的任何部分进行复制、修改、抄录、传播及销售。</div>
              <div  style="width: 808px;font-weight: 400;text-indent: 20px;"> · 凡侵犯本平台版权等知识产权的，本平台必依法追究其法律责任，特此郑重声明！</div>
        </div>
        <div class="ctxt fujian">
          <div class="news-head">数据附件</div>
          <el-table
            :data="tableData"
            stripe
            border
            class="mt20"
            style="width: 100%">
            <el-table-column
              prop="filename"
              label="文件名"
             >
            </el-table-column>
            <el-table-column
              prop="size"
              label="文件大小"
              >
            </el-table-column>
            <el-table-column
              label="操作">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  size="small"
                  @click="down(scope.row.fileid)"
                >
                  下载
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
<!--        <div class="ctxt benshu">-->
<!--          <div class="news-head">使用本数据的用户</div>-->
<!--          <el-table-->
<!--            :data="tableData1"-->
<!--            border-->
<!--            class="mt20"-->
<!--            style="width: 100%">-->
<!--            <el-table-column-->
<!--              prop="name"-->
<!--              label="名字"-->
<!--            >-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--              prop="colleage"-->
<!--              label="大学"-->
<!--            >-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--              prop="explain"-->
<!--              label="解释"-->
<!--            >-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--              prop="date"-->
<!--              label="时间"-->
<!--            >-->
<!--            </el-table-column>-->
<!--          </el-table>-->
<!--          <el-pagination-->
<!--            small-->
<!--            style="margin-top: 10px;margin-left: -10px;"-->
<!--            layout="prev, pager, next"-->
<!--            :total="50">-->
<!--          </el-pagination>-->
<!--&lt;!&ndash;          <el-pagination&ndash;&gt;-->
<!--&lt;!&ndash;            background&ndash;&gt;-->
<!--&lt;!&ndash;            layout="prev, pager, next"&ndash;&gt;-->
<!--&lt;!&ndash;            :total="1000"&ndash;&gt;-->
<!--&lt;!&ndash;            style="margin-top: 10px;margin-left: -10px;"&ndash;&gt;-->
<!--&lt;!&ndash;          >&ndash;&gt;-->
<!--&lt;!&ndash;          </el-pagination>&ndash;&gt;-->
<!--        </div>-->
      </div>
      <div class="right">
          <div class="roursel">
            <el-image
              style="width: 100%;height: 200px;"
              :src="$URL+'/file/'+mydata.cover"
              :preview-src-list="[$URL+'/file/'+mydata.cover]"
            >
            </el-image>
          </div>
          <div class="newlist mt20">
            <div class="news-head">相关数据资源</div>
            <mylist :mydata="tableData1"  type="data"></mylist>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Carousel from '@/components/home/carousel'
  import List from '@/components/common/list1'
  export default {
    name: 'rank',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        mydata:{},
        tableData:[],
        tableData1:[],
        data1:[],
        dataUser:{},
        mysearch1:{
          sort:2,
          total:10,
        },
      }
    },
    watch: {
      '$route' (to, from) {
        this.init();
      },
    },
    mounted(){
    this.init();
    },
    methods:{
      init(){
         $('#mysearch').hide();
        this.getDetail(this.$route.query.id);
        this.getList1();
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
      getUser(id){
        this.$http.post('api/resshare/user/getUserById',{
          userid:id,
          token:this.$token
        }).then(res => {
          this.dataUser = res.data.data;
          console.log(res);
        }).catch(err => {
          console.log(err)
        });
      },
      getDetail(id){
        this.$http.post('api/resshare/datacenter/info',{id:id,token:this.$token}).then(res => {
          this.mydata = res.data.data;
          this.mydata.createtime =  this.mydata.createtime.split('T')[0];
          this.tableData = this.mydata.filelist;
           for(let i in this.tableData ){
            let mysize = this.tableData[i].size;
            let tsize;
            if(mysize<1204) tsize = mysize+'字节';
            else if((mysize/1024) < 1024) tsize = Math.ceil((mysize/1024)) +'KB';
            else if((mysize/1024/1024) < 1024) tsize = Math.ceil((mysize/1024/1024))+'MB';
            else if((mysize/1024/1024) > 1024) tsize = Math.ceil((mysize/1024/1024/1024)) +'GB';;
            this.tableData[i].size = tsize;
          }
          this.getUser(this.mydata.userid);
        }).catch(err => {
          console.log(err)
        })
      },
      down(id){
        if(this.$userId==""){
          this.$message({
            message: '请先登录！',
            type: 'error'
          });
          return;
        }
        this.$http.post('api/resshare/datacenter/download',{id:this.$route.query.id,userid:this.$userId,token:this.$token}).then(res => {
          this.$down(id);
        }).catch(err => {
          console.log(err)
        })
      }
    },
    components: {
      'carousel': Carousel,
      'mylist': List,
    }
  }
</script>



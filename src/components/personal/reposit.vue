<style scoped>
  .share-head{
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
  .share-list{
    min-height: 600px;
  }
  .list-div{
    display: flex;
    flex-direction: row;
    height: 150px;
    border:1px solid #E4E7ED;
  }
  .list-div .list-img{
    height: 100%;
    width: 20%;
  }
  .list-con{
    padding: 10px;
    width: 80%;
  }
  .list-con>div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .list-con .con-center{
    height: 80px;
    display: flex;
    align-items: baseline;
    margin-top: 5px;
    text-indent: 10px;
    color: gray;
  }
</style>
<template>
  <div class="per-share">
    <div class="share-head" >
      <div>
<!--        <el-button @click="toupload('shareForm')" size="small">上传共享</el-button>-->
      </div>
      <div>
        <el-input placeholder="请输入内容" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <div class="share-list mt20">
      <div class="list-div" v-for="i in tableData">
        <div class="list-img">
          <img style="width:100%;height: 100%;" :src="$URL+'/file/'+i.cover">
        </div>
        <div class="list-con">
          <div class="con-top">
            <span>{{i.name}}<span>[{{i.createtime}}]</span></span>
            <span>{{i.filelist.length}}各文件，共{{i.filesize}}</span>
          </div>
          <div class="con-center">
            {{i.remark}}
          </div>
          <div>
                <span>
<!--                  由 <b>蒙杨</b> 分享，下载需要 <b style="color: red;">1</b> -->
<!--                  积分，已经下载 <b>{{i.downnum}}</b> 次-->
                </span>
            <span>
                    <el-button size="mini" round @click="handleDelete(i.id)">取消收藏</el-button>
                  <el-button size="mini" round @click="goto(i.id)">查看</el-button>
                </span>
          </div>
        </div>
      </div>
      <div v-if="tableData.length==0">
        当前并无收藏！
      </div>
    </div>
    <div class="mt20" style="text-align: right;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    props:['upload'],
    data(){
      return{
        mysearch:{
          userid:this.$userId,
          countperpage: 12,
          pageno: 1,
          token:this.$token
        },
        tableData:[],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    mounted(){
      this.getList();
    },
    methods: {
      getList() {
        this.$http.post('api/resshare/datacenter/mycollect',this.mysearch).then(res => {
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
      handleDelete(id){
        let mysearch = {
          id:id/1,
          token:this.$token,
          userid:this.$userId,
        }
        this.$alert('确定取消收藏？', '确定', {
          confirmButtonText: '确定',
          callback: action => {
            action=='confirm' && this.$http.post('api/resshare/datacenter/cancel',mysearch).then(res => {
              this.getList();
              console.log(res);
            }).catch(err => {
              console.log(err)
            })
          }
        });
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      toupload(type){
        this.$emit('upload','shareForm');
      },
      goto(id){
        this.$router.push({path:'/DatasDetail1',query:{id:id}});
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


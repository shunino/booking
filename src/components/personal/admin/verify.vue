<style scoped>
  .myfirst{
    text-align: left;
    width: 800px;
  }
  .myfirst ul{
    list-style: inside;
  }
  .myfirst ul li{
    margin-top: 5px;
  }
  .myfirst>div{
    margin-top: 20px;
  }
</style>
<template>
  <div>
    <el-dialog
      title="查看"
      :visible.sync="dialogVisible"
      width="70%"
      >
      <div style="text-align: left;">
        <div>数据名称：{{form.name}}</div>
        <div class="mt10">数据贡献者：{{dataUser.username}}</div>
        <div class="mt10">上传时间：{{form.createtime}}</div>
        <div class="mt10">主题词：{{form.themes}}</div>
        <div class="mt10">数据分类体系：{{form.type1}}</div>
        <div class="mt10">位置区别：{{form.location}}</div>
        <div class="mt10">数据描述：</div>
        <div style="text-indent: 20px;">
          {{form.datades}}
        </div>
        <div class="ctxt fujian mt10">
          <div class="news-head">数据附件</div>
          <el-table
            :data="tableData1"
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
      </div>
      <div slot="footer" class="dialog-footer" v-if="form.status==1">
        <el-button type="primary" size="small" @click="check(2)">审核通过</el-button>
        <el-button type="warning" size="small" @click="check(3)">审核不通过</el-button>
      </div>
    </el-dialog>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="数据列表" name="first" class="myfirst">
          <el-table
            :data="tableData"
            style="width: 100%;min-height: 700px;">
            <el-table-column
              label="数据名称"
              prop="name"
            >
            </el-table-column>
            <el-table-column
              label="上传时间"
              prop="createtime"
            >
            </el-table-column>
            <el-table-column
              label="状态"
            >
              <template slot-scope="scope">
                {{status[scope.row.status]}}
              </template>
            </el-table-column>
            <el-table-column
              label="位置区划"
              prop="location"
            >
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="primary"
                  @click="look(scope.row)">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="block mt10">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageno"
              layout="total, sizes, prev, pager, next, jumper"
              :total=total>
            </el-pagination>
          </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import Richtxt from '@/components/common/richtxt'
  export default {
    data() {
      return {
        dataUser:{},
        status:['','审核中','审核通过','审核不通过'],
        mysearch:{
          searchWrap:{
          },
          countperpage: 12,
          pageno: 1,

        },
        total:1,
        pageno: 1,
        dialogVisible:false,
        tableData: [],
        tableData1: [],
        activeName: 'first',
        form: {
        },
        rules:{
          title: [
            { required: true, message: '请输入标题名', trigger: 'blur' },
          ],
          author: [
            { required: true, message: '请输入作者名', trigger: 'blur' },
          ],
        },
      };
    },
    created(){
      this.getList();
    },
    methods: {
      getUser(id){
        this.$http.post('api/resshare/user/getUserById',{
          userid:id,
          token:this.$token
        }).then(res => {
          this.dataUser = res.data.data;
          console.log(res);
        }).catch(err => {
          this.$message({
                type: 'error',
                message: '权限已经到期！请重新登录'
              });
          console.log(err)
        });
      },
      down(id){
        this.$down(id);
      },
      check(status){
        let mysearch = {
          id:this.form.id,
          token:this.$token,
          status:status
        }
        this.$http.post('api/resshare/datacenter/check',mysearch).then(res => {
          this.$message({
            type: 'success',
            message: '操作成功！'
          });
          this.getList();
          this.dialogVisible = false;
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
      },
      look(row) {
        this.form = row;
        this.getUser(row.userid);
        this.tableData1 = row.filelist;
        this.dialogVisible = true;
      },
      getList() {
        this.$http.post('api/resshare/datacenter/list',this.mysearch).then(res => {
          this.tableData = res.data.data.data;
          this.pageno = res.data.data.pageno;
          this.total = res.data.data.total;
          for(let i in this.tableData ){
            if(this.tableData[i].createtime)
            this.tableData[i].createtime = this.tableData[i].createtime.split('T')[0];
          }
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
      },
      handleDelete(id){
        let mysearch = {
          id:id,
          token:this.$token
        }
        this.$alert('确定删除？', '确定', {
          confirmButtonText: '确定',
          callback: action => {
            action=='confirm' && this.$http.post('api/resshare/maintain/deleteNews',mysearch).then(res => {
              this.getList();
              this.$message({
                type: 'success',
                message: '删除成功！'
              });
              console.log(res);
            }).catch(err => {
              console.log(err)
            })
          }
        });
      },
      handleEdit(row){
          this.form.title = row.title;
          this.form.author = row.author;
          this.form.sources = row.sources;
          this.form.id = row.id;
          this.$refs.myrich.init(row.contents);
          this.activeName='first';
      },
      handleClick(tab, event) {
        this.form.contents = '';
        this.form.title = '';
        this.form.author = '';
        this.form.sources = '';
        this.$refs.myrich.clearContent();
        this.form.id = null;
        this.getList();
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.mysearch.pageno = val;
        this.getList();
        console.log(`当前页: ${val}`);
      }
    },
    components: {
      'richtxt':Richtxt
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

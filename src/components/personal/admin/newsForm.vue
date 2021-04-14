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
    <div id="csmy">

    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="新闻上传" name="first" class="myfirst">
        <div>
          <el-form :rules="rules" ref="form" :model="form" label-width="80px">
            <el-form-item label="新闻名称" prop="title">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="作者" prop="author">
              <el-input v-model="form.author"></el-input>
            </el-form-item>
            <el-form-item label="来源">
              <el-input v-model="form.sources"></el-input>
            </el-form-item>
            <el-form-item label="新闻封面" style="margin-top: 60px;" prop="newsimg">
              <el-upload
                class="avatar-uploader"
                :action="$URL+'/upload'"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="dialogImageUrl" :src="dialogImageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item  label="新闻详情">
                <richtxt ref="myrich" @toClick="getContent" ></richtxt>
            </el-form-item>
            
            <el-form-item>
              <el-button type="primary" @click="onSubmit">确定</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="新闻列表" name="second" class="myfirst">
          <el-table
            :data="tableData"
            style="width: 100%;min-height: 700px;">
            <el-table-column
              label="新闻名称"
              prop="title"
            >
            </el-table-column>
            <el-table-column
              label="作者"
              prop="author"
            >
            </el-table-column>
            <el-table-column
              label="上传时间"
              prop="createtime"
            >
            </el-table-column>
            <el-table-column
              label="来源"
              prop="sources"
            >
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.row.id)">删除</el-button>

                <el-button
                  size="mini"
                  type="primary"
                  @click="handleEdit(scope.row)">修改</el-button>
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
        mysearch:{
          searchKey: "",
          countperpage: 12,
          pageno: 1,
        },
        total:1,
        pageno: 1,
        tableData: [],
        activeName: 'first',
        dialogImageUrl:'',
        form: {
          title: '',
          contents: '',
          contenttype: '2',
          author: '',
          sources: '',
          newsimg:'',
          userid:this.$userId,
          token:this.$token,
          id:null
        },
        rules:{
          title: [
            { required: true, message: '请输入标题名', trigger: 'blur' },
          ],
          // author: [
          //   { required: true, message: '请输入作者名', trigger: 'blur' },
          // ],
          // newsimg: [
          //   { required: true, message: '请上次封面', trigger: 'blur' },
          // ],
        },
      };
    },
    created(){
    },
    methods: {
      handleAvatarSuccess(res, file) {
        //debugger;
        this.form.newsimg = res.data.fileid;
        this.dialogImageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
      },
      getContent(html) {
       this.form.contents = html;
      },
      onSubmit() {
        let self = this;
        this.form.contents =  this.$refs.myrich.getContent();
        this.$refs['form'].validate((valid) => {
          if (valid) {
            self.$http.post('api/resshare/maintain/addOrUpdateNews',{ "news":self.form,token:this.$token}).then(res => {
              self.$alert('操作成功!', '操作', {
                confirmButtonText: '确定',
                callback: action => {
                  this.activeName='second';
                  this.getList();
                }
              });
              this.form.contents = '';
              this.form.title = '';
              this.form.author = '';
              this.form.sources = '';
              this.form.id = null;
              this.form.newsimg = '';
              this.dialogImageUrl = '';
              this.$refs.myrich.clearContent();
              console.log(res);
            }).catch(err => {
              this.$message({
                type: 'error',
                message: '权限已经到期！请重新登录'
              });
              console.log(err)
            })
          }
        });
      },
      getList() {
        this.$http.post('api/resshare/maintain/listNews',this.mysearch).then(res => {
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
          this.form.newsimg = row.newsimg;
          this.dialogImageUrl = this.$URL+'/file/'+row.newsimg;
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

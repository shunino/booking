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
      <el-tab-pane label="数据上传" name="first" class="myfirst">
        <div>
          <el-form :rules="rules" ref="form" :model="form" label-width="80px">
            <el-form-item label="数据名称" prop="title">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="作者" prop="author">
              <el-input v-model="form.author"></el-input>
            </el-form-item>
            <el-form-item  label="数据详情">
              <richtxt ref="myrich" @toClick="getContent" ></richtxt>
            </el-form-item>
            <!--            <el-form-item label="图片" style="margin-top: 60px;">-->
            <!--              <el-upload-->
            <!--                action="http://222.85.224.95:9090/upload"-->
            <!--                list-type="picture-card"-->
            <!--                :on-preview="handlePictureCardPreview"-->
            <!--                :on-remove="handleRemove">-->
            <!--                <i class="el-icon-plus"></i>-->
            <!--              </el-upload>-->
            <!--              <el-dialog :visible.sync="dialogVisible" size="tiny">-->
            <!--                <img width="100%" :src="dialogImageUrl" alt="">-->
            <!--              </el-dialog>-->
            <!--            </el-form-item>-->

            <el-form-item>
              <el-button type="primary" @click="onSubmit">确定</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="上传目录" name="second" class="myfirst">
        <el-table
          :data="tableData"
          style="width: 100%;min-height: 700px;">
          <el-table-column
            label="数据名称"
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
          userid: this.$userId,
          searchKey: "",
          countperpage: 12,
          pageno: 1,
          token:this.$token
        },
        total:1,
        pageno: 1,
        tableData: [],
        dialogImageUrl: '',
        dialogVisible: false,
        activeName: 'first',
        form: {
          title: '',
          contents: '',
          contenttype: '2',
          author: '',
          sources: '',
          userid:this.$userId,
          token:this.$token,
          id:null
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
    },
    methods: {
      getContent(html) {
        this.form.contents = html;
      },
      onSubmit() {
        let self = this;
        this.form.contents =  this.$refs.myrich.getContent();
        this.$refs['form'].validate((valid) => {
          if (valid) {
            self.$http.post('api/resshare/maintain/addOrUpdateTechnology',{ "technology":self.form,token:this.$token}).then(res => {
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
      handleDelete(id){
        let mysearch = {
          id:id,
          token:this.$token
        }
        this.$alert('确定删除？', '确定', {
          confirmButtonText: '确定',
          callback: action => {
            action=='confirm' && this.$http.post('api/resshare/maintain/deleteTechnology',mysearch).then(res => {
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
        this.form.contents = row.contents;
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

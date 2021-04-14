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
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="专题上传" name="first" class="myfirst">
        <div>
          <el-form ref="form" :model="form" :rules="rules" label-width="108px">
<!--            <el-form-item label="专题类别" prop="typeflag">-->
<!--              <el-select v-model="form.typeflag" placeholder="请选择">-->
<!--                <el-option label="大数据专题" value="1"></el-option>-->
<!--                <el-option label="预防监督专题" value="2"></el-option>-->
<!--                <el-option label="综合治理专题" value="3"></el-option>-->
<!--              </el-select>-->
<!--            </el-form-item>-->
            <el-form-item label="专题名称" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="数据摘要" prop="summary">
              <el-input v-model="form.summary"></el-input>
            </el-form-item>
            <el-form-item label="图片上传" style="margin-top: 60px;" prop="cover">
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
            <el-form-item label="工具图片上传" style="margin-top: 60px;" prop="imageparams">
              <el-upload
                class="avatar-uploader"
                :action="$URL+'/upload'"
                :show-file-list="false"
                :on-success="handleAvatarSuccess1"
                :before-upload="beforeAvatarUpload">
                <img v-if="dialogImageUrl1" :src="dialogImageUrl1" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <!-- <el-form-item label="图层类型" prop="mapservice">
              <el-radio-group v-model="form.coverlayerflag">
                  <el-radio  label="0" >完整</el-radio>
                  <el-radio  label="1" >部分</el-radio>
              </el-radio-group>
            </el-form-item> -->
            <el-form-item label="工具图片宽度" prop="imagewidth">
              <el-input v-model="form.imagewidth"></el-input>
            </el-form-item>
            <el-form-item label="工具图片高度" prop="imageheight">
              <el-input v-model="form.imageheight"></el-input>
            </el-form-item>
             
            <el-form-item label="地图服务链接" prop="mapservice">
              <el-input v-model="form.mapservice"></el-input>
            </el-form-item>
            <!--  <el-form-item label="工具栏" prop="imageparams">
              <el-input v-model="form.imageparams"></el-input>
            </el-form-item> -->
            <el-form-item>
              <el-button type="primary" @click="onSubmit">确定</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="上传目录" name="second" class="myfirst">
        <div style="">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="专题名称"
              prop="name"
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
     //   type:1,
        mysearch:{
          userid: this.$userId,
          searchKey: "",
          countperpage: 12,
          pageno: 1,
          token:this.$token
        },
        total:1,
        pageno: 1,
        dialogImageUrl: '',
        dialogImageUrl1: '',
        dialogVisible: false,
        activeName: 'first',
        tableData: [],
        form: {
          coverlayerflag:'0',
          name: '',
          typeflag: '',
          cover: '',
          imageparams:'',
          summary:'',
          mapservice:'',
          userid:this.$userId,
          id:null,
          imageheight:'',
          imagewidth:''
        },
        rules:{
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
          ],
          // summary: [
          //   { required: true, message: '请输入数据摘要', trigger: 'blur' },
          // ],
          mapservice: [  
            { required: true, message: '请输入服务链接', trigger: 'blur' },
          ],
          // typeflag: [
          //   { required: true, message: '请选择类型', trigger: 'blur' },
          // ],
          cover: [
            { required: true, message: '请上传图片', trigger: 'blur' },
          ],
          // imageparams: [
          //   { required: true, message: '请上传工具栏图片', trigger: 'blur' },
          // ],
          // imageheight: [
          //   { required: true, message: '请上传工具栏图片高度', trigger: 'blur' },
          //   // { type: 'number', message: '必须为数字'}
          // ],
          // imagewidth: [
          //   { required: true, message: '请上传工具栏图片宽度', trigger: 'blur' },
          //   // { type: 'number', message: '必须为数字'}
          // ],
        },
      };
    },
    props:['type'],
    mounted(){
    },
    watch: {
      type (newV, oldV) {
        this.activeName = 'first';
        this.getList();
        console.log(newV, oldV)
       // this.switchStatusData = newV
      }
    },
    created(){
      let a = {
        name: '新闻',
        editor: '50M',
        time: '2019-25-05',
        origin: '中国日报',
      }
      this.tableData.push(a);
      for(let i=0;i<4;i++){
        this.tableData.push(a);
      }
      this.activeName = 'first';
    },
    methods: {
      getContent(html) {
        this.form.contents = html;
      },
      onSubmit() {
        let self = this;
        this.$refs['form'].validate((valid) => {
          if (valid) {
            self.form.typeflag = this.type/1;
            self.$http.post('api/resshare/maintain/addOrUpdateSpecial',{ "special":self.form,token:this.$token}).then(res => {
              self.$alert('操作成功!', '操作', {
                confirmButtonText: '确定',
                callback: action => {
                  this.activeName='second';
                  this.getList();
                }
              });
              this.form.name ='';
              this.form.cover = '';
              this.form.imageparams = '';
              this.form.summary = '';
              this.form.mapservice = '';
              this.form.imagewidth = '';
              this.form.imageheight = '';
              this.form.id = null;
              this.dialogImageUrl = '';
              this.dialogImageUrl1 ='';
              this.coverlayerflag  ='0';
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
        this.mysearch.typeflag = this.type;
        this.$http.post('api/resshare/maintain/listSpecial',this.mysearch).then(res => {
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
            action=='confirm' && this.$http.post('api/resshare/maintain/deleteSpecial',mysearch).then(res => {
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
        this.form.name = row.name;
        this.form.cover = row.cover;
        this.form.imageparams = row.imageparams;
        this.form.summary = row.summary;
        this.form.mapservice = row.mapservice;
        this.form.imagewidth = row.imagewidth;
        this.form.imageheight = row.imageheight;
        this.form.coverlayerflag   = row.coverlayerflag+'';
        this.form.id = row.id;
        this.dialogImageUrl = this.$URL+'/file/'+row.cover;
        this.dialogImageUrl1 =this.$URL+'/file/'+row.imageparams;
        this.activeName='first';
      },
      handleClick(tab, event) {
        this.form.name = '';
        //this.form.typeflag = '';
        this.form.cover = '';
        this.dialogImageUrl = '';
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
      },
      handleAvatarSuccess(res, file) {
        //debugger;
        this.form.cover = res.data.fileid;
        this.dialogImageUrl = URL.createObjectURL(file.raw);
      },
      handleAvatarSuccess1(res, file) {
        //debugger;
        this.form.imageparams = res.data.fileid;
        this.dialogImageUrl1 = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
      }
    },
    components: {
      'richtxt':Richtxt
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

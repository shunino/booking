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
  textarea{
    height: 100%;
  }
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
    <div id="csmy">

    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="上传共享" name="first" class="myfirst">
        <div>
          <el-form :rules="rules" ref="form" :model="form" label-width="80px" label-position="top">
            <el-form-item label="数据名称" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="主题词" prop="themes1">
              <el-col :span="3"><el-input v-model="form.themes1[0]"></el-input></el-col>
              <el-col class="ml10" :span="3"><el-input v-model="form.themes1[1]"></el-input></el-col>
              <el-col class="ml10" :span="3"><el-input v-model="form.themes1[2]"></el-input></el-col>
            </el-form-item>
            <el-form-item label="数据分类体系" prop="type1">
              <el-cascader
                :options="options"
                v-model="selectedOptions"
                @change="handleChange">
              </el-cascader>
            </el-form-item>
            <el-form-item label="位置区划" prop="location">
              <el-input v-model="form.location"></el-input>
            </el-form-item>
            <el-form-item label="数据描述" prop="datades">
              <el-input style="height: 200px;" type="textarea" v-model="form.datades"></el-input>
            </el-form-item>

            <el-form-item label="图片上传" prop="cover">
              <el-upload
                class="avatar-uploader"
                :action="$URL+'/upload'"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                >
                <img v-if="dialogImageUrl" :src="dialogImageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>

            <el-form-item label="文件上传">
              <el-upload
                class="upload-demo"
                :action="$URL+'/upload'"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :on-success="handleFileSuccess"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="filelist">
                <el-button size="small" type="primary">点击上传</el-button>
<!--                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
              </el-upload>
            </el-form-item>

            <el-form-item style="text-align: center;">
              <el-button type="primary" @click="onSubmit">确定</el-button>
            </el-form-item>
          </el-form>
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
        filelist: [],
        selectedOptions: [],
        dialogImageUrl:'',
        options: [],
        mysearch:{
          searchWrap:{
            userid:this.$userId,
          },
          countperpage: 12,
          pageno: 1,

        },
        total:1,
        pageno: 1,
        tableData: [],
        activeName: 'first',
        form: {
          name: '',
          type1: '',
          type2: '',
          location: '',
          datades: '',
          cover: '',
          filelist: [],
          userid:this.$userId,
          token:this.$token,
          id:null,
          themes1:[],
        },
        rules:{
          name: [
            { required: true, message: '请输入数据名', trigger: 'blur' },
          ],
          datades: [
            { required: true, message: '请填写数据描述', trigger: 'blur' },
          ],
          cover: [
            { required: true, message: '请上传图片', trigger: 'blur' },
          ],
          location: [
            { required: true, message: '请填写位置区别', trigger: 'blur' },
          ],
        },
      };
    },
    props:['upload','shareData'],
    watch: {
      'shareData': {
        handler(newName, oldName) {
          if(newName.id){
            this.init(newName);
          } else {
            this.form = {
                name: '',
                type1: '',
                type2: '',
                location: '',
                datades: '',
                cover: '',
                filelist: [],
                userid:this.$userId,
                token:this.$token,
                id:null,
                themes1:[],
            };
            this.selectedOptions = [];
            this.dialogImageUrl ='';
          }
        },
        deep: true,
        immediate: true
      }
    },
    created(){
      this.options = this.$STATE1;
      //this.getstate();
    },
    methods: {
      init(data){
        this.form.name = data.name;
        let theArr = data.themes.split(',');
        this.form.themes1 = theArr;
        this.form.type1 = data.type1;
        this.form.type2 = data.type2;
        this.selectedOptions = [data.type1,data.type2];
        this.form.location = data.location;
        this.form.datades = data.datades;
        this.form.filelist = data.filelist;
        //this.filelist = [];
        for(let i in data.filelist){
          this.filelist[i]= {};
          this.filelist[i]['name'] = data.filelist[i].filename;
          this.filelist[i]['url'] = this.$URL+'/file/'+data.filelist[i].fileid;
        }
        this.$forceUpdate()
        this.form.userid = this.$userId;
        this.form.id = data.id;
        this.dialogImageUrl = this.$URL+'/file/'+data.cover;
        this.form.cover = data.cover;
      },
      getstate(){
        this.$http.post('api/resshare/maintain/listDictionary',{typeid:1,pid:0,token:this.$token}).then(res => {

          console.log(res);
        }).catch(err => {
          console.log(err)
        })
      },
      handleFileSuccess(res, file){
        let op = {};
        let op2 = {};
        op2.name = res.data.filename;
        op2.url = res.data.fileid;
        op.fileid = res.data.fileid;
        op.filename = res.data.filename;
        op.contenttype = res.data.contenttype;
        op.size = res.data.size;
        this.form.filelist.push(op);
      },
      handleAvatarSuccess(res, file) {
        //debugger;
        this.form.cover = res.data.fileid;
        this.dialogImageUrl = URL.createObjectURL(file.raw);
      },
      handleRemove(file, fileList) {
        let de = 0;
        for(let i in this.form.filelist){
          if(this.form.filelist[i].name==file.name){
            de = i;
          }
        }
        this.form.filelist.splice(de, 1);
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handleChange(value) {
        this.form.type1 = value[0];
        this.form.type2 = value[1];
        console.log(value);
      },
      getContent(html) {
        this.form.contents = html;
      },
      onSubmit() {
        let self = this;
        this.form.themes = this.form.themes1.join(',');
        this.form.type1 = this.form.type1/1;
        this.form.type2 = this.form.type2/1;

        this.form.status = 2;
        //this.form.filesize = '32545';
        this.$refs['form'].validate((valid) => {
          if (valid) {
            self.$http.post('api/resshare/datacenter/addOrUpdate',{ "data":self.form,token:this.$token}).then(res => {
              self.$alert('操作成功!', '操作', {
                confirmButtonText: '确定',
                callback: action => {
                  //this.activeName='second';
                  //this.getList();
                  this.$emit('upload','perShare');
                }
              });
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
      handleDelete(id){
        let mysearch = {
          id:id,
          token:this.$token
        }
        this.$alert('确定删除？', '确定', {
          confirmButtonText: '确定',
          callback: action => {
            action=='confirm' && this.$http.post('api/resshare/datacenter/delete',mysearch).then(res => {
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
        // this.form.contents = '';
        // this.form.title = '';
        // this.form.author = '';
        // this.form.sources = '';
        // this.$refs.myrich.clearContent();
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

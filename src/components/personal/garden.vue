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
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="现有园区" name="first" class="myfirst">
        <div>
          <ul>
            <li>请勿上传非法数据，否者后果自负;</li>
            <li>上传的数据进过管理员审核;</li>
            <li>审核通过后可以下载数据;</li>
          </ul>
        </div>
        <div>
         <!--  <el-button size="small" type="primary">保存</el-button> -->
        </div>
        <div style="">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="现有园区"
              prop="name"
            >
            </el-table-column>
            <el-table-column
              label="园区类型"
              prop="level"
            >
              <template slot-scope="scope">
                {{mytype[scope.row.level]}}
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="secondTxt" name="second" class="myfirst">
        <div>
          <ul>
            <li>请勿上传非法数据，否者后果自负;</li>
            <li>上传的数据进过管理员审核;</li>
            <li>审核通过后可以下载数据;</li>
          </ul>
        </div>
        <div>
         <!--  <el-button size="small" type="primary">保存</el-button> -->
        </div>
        <div>
          <el-form :rules="rules" ref="form" :model="form" label-width="80px">
            <el-form-item label="园区名称" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="园区等级">
              <el-select v-model="form.level" placeholder="请选择活动区域">
                <el-option label="国家级" value="1"></el-option>
                <el-option label="省级" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="园区经度" prop="lon">
              <el-input v-model="form.lon"></el-input>
            </el-form-item>
            <el-form-item label="园区纬度" prop="lat">
              <el-input v-model="form.lat"></el-input>
            </el-form-item>
            <el-form-item label="园区地址" prop="lat">
              <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="面积" prop="size">
              <el-input v-model="form.size"></el-input>
            </el-form-item>
            <el-form-item label="流失面积" prop="losssize">
              <el-input v-model="form.losssize"></el-input>
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
            <el-form-item label="园区描述" prop="des">
              <el-input rows="4" type="textarea" v-model="form.des"></el-input>
            </el-form-item>

            <el-tabs v-model="activeName1" >
              <el-tab-pane label="园区概况" name="first">
                <el-form-item label="园区概况">
                  <richtxt ref="myrich1" @toClick="getContent1" ></richtxt>
                </el-form-item>
              </el-tab-pane>
              <el-tab-pane label="园区功能" name="second">
                <el-form-item label="园区功能">
                  <richtxt  ref="myrich2" @toClick="getContent2" ></richtxt>
                </el-form-item>
              </el-tab-pane>
              <el-tab-pane label="园区管理" name="third">
                <el-form-item label="园区管理">
                  <richtxt  ref="myrich3" @toClick="getContent3" ></richtxt>
                </el-form-item>
              </el-tab-pane>
              <el-tab-pane label="园区互动" name="fourth">
                <el-form-item label="园区互动">
                  <richtxt  ref="myrich4" @toClick="getContent4" ></richtxt>
                </el-form-item>
              </el-tab-pane>
            </el-tabs>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">确定</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import Richtxt from '@/components/common/richtxt1'
  export default {
    data() {
      return {
        secondTxt:'新增',
        activeName1: 'first',
        mytype:['','国家级','省级'],
        dialogImageUrl:'',
        activeName: 'first',
        tableData: [],
        mysearch:{
          userid:this.$userId,
          countperpage: 12,
          pageno: 1,
        },
        form: {
          userid:this.$userId,
          token:this.$token,
          id:null,
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
        },
      };
    },
    created(){
      this.getList();
    },
    methods: {
      handleClick(tab, event) {
        this.clear();
        this.getList();
        this.secondTxt = '新增';
        console.log(tab, event);
      },
      clear(){
        this.form = {};
        this.form.userid = this.$userId;
        this.form.token = this.$token;
        this.dialogImageUrl='';
        this.form.id = null;
      },
      handleEdit(row){
        this.form = {};
        this.form = {
          name: row.name,
          level: row.level,
          lon: row.lon,
          lat: row.lat,
          address: row.address,
          p_survey: row.p_survey,
          p_function: row.p_function,
          p_manager: row.p_manager,
          p_interact: row.p_interact,
          cover: row.cover,
          des:row.des,
          userid:this.$userId,
          token:this.$token,
          id:row.id,
          size:row.size,
          losssize:row.losssize
      };
        this.dialogImageUrl = this.$URL+'/file/'+row.cover;
        //
        // this.$refs.myrich.init(row.pSurvey);
        //其他
        this.$refs.myrich1.init(row.p_survey);
        this.$refs.myrich2.init(row.p_function);
        this.$refs.myrich3.init(row.p_manager);
        this.$refs.myrich4.init(row.p_interact);

        this.secondTxt = '编辑';
        this.activeName = 'second';
      },
      getContent1(html) {
        this.form.p_survey = html;
      },
      getContent2(html) {
        this.form.p_function = html;
      },
      getContent3(html) {
        this.form.p_manager = html;
      },
      getContent4(html) {
        this.form.p_interact = html;
      },
      handleAvatarSuccess(res, file) {
        //debugger;
        this.form.cover = res.data.fileid;
        this.dialogImageUrl = URL.createObjectURL(file.raw);
      },
      onSubmit() {
        let self = this;
        // this.form.type1 = this.form.type1/1;
        // this.form.type2 = this.form.type2/1;
        this.$refs['form'].validate((valid) => {
          if (valid) {
            self.$http.post('api/resshare/maintain/addOrUpdatePark',{ "park":self.form,token:this.$token}).then(res => {
              self.$alert('操作成功!', '操作', {
                confirmButtonText: '确定',
                callback: action => {
                  this.activeName='first';
                  this.clear();
                  this.getList();
                }
              });
              console.log(res);
            }).catch(err => {
              console.log(err)
            })
          }
        });
      },
      getList() {
        this.$http.post('api/resshare/maintain/listPark',this.mysearch).then(res => {
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
            action=='confirm' && this.$http.post('api/resshare/maintain/deletePark',mysearch).then(res => {
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
    },
    components: {
      'richtxt':Richtxt
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

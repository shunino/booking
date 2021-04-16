<style scoped>
  .mytop{
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../../assets/booking/bg.jpg") no-repeat;
    background-size:cover;
  }
  .sdv{
    width: 720px;
    display: flex;
    width: 720px;
    height: 310px;
    position: relative;
    background: white;
    background-color: rgba(255, 255, 255, 0.8);
    border-top: 3px solid #f99e3e;
        padding: 28px 61px 59px;
  }
  .btn{
        color: #fff;
    background-color: #2076CF;
    border-color: #2076CF;
        text-align: center;
    font-size: 24px;
    margin-top: 30px;
  }
</style>
<style>
  .mytop .el-form-item{
    margin-bottom: 0px;
  }
  .mytop .el-form--label-top .el-form-item__label{
    padding: 0px;
    font-weight: bold;
    color: black;
  }
  .mytop .el-date-editor--datetimerange.el-input, .el-date-editor--datetimerange.el-input__inner{
    width: 100%;
  }
  .mytop .el-date-editor.el-input, .el-date-editor.el-input__inner{
     width: 100%;
  }
</style>
<template>
       <div class="mytop">
          <div class="sdv">
            <el-form style="width:100%;" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position="top">
              <el-form-item>
                <el-radio-group @change="changeR"  v-model="FlightState">
                  <el-radio  :label="1">Round-trip</el-radio>
                  <el-radio  :label="2">One-way</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="" prop="name">
                <el-col :span="11">
                  <el-form-item prop="date2" label="From">
                    <el-input placeholder="From City or Airport" prefix-icon="el-icon-location-outline" v-model="ruleForm.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="2">
                  .
                </el-col>
                 <el-col :span="11">
                  <el-form-item prop="date2" label="To">
                    <el-input placeholder="To City or Airport" prefix-icon="el-icon-location-outline" v-model="ruleForm.name"></el-input>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item v-if="FlightState==1" label="Departing - Returning">
                   <el-date-picker
                   class="width100"
                    v-model="value2"
                    type="datetimerange"
                    :picker-options="pickerOptions"
                    range-separator="To"
                    start-placeholder="Depart date and time"
                    end-placeholder="return date and time"
                    align="right">
                  </el-date-picker>
              </el-form-item>
              <el-form-item v-if="FlightState==2" label="Departing">
                    <el-date-picker
                    v-model="value1"
                    type="datetime"
                    placeholder="Depart date and time">
                  </el-date-picker>
              </el-form-item>
               <el-form-item label="" prop="name">
                <el-col :span="11">
                  <el-form-item prop="date2" label="passenger">
                    <el-input placeholder="Number of passengers"  prefix-icon="el-icon-s-custom" v-model="ruleForm.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="2">
                  .
                </el-col>
                 <el-col :span="11">
                  <el-form-item prop="date2" label="Class">
                    <el-input placeholder="The Class" prefix-icon="el-icon-crop" v-model="ruleForm.name"></el-input>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item>
                <div class="btn width100" @click="submitForm('ruleForm')">search</div>
              </el-form-item>
            </el-form>
          </div>
       </div>
</template>

<script>
  $(function () {

  })
export default {
  name: 'Head',
  data () {
    return {
      FlightState:1,
      return1:true,
       ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
    }
  },
  watch: {
    '$route' (to, from) {
      this.init();
      this.search();
    },
  },
  mounted(){
  },
  methods:{
    changeR(val){
      //debugger;
    },
    getKey()
    {
       this.$router.push({path:'/datas',query:{key:this.searchinput}});
    },
    init(){
      this.searchinput = "";
    },
    search(){
        this.newData=[];
        this.mydata=[];
        this.showData=[];
        if(this.searchinput==""){
            this.hasxia = false;
            return;
        } else {
            this.hasxia = true;
        } 
        this.$http.post('api/resshare/datacenter/listSearch',{searchKey:this.searchinput,token:this.$token}).then(res => {
          let myda = res.data.data;
          if(myda.length==0||this.searchinput==""){
            this.hasData = false;
            return;
          } else {
            this.hasData = true;
          }
          for(let i in myda ){
            if(myda[i].typename=="新闻动态") this.newData.push(myda[i])
            if(myda[i].typename=="数据中心") this.mydata.push(myda[i])
            if(myda[i].typename=="专题展示") this.showData.push(myda[i])
          }
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
    },
    goto(type,id){
        if(type==1){
          this.$router.push({path:'/newsDetail',query:{id:id}});
        } else if(type==2){
          this.$router.push({path:'/DatasDetail1',query:{id:id}});
        } else if(type==3){
          this.$router.push({path:'/olmap',query:{id:id}});
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


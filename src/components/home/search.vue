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
    height: 250px;
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
       <div class="mytop" id="mysearch">
          <div class="sdv">
            <el-form style="width:100%;" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position="top">
              <el-form-item>
                  <el-radio v-model="FlightState"  :label="1">Round-trip</el-radio>
                  <el-radio v-model="FlightState"  :label="2">One-way</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="">
                <el-col :span="11">
                  <el-form-item prop="fromCity" label="From">
                    <el-select
                      class="width100"
                      v-model="ruleForm.fromCity"
                      multiple
                      filterable
                      remote
                      reserve-keyword
                     placeholder="From City or Airport" 
                     prefix-icon="el-icon-location-outline"
                      :remote-method="getAirport"
                      :loading="loading">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="2">
                  .
                </el-col>
                 <el-col :span="11">
                  <el-form-item prop="toCity" label="From">
                    <el-select
                    class="width100"
                      v-model="ruleForm.toCity"
                      multiple
                      filterable
                      remote
                      reserve-keyword
                     placeholder="to City or Airport" 
                     prefix-icon="el-icon-location-outline"
                      :remote-method="getAirport"
                      :loading="loading">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-form-item>
               <el-form-item label="">
                <el-col :span="11">
                 <el-form-item prop="returnTime" v-if="FlightState==1" label="Departing - Returning">
                   <el-date-picker
                   class="width100"
                    v-model="ruleForm.returnTime"
                    type="datetimerange"
                    :picker-options="pickerOptions"
                    range-separator="To"
                    start-placeholder="Depart date and time"
                    end-placeholder="return date and time"
                    align="right">
                  </el-date-picker>
              </el-form-item>
              <el-form-item prop="fromTime" v-if="FlightState==2" label="Departing">
                    <el-date-picker
                    class="width100"
                    v-model="ruleForm.fromTime"
                    type="datetime"
                    placeholder="Depart date and time">
                  </el-date-picker>
              </el-form-item>
                </el-col>
                <el-col :span="2">
                  .
                </el-col>
                 <el-col :span="11">
                  <el-form-item prop="myclass" label="Class">
                     <el-select class="width100" v-model="ruleForm.myclass" placeholder="The Class">
                        <el-option
                          v-for="item in classOp"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item>
                <div class="btn width100 pointer" @click="search()">search</div>
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
      classOp: [{
          value: '1',
          label: 'enconomy'
        }, {
          value: '2',
          label: 'First class'
        }],
      loading:false,
      options:[],
      FlightState:1,
      return1:true,
      ruleForm: {},
        rules: {
          fromCity: [
            { required: true, message: 'not null', trigger: 'blur' },
          ],
          toCity: [
            { required: true, message: 'not null', trigger: 'blur' },
          ],
          fromTime: [
            { required: true, message: 'not null', trigger: 'blur' },
          ],
          returnTime: [
            { required: true, message: 'not null', trigger: 'blur' },
          ],
          myclass: [
            { required: true, message: 'not null', trigger: 'blur' },
          ],
        }
    }
  },
  watch: {
    '$route' (to, from) {
     
    },
  },
  mounted(){
  },
  methods:{
    getAirport(val){
      let self = this;
      debugger;
      self.$http.get(this.$host+'/api/airport/search',{city:val}).then(res => {
        debugger;
        self.$setCookie('username',res.data.data.username,'55');
        self.$setCookie('userid',res.data.data.userid,'55');
        self.$setCookie('token',res.data.data.token,'55');
        // self.hasLogin = true;
        // self.dialogVisible1 = false;
        // self.dialogVisible = false;
        // self.user = this.$getCookie('username');
        self.$router.push({path:'/'});
        console.log(res);
      }).catch(err => {
        self.$message.error('email or password is error!');
        console.log(err)
      })
    },
    search(){
        console.log('search');
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


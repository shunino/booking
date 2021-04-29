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
    text-align: left;
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
                  <el-radio v-model="FlightState"  :label="2">One-way</el-radio>
                  <el-radio v-model="FlightState"  :label="1">Round-trip</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="">
                <el-col :span="11">
                  <el-form-item prop="fromCity" label="From">
                    <el-select
                      class="width100"
                      v-model="ruleForm.fromCity"
                      
                      filterable
                      remote
                      reserve-keyword
                     placeholder="From City or Airport" 
                     prefix-icon="el-icon-location-outline"
                      :remote-method="getAirport1"
                      :loading="loading">
                     <el-option
                        v-for="item in fromOption"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="2">
                  .
                </el-col>
                 <el-col :span="11">
                  <el-form-item prop="toCity" label="To">
                    <el-select
                    class="width100"
                      v-model="ruleForm.toCity"
                      
                      filterable
                      remote
                      reserve-keyword
                     placeholder="to City or Airport" 
                     prefix-icon="el-icon-location-outline"
                      :remote-method="getAirport2"
                      :loading="loading">
                      <el-option
                        v-for="item in toOption"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
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
                    type="daterange"
                    value-format="yyyy-MM-dd"
                    format="yyyy-MM-dd"
                    range-separator="To"
                    start-placeholder="Depart date and time"
                    end-placeholder="return date and time"
                    align="right">
                  </el-date-picker>
              </el-form-item>
              <el-form-item prop="fromTime" v-if="FlightState==2" label="Departing">
                    <el-date-picker
                    value-format="yyyy-MM-dd"
                    format="yyyy-MM-dd"
                    class="width100"
                    v-model="ruleForm.fromTime"
                    type="date"
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
                <div class="btn width100 pointer" @click="mysearch()">search</div>
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
          value: '2',
          label: 'enconomy'
        }, {
          value: '1',
          label: 'First class'
        }],
      loading:false,
      options:[],
      FlightState:2,
      return1:true,
      fromOption:[],
      toOption:[],
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
    getAirport1(val){
      let self = this;
      self.$http.get(this.$host+'/api/airport/search?city='+val).then(res => {
        this.fromOption = res.data;
        console.log(res);
      }).catch(err => {
        self.$message.error('email or password is error!');
        console.log(err)
      })
    },
    getAirport2(val){
      let self = this;
      self.$http.get(this.$host+'/api/airport/search?city='+val).then(res => {
        this.toOption = res.data;
        console.log(res);
      }).catch(err => {
        self.$message.error('email or password is error!');
        console.log(err)
      })
    },
    mysearch(){
      let time1,time2;
      if(!this.$getCookie('token')){
        this.$router.push({path:'/login'})
        return;
      }
      if(this.ruleForm.fromCity==this.ruleForm.toCity){
        this.$message.error('fromCity can not same as toCity!');
        return;
      }
      if(this.ruleForm.returnTime){
        time1 = this.ruleForm.returnTime[0];
        time2 = this.ruleForm.returnTime[1];
      } else {
        time1 = this.ruleForm.fromTime;
        time2 = null;
      }
        let ob = {
          dateDepart:time1,
          dateReturn:time2,
          airportIdFrom:this.ruleForm.fromCity,
          airportIdTo:this.ruleForm.toCity,
          seats:1,
          seatClass:this.ruleForm.myclass,
        };
        let auth = 'Bearer'+this.$getCookie('token');
        let self = this;
        this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          self.$http.get(this.$host+'/api/flight/search',{headers:{Authorization:auth},params:ob}).then(res => {
              let arr = [];
              arr.push(res.data.flightsDepart[0]);
              if(res.data.flightsReturn){
                arr.push(res.data.flightsReturn[0]);
              }
              self.$emit('mySearch',arr);
              console.log(res);
            }).catch(err => {
              console.log(err)
            })
          }
        });
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


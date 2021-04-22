<style scoped>
.info-box{
  width:100%;
}
</style>
<template>
  <div class="info-box">
    <div v-if="isList" class="card-list">
      <el-card @click.native="toDetail()" style="margin-top:10px;cursor: pointer;" class="box-card" v-for="o in 4" :key="o">
        <div slot="header" class="clearfix">
          <span>Card name</span>
        </div>
        <div class="text item">
          地址
        </div>
      </el-card>
    </div>
    <el-form v-if="!isList" ref="form" :model="form" label-width="120px">
      <el-form-item label="address1">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="address2">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="cardNumber">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
       <el-form-item label="cardName">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="create">Create</el-button>
        <el-button @click="modify">modify</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isList:true,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
     methods: {
      create(val) {
        
      },
      modify(val) {
       
      },
      toDetail(){
        this.isList = false;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


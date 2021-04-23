<style scoped>
.info-box{
  width:100%;
}
</style>
<template>
  <div class="info-box">
    <div v-if="isList" class="card-list">
      <div class="text-left" style="text-align: left;"><el-button type="primary" @click="create">Create Card</el-button></div>
      <el-card @click.native="toDetail()" style="margin-top:10px;cursor: pointer;" class="box-card" v-for="o in 4" :key="o">
        <div slot="header" class="clearfix">
          <span>Card name</span>
        </div>
        <div class="text item">
          Adress
        </div>
      </el-card>
    </div>
    <el-form v-if="!isList" ref="form" :model="form" label-width="120px">
       <div class="text-left" style="text-align: left;"><el-button type="primary" @click="back">Back CardList</el-button></div>
      <el-form-item class="mt20" label="address1">
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
        <el-button type="primary" @click="modify">sure</el-button>
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
        this.isList = false;
      },
      back(){
        this.isList = true;
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


<style scoped>
.info-box{
  width:100%;
}
</style>
<template>
  <div class="info-box">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="firstName">
        <el-input disabled v-model="form.firstName"></el-input>
      </el-form-item>
      <el-form-item label="lastName">
        <el-input disabled v-model="form.lastName"></el-input>
      </el-form-item>
      <el-form-item label="email">
        <el-input disabled v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="home airport">
        <el-input v-model="form.home"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">modify</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


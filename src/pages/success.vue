<style scoped>
.paySuccess{
  font-size: 33px;
  color: red;
}
</style>
<template>
  <div class="commondiv flexc" style="height:600px;">
    <div class="paySuccess mt20">Paying successfully！</div>
    <!-- <div><el-button size= type="success">Countinue</el-button></div> -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  mounted(){
    $('#mysearch').hide();
   
  },
  methods: {
    changTab(tab) {
     
    },
  },
  components: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


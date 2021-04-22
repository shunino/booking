<style scoped>
.paySuccess{
  font-size: 33px;
  color: red;
}
</style>
<template>
  <div class="commondiv flexc">
    <div class="paySuccess mt20">支付成功！</div>
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


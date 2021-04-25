<template>
    <div class="myfooter">
        
    </div>
</template>
<script>
  export default {
    name: 'Head',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .myfooter{
    /*position: absolute;*/
    /*bottom: 0px;*/
    /*left: 0px;*/
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 90px;
    color:white;
    /*margin-top: 40px;*/
    font-size: 14px;
    
    justify-content: center;
    background:linear-gradient(90deg,rgba(4,68,155,1),rgba(16,92,196,1));
  }
  .footer-left{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    color: #00A8FF;
    width: 414px;
    justify-content: space-around;
  }
  .footer-left span{
    display: inline-block;
    color: #FFFFFF;
  }
  .footer-left a{
    display: inline-block;
    color: #FFFFFF !important;
  }
  .footer-right{
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    
    margin-top:3px;
    width: 455px;
    justify-content: flex-end;
  }

</style>

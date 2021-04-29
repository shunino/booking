// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import VueQuillEditor from 'vue-quill-editor'
Vue.use(ElementUI, {locale})
import axios from 'axios'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
import 'videojs-flash'; //引入才能播放rtmp视屏
const myhost = require('../config/server.js')
// import LkTimeline from 'lk-timeline'
// Vue.use(LkTimeline)
Vue.use(VideoPlayer)

const hls = require('videojs-contrib-hls')
Vue.use(hls)
Vue.prototype.$host=myhost.host;
//Vue.prototype.$other = '/ips';
/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
Vue.prototype.$flight = [];
//通用常量
Vue.prototype.$URL='http://58.42.237.169:8081' //http://222.85.224.95:9090
let tokent = location.href.split('&')[1] ? location.href.split('&')[1].split('=')[1] : 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';
Vue.prototype.$Ctoken =tokent;
//时间转换
Vue.prototype.$times = function(timestamp) {
  var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
   var Y = date.getFullYear() + '-';
   var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
   var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
   var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
   var m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + ':';
   var s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
    return Y+M+D+h+m+s;
}
Vue.prototype.$http=axios
//设置cookie
Vue.prototype.$setCookie = function (cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  console.log(cname + "=" + cvalue + "; " + expires);
  document.cookie = cname + "=" + cvalue + "; " + expires;
  console.log(document.cookie);
}
//获取cookie
Vue.prototype.$getCookie =  function (cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  console.log("获取cookie,现在循环")
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    console.log(c)
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) != -1){
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

Vue.prototype.$commonGo = function(src){
  this.$router.push({path:src});
}

Vue.prototype.$down = function(id){
  window.open(this.$URL+'/download/'+id);
}

Vue.prototype.$userId = null;
Vue.prototype.$token = null;

//Vue.use(axios);

import $ from 'jquery'

import 'bootstrap'
Vue.use(VueQuillEditor)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

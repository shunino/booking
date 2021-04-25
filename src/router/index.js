import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home'
import Personal from '@/pages/personal'

import Login from '@/pages/personal/login'
import Register from '@/pages/personal/register'
import ForgetPwd from '@/pages/personal/forgetPwd'

import Flight from '@/pages/flight'
import Success from '@/pages/success'

Vue.use(Router)
const HoTitle = '';
const router = new Router({
  routes: [
    {
      path: '/personal',
      name: 'Personal',
      component: Personal,
      meta:{
          title: 'Personal'
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta:{
          title: '登录'+HoTitle
      }

    },
    {
      path: '/success',
      name: 'Success',
      component: Success,
      meta:{
          title: 'Success'
      }
    },
    {
      path: '/flight',
      name: 'Flight',
      component: Flight,
      meta:{
          title: 'Flight'
      }

    },
     {
      path: '/Register',
      name: 'Register',
      component: Register,
      meta:{
          title: '注册'+HoTitle
      }
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
          title: '首页'+HoTitle
      }
    },
  ]
})

router.beforeEach((to,from,next)=>{
  Vue.prototype.$token =  Vue.prototype.$getCookie('token');
  Vue.prototype.$userId = Vue.prototype.$getCookie('userid');
  console.log(Vue.prototype.$token,Vue.prototype.$userId);
  next();
})
export default router;

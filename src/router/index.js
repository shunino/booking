import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home'
import Personal from '@/pages/personal'
import News from '@/pages/news'
import Datas from '@/pages/datas'
import Show from '@/pages/newshow'
import Garden from '@/pages/garden'
import Popular from '@/pages/popular'
import Intro from '@/pages/intro'

import NewsDetail from '@/pages/newsDetail'
import PopularDetail from '@/pages/popularDetail'
import DatasDetail from '@/pages/datasDetail'
import DatasDetail1 from '@/pages/datasDetail1'
import GardenDetail from '@/pages/gardenDetail'
import ShowDetail from '@/pages/showDetail'

import Vdata1 from '@/pages/vdata1'
import Vdata2 from '@/pages/vdata2'
import Vdata3 from '@/pages/vdata3'
import Vdata4 from '@/pages/vdata4'
import Test from '@/pages/test'
import Olmap from '@/pages/olmap'

import Login from '@/pages/personal/login'
import Register from '@/pages/personal/register'
import ForgetPwd from '@/pages/personal/forgetPwd'

import Flight from '@/pages/flight'

Vue.use(Router)
const HoTitle = '-贵州水土保持-数据共享中心';
const router = new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta:{
          title: '登录'+HoTitle
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
      path: '/test',
      name: 'test',
      component: Test,
      meta:{
          title: '注册'+HoTitle
      }
    },
     {
      path: '/ForgetPwd',
      name: 'ForgetPwd',
      component: ForgetPwd,
      meta:{
          title: '忘记密码'+HoTitle
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
    {
      path: '/olmap',
      name: 'olmap',
      component: Olmap,
      meta:{
          title: '专题地图展示'+HoTitle
      }
    },
    {
      path: '/Vdata1',
      name: 'Vdata1',
      component: Vdata1,
      meta:{
          title: '治理大数据'
      }
    },
    {
      path: '/Vdata2',
      name: 'Vdata2',
      component: Vdata2,
      meta:{
          title: '监督大数据'
        }
    },
    {
      path: '/Vdata3',
      name: 'Vdata3',
      component: Vdata3,
      meta:{
          title: '站网大数据'
      }
    },
    {
      path: '/Vdata4',
      name: 'Vdata4',
      component: Vdata4,
      meta:{
          title: '行政管理'
      }
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal,
      meta:{
          title: '个人中心'+HoTitle
      }
    },
    {
      path: '/news',
      name: 'news',
      component: News,
      meta:{
          title: '新闻动态'+HoTitle
      }
    },
    {
      path: '/datas',
      name: 'datas',
      component: Datas,
      meta:{
          title: '数据中心'+HoTitle
      }
    },
    {
      path: '/show',
      name: 'show',
      component: Show,
      meta:{
          title: '专题展示'+HoTitle
      }
    },
    {
      path: '/garden',
      name: 'garden',
      component: Garden,
      meta:{
          title: '示范园区'+HoTitle
      }
    },
    {
      path: '/popularDetail',
      name: 'PopularDetail',
      component: PopularDetail,
      meta:{
          title: '科技推广详情'+HoTitle
      }
    },
    {
      path: '/popular',
      name: 'popular',
      component: Popular,
      meta:{
          title: '专题展示'+HoTitle
      }
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro,
      meta:{
          title: '平台简介'+HoTitle
      }
    },
    {
      path: '/newsDetail',
      name: 'NewsDetail',
      component: NewsDetail,
      meta:{
          title: '新闻详情'+HoTitle
      }
    },
    {
      path: '/DatasDetail',
      name: 'DatasDetail',
      component: DatasDetail,
      meta:{
          title: '数据详情'+HoTitle
      }
    },
    {
      path: '/DatasDetail1',
      name: 'DatasDetail1',
      component: DatasDetail1,
      meta:{
          title: '数据详情'+HoTitle
      }
    },
    {
      path: '/gardenDetail',
      name: 'gardenDetail',
      component: GardenDetail,
      meta:{
          title: '园区详情'+HoTitle
      }
    },
    {
      path: '/showDetail',
      name: 'showDetail',
      component: ShowDetail,
      meta:{
          title: '展示详情'+HoTitle
      }
    }
  ]
})

router.beforeEach((to,from,next)=>{
  Vue.prototype.$token =  Vue.prototype.$getCookie('token');
  Vue.prototype.$userId = Vue.prototype.$getCookie('userid');
  console.log(Vue.prototype.$token,Vue.prototype.$userId);
  next();
})
export default router;

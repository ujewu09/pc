import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/pages/layout'
import NotFound from '@/pages/layout/404'
import myBag from '@/pages/view/homeManage/myBag'
import manageHome from '@/pages/view/homeManage/Home'
import myOrder from '@/pages/view/homeManage/myOrder'
Vue.use(Router)


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      children: [
        {path: '/manageHome', component: manageHome, meta: {title: '管理首页'},},
        {path: '/myOrder', component: myOrder, meta: {title: '我的订单'}},
        {path: '/myBag', component: myBag, meta: {title: '我的包裹'}},
      ],
      redirect:'/manageHome'
    },
    {path:'*',component:NotFound},
  ]
})

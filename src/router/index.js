import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Find from '../views/Find.vue'
import Order from '../views/Order.vue'
import My from '../views/My.vue'

Vue.use(VueRouter)  //必须要有，vue中使用某个组件或者插件都必须调用use方法

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
	  path:'/detail/:id',
	  name:'detail',
	  component: () => import(/* webpackChunkName: "detail" */'../views/Detail.vue')
  },
  {
    path: '/find',
    name: 'Find',
	component:Find
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/my',
    name: 'My',
    component: My
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass:'active'
})

export default router

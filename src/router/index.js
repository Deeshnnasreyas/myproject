import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todo',
   component: Todo
    // component: () => import(/* webpackChunkName: "home" */ '../views/Todo.vue')
  },
  // {
  //   path: '/Home',
  //   name: 'Home',
  // //  component: webkitConvertPointFromPageToNode
  //   component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/order',
    name: 'Order',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "order" */ '../views/Order.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

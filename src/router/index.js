import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/members',
    name: 'members',
    component: () => import(/* webpackChunkName: "members" */ '../views/Members.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

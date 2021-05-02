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
  },
  {
    path: '/students',
    name: 'students',
    component: () => import(/* webpackChunkName: "students" */ '../views/Students.vue')
  },
  {
    path: '/professors',
    name: 'professors',
    component: () => import(/* webpackChunkName: "professors" */ '../views/Professors.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

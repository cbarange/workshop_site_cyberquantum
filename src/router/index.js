import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import LeaderBoard from '@/views/LeaderBoard.vue'
import CheckCertModulus from '@/views/CheckCertModulus.vue'
import Presentation from '@/views/Presentation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { path: '/leaderboard', name: 'LeaderBoard', component: LeaderBoard },
  { path: '/check-cert-modulus', name: 'CheckCertModulus', component: CheckCertModulus },
  { path: '/presentation', name: 'Presentation', component: Presentation },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

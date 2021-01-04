import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import { auth } from "@/firebase"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {requiresAuth: true}
  },
  {
    path: '/ingreso',
    name: 'ingreso',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ingreso" */ '../views/Ingreso.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

    const usuario = auth.currentUser
    console.log(usuario)

    if (!usuario) {
      next({
        path: '/Ingreso'
      })
    } else {
      next()
    }

  } else {
    next()
  }
})

export default router

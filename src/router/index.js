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
    path: '/huerta',
    name: 'Huerta',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "huerta" */ '../views/Huerta.vue')
  },
  {
    path: '/cosecha',
    name: 'Cosecha',    
    component: () => import(/* webpackChunkName: "cosecha" */ '../views/Cosecha.vue')
  },
  {
    path: '/asesoria-nutricional',
    name: 'Asesoria nutricional',    
    component: () => import(/* webpackChunkName: "asesoria-nutricional" */ '../views/AsesoriaNutricional.vue')
  },
  {
    path: '/noticias',
    name: 'Noticias y recetas',    
    component: () => import(/* webpackChunkName: "noticias" */ '../views/Noticias.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

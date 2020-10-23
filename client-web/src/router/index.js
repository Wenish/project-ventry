import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "layoutBasic" */ '../layouts/LayoutBasic.vue'),
    children: [
      { path: '', component: () => import(/* webpackChunkName: "viewHome" */ '../views/ViewHome.vue') }
    ]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "layoutMain" */ '../layouts/LayoutMain.vue'),
    children: [
      { path: '', component: () => import(/* webpackChunkName: "viewHome" */ '../views/ViewDashboard.vue') }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "layoutBasic" */ '../layouts/LayoutBasic.vue'),
    children: [
      { path: '', component: () => import(/* webpackChunkName: "viewHome" */ '../views/ViewLogin.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import intercept from './intercept'
import { addRouterList } from './convert'

const defaultRouter = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/test/login.vue'),
  },
  {
    name: 'index',
    path: '/',
    component: () => import('@/views/test/index.vue'),
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error/404.vue'),
  },
  {
    name: '401',
    path: '/401',
    component: () => import('@/views/error/401.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/error/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory() || createWebHashHistory(),
  routes: defaultRouter,
})

const createRouterMode = () => {
  intercept(router)
  addRouterList(router)
  return router
}

export { createRouterMode, router }

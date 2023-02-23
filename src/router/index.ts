import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import generatedRouters from 'virtual:generated-pages'
console.log('generatedRouters', generatedRouters)

const router = createRouter({
  history: createWebHistory() || createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/test/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/test/login.vue'),
    },
    {
      path: '/401',
      name: '401',
      component: () => import('@/views/error/401.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/error/404.vue'),
    },
    ...generatedRouters,
  ],
})

export default router

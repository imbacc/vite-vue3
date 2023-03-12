import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import pages from '~pages'

pages.push(...[
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/error/404.vue'),
  },
])
console.log('%c [ pages ]-5', 'font-size:14px; background:#41b883; color:#ffffff;', pages)

const router = createRouter({
  history: createWebHistory() || createWebHashHistory(),
  routes: pages,
})

export {
  router,
  pages,
}

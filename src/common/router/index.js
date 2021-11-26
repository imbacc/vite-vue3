import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { setLazyRouter } from 'imba-lazy-store-router'
import generatedRouters from 'virtual:generated-pages'
console.log('generatedRouters', generatedRouters)

const router = createRouter({
	history: createWebHistory() || createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: () => import('@views/test/index.vue')
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('@views/test/login.vue')
		},
		{
			path: '/401',
			name: '401',
			component: () => import('@views/error-page/401.vue')
		},
		{
			path: '/:pathMatch(.*)*',
			component: () => import('@views/error-page/404.vue')
		},
		...generatedRouters
	]
})

// vite自动导入
const moduleArray = import.meta.glob('./module/*.js')
setLazyRouter(moduleArray, router)

export default router

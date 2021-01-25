import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import home from '@views/home.vue'

let routes = [
	{
		path: '/',
		name: 'home',
		component: home
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@views/login.vue')
	}
]

// vite 自动化导入模块
const moduleFiles = import.meta.globEager('./module/*.js')
Object.values(moduleFiles).forEach((module) => (routes = [...routes, ...module.default]))
console.log('router modules=', routes)

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL) || createWebHistory(process.env.BASE_URL),
	routes
})

export default router

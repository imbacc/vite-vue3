import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { registerModule } from '@/common/tools/cmake_lazy.js'
import { LOCA_ROUTER, set_state, get_state } from '@/common/provide/lazy_state.js'

const routes = [
	{
		path: '/',
		component: () => import('@views/test/index.vue'),
		meta: {
			// auth: ['user']
			router: ['init_module', 'action_module', 'test_module']
		}
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
	}
]

const router = createRouter({
	history: createWebHashHistory() || createWebHistory(),
	routes
})

// vite自动导入
const moduleArray = import.meta.glob('./module/*.js')

/**
 * 注册router
 * @param {*} moduleName: string | Array 模块名称
 * @param {*} routerName: string | Array 路由名称 为child添加
 */
const registerRouter_cache = {}
const registerRouter = (moduleName, routerName) => {
	return new Promise((resovle) => {
		const _cache_name = `${moduleName}_${routerName}`
		const _result_cache = registerRouter_cache[_cache_name]
		if (_result_cache) {
			resovle(router)
			return
		}
		registerModule(moduleName, moduleArray).then((res) => {
			const add_or_child = (r) => {
				if (routerName) {
					router.addRoute(routerName, r)
				} else {
					router.addRoute(r)
				}
			}

			let no_cache = []
			for (const r of res) {
				let no_cache_name = r?.meta?.no_cache
				if (no_cache_name) !no_cache.includes(no_cache_name) && no_cache.push(no_cache_name)
				let has = router.hasRoute(r.name) // 初始化加载过的不再重复加载
				if (!has) {
					add_or_child(r)
					if (r?.meta?.child) registerRouter(r.meta.child, r.meta.father)
				} else {
					add_or_child(r)
				}
			}
			if (Array.isArray(moduleName)) moduleName = moduleName.filter((f) => !no_cache.includes(f))
			set_state(LOCA_ROUTER, moduleName)
			registerRouter_cache[_cache_name] = true
			set_state(LOCA_ROUTER, name)
			resovle(router)
		})
	})
}

// 懒加载 加载过的router
const initLzayRouter = () => {
	const lazyState = get_state(LOCA_ROUTER)
	if (lazyState && Array.isArray(lazyState) && lazyState.length > 0) return registerRouter(lazyState)
	return Promise.resolve()
}

export { router, registerRouter, initLzayRouter }

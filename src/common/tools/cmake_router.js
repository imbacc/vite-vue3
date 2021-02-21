import { router, initLzayRouter } from '../router/index.js'
import { store } from '../store/index.js'

// 跳过
const path_list = ['/login']

// ...前置守卫
router.beforeEach(({ path }, from, next) => {
	if (path_list.indexOf(path) === -1) {
		store.dispatch('user_vuex/check_login').then((res) => (!res ? next('/login') : next()))
	} else {
		next()
	}
})

// ...后置钩子
router.afterEach((to, from) => {})

export { router, initLzayRouter }

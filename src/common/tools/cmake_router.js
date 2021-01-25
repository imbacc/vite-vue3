import router from '../router/index.js'
import vuex from '../store/index.js'
import cfg from '../config/cfg.js'

//检查用户登录状态
const check_login = async () => await vuex.dispatch('user_vuex/check_login')

const path_list = ['/login', '/res']

router.beforeEach((to, from, next) => {
	// ...前置守卫
	if (path_list.indexOf(to.path) === -1) {
		if (cfg.check_login) {
			check_login().then((res) => {
				if (!res) {
					next({ path: '/login' })
				} else {
					next()
				}
			})
		}
	} else {
		next()
	}
})

router.afterEach((to, from) => {
	// ...后置钩子
})

export default router

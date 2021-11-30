import router from '@/common/router/index.js'
import store from '@/common/store/index.js'

import { configure, start, done } from 'nprogress'
import { setMetaKey, setUserRole, berforeInject } from 'imba-lazy-store-router'

configure({ showSpinner: false })

// 跳过
const jump_list = ['/401', '/404']
//检查权限
const user_role = () => store.state.user_vuex.user_role
// 检查登录
const check_login = () => store.state.user_vuex.token

// 设置berforeInject的meta获取字段
setMetaKey({
	auth: 'auth',
	store: 'store',
	router: 'router'
})

// 设置berforeInject useRole 数据
setUserRole(user_role)

// ...前置
router.beforeEach(({ path, matched }, from, next) => {
	start()
	if (path === '/login') {
		next()
		return
	}

	const ignore = jump_list.includes(path)
	if (!ignore && !check_login()) {
		next('/login')
		return
	}

	// 懒加载执行函数
	berforeInject(matched, (res) => {
		if (typeof res === 'string') {
			next(res)
			return
		}
		console.log('test berforeInject...')
		next()
	})
})

// ...后置
router.afterEach((to, from) => {
	done()
})

// err
router.onError((err) => {
	console.log('err', err)
})

export default router

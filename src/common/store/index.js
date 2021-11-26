import { createStore } from 'vuex'
import { setLazyStore } from 'imba-lazy-store-router'

import user_vuex from './module/user_vuex.js' // 初始化 user_vuex
// 也可以弃用store,利用reactive特性来实现全局状态管理
const store = createStore({
	modules: {
		user_vuex
	}
})

// vite glob
const moduleArray = import.meta.glob('./module/*.js')
setLazyStore(moduleArray, store)

export default store

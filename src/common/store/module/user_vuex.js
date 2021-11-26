import { setCacheLoca, getCacheLoca } from 'imba-cache'

const TOKEN = localStorage.getItem('token') || false
const USER_INFO = getCacheLoca('user_info') || false
const USER_ROLE = getCacheLoca('user_role') || []

//全局状态
const state = {
	token: TOKEN, // 用户token
	user_info: USER_INFO, // 用户信息
	user_role: USER_ROLE //用户角色权限
}

//同步方法
const mutations = {
	set_vuex(state, [key, val]) {
		state[key] = val
	},
	set_cache(state, [key, val]) {
		state[key] = val
		setCacheLoca(key, val)
	},
	set_role(state, role) {
		state.user_role = [...new Set([...state.user_role, ...role])]
		setCacheLoca('user_role', state.user_role)
	},
	set_logout(state) {
		state.token = ''
		state.user_info = false
		state.user_role = []
		localStorage.removeItem('token')
		localStorage.removeItem('user_info')
		localStorage.removeItem('user_role')
	}
}

//get方法
const getters = {
	// 用户是否登录
	hasLogin: (state) => state.token || state.user_info || false
}

//异步方法
const actions = {}

export default {
	namespaced: true,
	state,
	mutations,
	getters,
	actions
}

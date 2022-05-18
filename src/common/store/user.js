import { setCacheLoca, getCacheLoca, delCache } from 'imba-cache'
import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

const TOKEN = localStorage.getItem('token') || false
const USER_INFO = getCacheLoca('userInfo') || false
const USER_ROLE = getCacheLoca('userRole') || []

export const useUserStore = defineStore('user', {
	state: () => {
		return {
			token: TOKEN, // 用户token
			userInfo: USER_INFO, // 用户信息
			userRole: USER_ROLE //用户角色权限
		}
	},
	getters: {
		hasLogin() {
			return Boolean(Object.keys(this.userInfo).length > 0 && this.token)
		},
		getSiteId() {
			return this.userInfo && this.userInfo.siteid
		}
	},
	actions: {
		setCache(key, val) {
			this.$patch({ [key]: val })
			setCacheLoca(key, val)
		},
		setRole(role) {
			this.userRole = [...new Set([...this.userRole, ...role])]
			setCacheLoca('userRole', this.userRole)
		},
		setLogout(state) {
			this.$patch({ token: '', userInfo: false, userRole: [] })
			delCache('token')
			delCache('userInfo')
			delCache('userRole')
		}
	}
})

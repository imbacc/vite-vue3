import { setCacheLoca, getCacheLoca, delCache } from 'imba-cache'
import { defineStore } from 'pinia'

const TOKEN = getCacheLoca('token') || ''
const USER_INFO = getCacheLoca('userInfo') || {}
const USER_ROLE = getCacheLoca('userRole') || []

interface userStore_DTYPE {
  token: string
  userInfo: any
  userRole: string[]
}

type setCache_params_DTYPE = { [key in keyof userStore_DTYPE]: key extends keyof userStore_DTYPE ? userStore_DTYPE[key] : never }

export const useUserStore = defineStore('user', {
  state: (): userStore_DTYPE => {
    return {
      token: TOKEN as string, // 用户token
      userInfo: USER_INFO, // 用户信息
      userRole: USER_ROLE as string[], // 用户角色权限
    }
  },
  getters: {
    hasLogin(): boolean {
      return Boolean(this.token && this.userInfo)
    },
  },
  actions: {
    setCache(params: setCache_params_DTYPE) {
      this.$patch(params)
      for (const key in params) {
        setCacheLoca(key, params[key as keyof userStore_DTYPE])
      }
    },
    setRole(role: Array<string>) {
      this.userRole = [...new Set([...this.userRole, ...role])]
      setCacheLoca('userRole', this.userRole)
    },
    setLogout() {
      this.$patch({ token: '', userInfo: {}, userRole: [] })
      delCache('token')
      delCache('userInfo')
      delCache('userRole')
    },
  },
})

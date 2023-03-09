import type { userStore_DTYPE, setCache_params_DTYPE } from '#/store/user'

import { setCacheLoca, getCacheLoca, delCache } from 'imba-cache'
import { defineStore } from 'pinia'

const TOKEN = getCacheLoca('token') || ''
const USER_INFO = getCacheLoca('userInfo') || {}
const USER_AUTH = getCacheLoca('userAuth') || []

export const useUserStore = defineStore('user', {
  state: (): userStore_DTYPE => {
    return {
      token: TOKEN, // 用户token
      userInfo: USER_INFO, // 用户信息
      userAuth: USER_AUTH, // 用户权限
    }
  },
  getters: {
    hasLogin(): boolean {
      return Boolean(this.token && this.userInfo)
    },
    hasAuth(state) {
      return (authList: Array<string>) => {
        console.log('%c [ authList ]-24', 'font-size:14px; background:#41b883; color:#ffffff;', authList)
        return authList.some((s) => state.userAuth.includes(s))
      }
    },
  },
  actions: {
    setCache(params: Partial<setCache_params_DTYPE>) {
      this.$patch(params)
      for (const key in params) {
        setCacheLoca(key, params[key as keyof userStore_DTYPE])
      }
    },
    logout() {
      this.$patch({ token: '', userInfo: {}, userAuth: [] })
      delCache('token')
      delCache('userInfo')
      delCache('userRole')
    },
    pushAuth(auth: string | Array<string>) {
      if (typeof auth === 'string') {
        this.userAuth.push(auth)
      } else {
        this.userAuth = [...new Set([...this.userAuth, ...auth])]
      }
      this.setCache({ userAuth: this.userAuth })
    },
  },
})

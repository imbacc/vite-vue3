import type { userStore_DTYPE, setCache_params_DTYPE } from '#/store/user'

import { setCacheLoca, getCacheLoca, delCache } from 'imba-cache'

export const useUserStore = defineStore('user', {
  state: (): userStore_DTYPE => {
    return {
      token: getCacheLoca('token') || '',
      userInfo: getCacheLoca('userInfo') || {},
      userAuth: getCacheLoca('userAuth') || [],
    }
  },
  getters: {
    hasLogin(state): boolean {
      return Boolean(state.token && state.userInfo)
    },
    hasAuth(state) {
      return (authList: Array<string>) => authList.some((s) => state.userAuth.includes(s))
    },
  },
  actions: {
    logout() {
      this.$patch({ token: '', userInfo: {}, userAuth: [] })
      delCache('token')
      delCache('userInfo')
      delCache('userRole')
    },
    setStoreCache(params: Partial<setCache_params_DTYPE>) {
      this.$patch(params)
      for (const key in params) {
        setCacheLoca(key, params[key as keyof userStore_DTYPE])
      }
    },
    pushAuth(auth: string | Array<string>) {
      if (typeof auth === 'string') {
        this.userAuth.push(auth)
      } else {
        this.userAuth = [...new Set([...this.userAuth, ...auth])]
      }
      this.setStoreCache({ userAuth: this.userAuth })
    },
  },
})

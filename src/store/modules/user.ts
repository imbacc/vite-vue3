import type { userStore_DTYPE } from '#/store/user'

export const useUserStore = defineStore('user', {
  state: (): userStore_DTYPE => {
    return {
      token: '',
      userInfo: {},
    }
  },
  getters: {
    hasLogin(state): boolean {
      return Boolean(state.token && state.userInfo)
    },
  },
  actions: {
    test() {
      this.utSetCache({ token: 'vue3 token', userInfo: { username: 'imbacc', password: 'vite2vue3' } })
    },
    loginOut() {
      window.location.replace('/login')
    },
  },
})

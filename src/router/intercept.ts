import type { Router } from 'vue-router'

import { start, done } from 'nprogress'

let befor = () => { }
let after = () => { }
let error = () => { }

export default (router: Router) => {
  befor?.()
  after?.()
  error?.()

  // 前置
  befor = router.beforeEach(async (to, from, next) => {
    start()

    const userStore = useUserStore()
    const authStore = useAuthStore()

    // 白名单跳过
    if (authStore.hasWhiteIgnore(to.path)) {
      next()
      return
    }

    // 没有登陆
    if (!userStore.hasLogin) {
      next('/login')
      return
    }

    const metaAuth = to.meta.auth as Array<string>
    if (metaAuth && Array.isArray(metaAuth)) {
      if (!authStore.hasRouterAuth(metaAuth)) {
        console.error(`${to.path} 没有权限! ${metaAuth}`)
        next('/401')
        return
      }
    }

    next()
  })

  // 后置
  after = router.afterEach((_to, _from) => {
    done()
  })

  // err
  error = router.onError((err) => {
    console.log('err', err)
  })
}

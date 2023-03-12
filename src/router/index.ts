import { router } from '@/router/create'
import { start, done } from 'nprogress'

// configure({ showSpinner: false })

// ...前置
router.beforeEach(({ path, meta }, from, next) => {
  start()

  const userStore = useUserStore()
  const authStore = useAuthStore()

  // 白名单跳过
  if (authStore.hasIgnore(path)) {
    next()
    return
  }

  // 没有登陆
  if (!userStore.hasLogin) {
    next('/login')
    return
  }

  console.log('%c [ meta ]-26', 'font-size:14px; background:#41b883; color:#ffffff;', meta)
  const metaAuth = meta.auth as Array<string>
  console.log('%c [ metaAuth ]-26', 'font-size:14px; background:#41b883; color:#ffffff;', metaAuth)
  // 判断是否有权限
  if (metaAuth) {
    if (!authStore.hasAuth(metaAuth)) {
      console.error('没有权限!', window?.location?.pathname)
      next('/401')
      return
    }
  }
  next()
})

// ...后置
router.afterEach((_to, _from) => {
  done()
})

// err
router.onError((err) => {
  console.log('err', err)
})

export default router

import router from '@/router/index.js'
import { useUserStore } from '@/store/user.js'

import { configure, start, done } from 'nprogress'

configure({ showSpinner: false })

// 跳过
const jump_list = ['/401', '/404']
// 检查权限
// const userRole = () => useUserStore().userRole
// 检查登录
// const checkLogin = () => useUserStore().token

// ...前置
router.beforeEach(({ path }, _from, next) => {
  const userStore = useUserStore()

  start()

  const ignore = jump_list.includes(path)
  if (path === '/login' || ignore) {
    next()
    return
  }

  if (!ignore && !userStore.hasLogin) {
    next('/login')
    return
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

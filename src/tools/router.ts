import router from '@/router/index'
import { configure, start, done } from 'nprogress'

configure({ showSpinner: false })

// 白名单跳过
const whiteList = ['/login', '/401', '/404']

// ...前置
router.beforeEach(({ path }, _from, next) => {
  const userStore = useUserStore()

  start()

  const ignore = whiteList.includes(path)
  if (ignore) {
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

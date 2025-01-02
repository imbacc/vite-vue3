import App from './App.vue'

import { createPiniaStore } from '@/store/create'
import { createRouterMode } from '@/router/create'
import direct from '@/directive/index'

// 全局样式
import 'uno.css'
import 'nprogress/nprogress.css'

const setup = async () => {
  const app = createApp(App)

  const store = await createPiniaStore()
  app.use(store)

  const router = await createRouterMode()
  app.use(router)

  app.use(direct)
  app.mount('#app')
}

setup()

// 全局 property
// app.config.globalProperties.xx = 'xx'

// 处理错误
// app.config.errorHandler = (err, vm, info) => {
//   // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
// }

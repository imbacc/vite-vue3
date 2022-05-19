import { createApp } from 'vue'
import App from './App.vue'

// store 和 router
import store from '@/common/store/index'
import router from '@/common/tools/cmakeRouter'

// js
import { env, isCdn } from '@/common/config/cfg.js'
import direct from '@/common/directive/index' // 指令

// 全局样式
import 'virtual:windi.css' // 原始样式都给我干没了
import 'nprogress/nprogress.css'

const app = createApp(App)
app.use(direct)
app.use(store)
app.use(router)
app.mount('#app')

console.log('import.meta.env', env)

// 全局 property
app.config.globalProperties.is_cdn = isCdn

// dev工具
// app.config.devtools = is_dev

// 处理错误
// app.config.errorHandler = (err, vm, info) => {
//   // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
// }

//
// 全局注册组件
// app.component('component-a', {
// mounted() {
// 	console.log(this.foo) // 'bar'
// }
// })

// 全局注册组件指令
// app.directive('focus', {
// mounted() {
// 	el => el.focus()
// }
//   mounted: el => el.focus()
// })

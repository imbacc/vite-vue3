import { createApp } from 'vue'
import App from './App.vue'

import { store, initLzayStore } from './common/store/index.js'
import { router, initLzayRouter } from './common/tools/cmake_router.js'

// 全局样式
import './styles/index.scss'
import 'nprogress/nprogress.css'

const app = createApp(App)
Promise.allSettled([initLzayStore(), initLzayRouter()]).then(() => {
	app.use(store)
	app.use(router)
	app.mount('#app')
})

console.log('import.meta.env', import.meta.env)

// 全局 property
app.config.globalProperties.is_cdn = 'https://www.baidu.com/static/img/'

// dev工具
app.config.devtools = true

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

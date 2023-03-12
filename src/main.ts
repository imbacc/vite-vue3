import App from './App.vue'

import router from '@/router/index'
import direct from '@/directive/index'

// 全局样式
import 'uno.css'
import 'nprogress/nprogress.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(direct)
app.mount('#app')

// 全局 property
// app.config.globalProperties.xx = 'xx'

// 处理错误
// app.config.errorHandler = (err, vm, info) => {
//   // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
// }

//
// 全局注册组件
// app.component('component-a', {
// mounted() {
// console.log(this.foo) // 'bar'
// }
// })

// 全局注册组件指令
// app.directive('focus', {
// mounted() {
// el => el.focus()
// }
//   mounted: el => el.focus()
// })

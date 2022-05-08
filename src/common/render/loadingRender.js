import { ref, render, h } from 'vue'
import loadingComp from '@/components/loading/loading.vue'

class CompRender {
  constructor(option) {
    this.comp = null
    this.option = option || {}
    this.container = null
    this.time = null
  }

  init() {
    const { comp, option } = this
    if (comp) return comp.component.proxy
    this.comp = h(loadingComp, option)
    this.container = document.createElement('div')
    // 渲染组件
    render(this.comp, this.container)
    // 将模态框添加至 body
    document.querySelector('#app').appendChild(this.container.firstElementChild)
    return this.comp.component.proxy
  }

  // 调用组件函数
  open() {
    this.init().open()
    return this
  }

  close() {
    clearTimeout(this.time)
    this.time = setTimeout(() => {
      clearTimeout(this.time)
      this.init().close()
    }, 300)
    return this
  }

  // 卸载
  destroy() {
    render(null, this.container)
    this.comp = null
    this.option = {}
    this.container = null
    this.time = null
  }
}

export default new CompRender()

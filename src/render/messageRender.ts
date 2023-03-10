// import type { CompRender_DTYPE } from '#/render/loadingRender'
// import type { Component } from 'vue'

// import { render, h } from 'vue'
// import messageComp from '@/components/Message/Message.vue'

// class MessageRender implements CompRender_DTYPE {
//   public comp: Component | any
//   public option: { [x: string]: any }
//   public container: HTMLElement | null
//   private time: NodeJS.Timeout | null

//   constructor(option?: { [key in string]: any }) {
//     this.comp = null
//     this.option = option || {}
//     this.container = null
//     this.time = null
//   }

//   init() {
//     const { comp, option } = this
//     if (comp) return comp.component
//     this.comp = h(messageComp, option)
//     this.container = document.createElement('div')
//     // 渲染组件
//     render(this.comp, this.container)
//     // 将模态框添加至 body
//     document.querySelector('#app')?.appendChild(this.container.firstElementChild as Element)
//     return this.comp.component
//   }

//   // 调用组建函数
//   send(...args: [string, string]) {
//     this.init().message(...args)
//     return this
//   }

//   hide() {
//     clearTimeout(this.time as NodeJS.Timeout)
//     this.time = setTimeout(() => {
//       clearTimeout(this.time as NodeJS.Timeout)
//       this.init().hide()
//     }, 6000)
//   }

//   // 卸载
//   destroy() {
//     render(null, this.container as Element)
//   }
// }

// export default new MessageRender()

// import type { CompRender_DTYPE } from '#/render/loadingRender'
// import type { Component, DefineComponent } from 'vue'

// import { render } from 'vue'

// class CompRender implements CompRender_DTYPE {
//   public instance: Component | null
//   public option: { [key in string]: any }
//   public container: HTMLElement | null
//   private selector: string
//   private component: DefineComponent

//   constructor(component: DefineComponent, option?: { [key in string]: any }, selector?: string) {
//     this.option = option || {}
//     this.container = null
//     this.component = component
//     this.selector = selector || '#app'
//   }

//   init() {
//     if (this.instance) return this.instance
//     this.instance = h(this.component, this.option, {
//       // default: () => 'default',
//     //   foo: () => 'foo',
//     //   bar: () => 'bar'
//     })
//     console.log('%c [ this.instance ]-21', 'font-size:14px; background:#41b883; color:#ffffff;', this.instance)
//     this.container = document.createElement('div')

//     // render(this.instance, this.container)
//     // document.querySelector(this.selector)?.appendChild(this.container.firstElementChild as Element)
//     return this.instance.component
//   }

//   // 卸载
//   destroy() {
//     render(null, this.container as Element)
//     this.instance = null
//     this.option = {}
//     this.container = null
//     this.selector = '#app'
//   }
// }

// export default CompRender

import { createVNode, render } from 'vue'

import ToastMsg from '@/components/ToastMsg/index.vue'
import ToastMsg2 from '@/components/ToastMsg/index2.vue'

const queue: any[] = []
export const useShowToast = (msg: string, time = 2000) => {
  // 准备dom容器
  const div = document.createElement('div')
  document.querySelector('#modal')?.appendChild(div)

  const vnode = createVNode(ToastMsg, { msg })
  render(vnode, div)
  queue.push(msg)

  const t = setTimeout(() => {
    clearTimeout(t)
    render(null, div)
    div.remove()
    queue.pop()
  }, time + (queue.length * 300))
}

const queue2: any[] = []
export const useShowToast2 = (msg: string, time = 3000) => {
  // 准备dom容器
  const div = document.createElement('div')
  document.querySelector('#modal')?.appendChild(div)

  const vnode = createVNode(ToastMsg2, { msg })
  render(vnode, div)
  queue2.push(msg)

  const t = setTimeout(() => {
    clearTimeout(t)
    render(null, div)
    div.remove()
    queue2.pop()
  }, time + (queue2.length * 300))
}

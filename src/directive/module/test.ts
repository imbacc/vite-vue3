import type { App } from 'vue'

export default (app: App) => {
  const userStore = useUserStore()

  app.directive('test', {
    // Directive has a set of lifecycle hooks:
    // called before bound element's parent component is mounted
    beforeMount() {},
    // called before the containing component's VNode is updated
    beforeUpdate() {},
    // called after the containing component's VNode and the VNodes of its children // have updated
    updated() {},
    // called before the bound element's parent component is unmounted
    beforeUnmount() {},
    // called when the bound element's parent component is unmounted
    unmounted() {},
    mounted(el, binding, vnode) {
      if (!el || !binding.value) return
      console.log('v-test directive el-binding-vnode', el, binding, vnode)
      el.onclick = () => alert('有权限!点鸡毛啊,看代码!')
      if (!userStore.hasAuth(binding.value)) {
        el.parentNode.removeChild(el)
      }
    },
  })
}

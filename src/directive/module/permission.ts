import type { App } from 'vue'

// import { usePermission } from '@/store/permission'

export default (app: App) => {
  // const { hasPermission } = usePermission()

  app.directive('test', {
    // Directive has a set of lifecycle hooks:
    // called before bound element's parent component is mounted
    beforeMount() { },
    // called before the containing component's VNode is updated
    beforeUpdate() { },
    // called after the containing component's VNode and the VNodes of its children // have updated
    updated() { },
    // called before the bound element's parent component is unmounted
    beforeUnmount() { },
    // called when the bound element's parent component is unmounted
    unmounted() { },
    mounted(el, binding, vnode) {
      if (!el || !binding.value) return
      const value = binding.value
      // if (!value) return
      // if (!hasPermission(value)) {
      //   el.parentNode?.removeChild(el)
      // }
    },
  })
}

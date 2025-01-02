import type { App } from 'vue'

export default (app: App) => {
  app.directive('hook', {
    mounted(el, binding, vnode) {
      if (!el || !binding.value) return
      if (binding.arg === 'mounted' && typeof binding.value === 'function') {
        binding.value()
      }
    },
    unmounted(el, binding, vnode) {
      if (!el || !binding.value) return
      if (binding.arg === 'unmounted' && typeof binding.value === 'function') {
        binding.value()
      }
    },
  })
}

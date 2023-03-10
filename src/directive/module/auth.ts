import type { App } from 'vue'

export default (app: App) => {
  const userStore = useUserStore()

  app.directive('auth', {
    created() {},
    beforeMount() {},
    mounted(el, binding, vnode) {
      if (!el || !binding.value) return
      console.log('%c [ v-auth directive ]-21', 'font-size:14px; background:#41b883; color:#ffffff;', el, binding, vnode)
      if (!userStore.hasAuth(binding.value)) {
        el.parentNode.removeChild(el)
      } else {
        el.onclick = () => console.log('有权限click!', binding.value)
      }
    },
    beforeUpdate() {},
    updated() {},
    beforeUnmount() {},
    unmounted() { },
    // deep: true,
  })
}

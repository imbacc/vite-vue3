import { useUserStore } from '@common/store/user.js'

const userStore = useUserStore()

const hasAuth = (role_list) => {
  const userRole = userStore.userRole
  if (userRole && Array.isArray(userRole) && Array.isArray(role_list)) {
    const some = role_list.some((s) => userRole.includes(s))
    return some
  }
  return false
}

export default (app) => {
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
      el.onclick = () => alert('点鸡毛啊看代码!')
      if (!hasAuth(binding.value)) {
        el.parentNode.removeChild(el)
        return
      }
    }
  })
}

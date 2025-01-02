<template>
  <div>
    <RouterLink to="/about">
      About
    </RouterLink>
    |
    <RouterLink to="/action">
      Action
    </RouterLink>
    |
    <button v-auth="['test', 'qqq']" @click="alert">
      测试v-auth,加权'qweasd'去action
    </button>

    <button @click="auth">
      点我加权'action'
    </button>

    <button @click="loginOut">
      退出登录
    </button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const authStore = useAuthStore()
const userStore = useUserStore()

console.log('%c [ toRaw(authStore.$state) ]-31', 'font-size:14px; background:#41b883; color:#ffffff;', toRaw(authStore.$state))

function alert() {
  // eslint-disable-next-line no-alert
  window.alert('能点')
  authStore.pushRouterAuth('qweasd')
  router.push('/action')
}

function auth() {
  if (authStore.hasMeshAuth(['test'])) {
    // window.alert('已经点过了')
    authStore.pushMeshAuth(Math.random().toString())

    const value = authStore.utGetCache('meshAuthList')
    console.log('%c [ value ]-42', 'font-size:14px; background:#41b883; color:#ffffff;', value)
    if (value.length >= 10) {
      authStore.utClearCache(['meshAuthList'])
      console.log('%c [ authStore ]-45', 'font-size:14px; background:#41b883; color:#ffffff;', toRaw(authStore.$state))
    }
    return
  }
  authStore.pushMeshAuth(['test', 'qqq'])
  authStore.pushRouterAuth('action')
  window.location.reload()
}

function loginOut() {
  authStore.utClearCache()
  userStore.utClearCache()
  window.location.reload()
}
</script>

<style>
</style>

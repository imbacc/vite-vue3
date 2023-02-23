<script setup lang="ts">
// setup 方式书写 实验阶段正式环境不建议
import { useUserStore } from '@/common/store/user.js'
import { useRouter } from 'vue-router'

const { replace } = useRouter()
const userStore = useUserStore()

const login = () => {
  userStore.token = 'vue3 token'
  userStore.userInfo = { username: 'imbacc', password: 'vite2vue3' }

  replace({ path: '/' })
}
</script>

<template>
  <div>login user</div>
  <button @click="login">
    login
  </button>
</template>

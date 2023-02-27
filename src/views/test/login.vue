<script setup lang="ts">
import { useUserStore } from '@/store/user'
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

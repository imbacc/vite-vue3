<template>
  <div>
    <router-link to="/about">
      About
    </router-link>
    |
    <router-link to="/action">
      Action
    </router-link>
    |
    <button v-auth="['test']">
      测试 directive v-auth
    </button>

    <button @click="auth">
      点我授权去Action
    </button>
  </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore()

const auth = () => {
  authStore.pushAuth('test')
}
</script>

<style>
</style>

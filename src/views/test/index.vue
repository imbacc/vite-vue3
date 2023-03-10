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
    <button v-test="['test']">
      测试 directive v-test
    </button>

    <button @click="auth">
      点我授权去Action
    </button>
  </div>
</template>

<script setup lang="ts">
const userStore = useUserStore()

const a = $ref('aaa')

const auth = () => {
  userStore.pushAuth('test')
}
</script>

<style>
</style>

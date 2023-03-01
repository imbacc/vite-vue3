<template>
  <div>
    <router-link to="/home">
      Home
    </router-link>
    |
    <router-link to="/about">
      About
    </router-link>
    |
    <router-link to="/reactive">
      Reactive
    </router-link>
    |
    <router-link to="/action">
      Action
    </router-link>
    |
    <router-link to="/win">
      测试 windi
    </router-link>
    |
    <button v-test="['test']">
      测试 directive v-test
    </button>
  </div>

  <p />
  <div>
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

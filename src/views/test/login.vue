<template>
  <div>
    <div>login user</div>
    <button @click="login">
      login
    </button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const userStore = useUserStore()

function login() {
  userStore.test()
  router.replace({ path: '/' })
}
</script>

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

const login = () => {
  userStore.test()
  router.replace({ path: '/' })
}
</script>

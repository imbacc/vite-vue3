<template>
  <a href="javascript:history.back(-1)">返回上一页</a>
  <p />
  <div>
    <hr>
    <h1>{{ userStore }}</h1>
  </div>
</template>

<script setup lang="ts">
const userStore = useUserStore()
</script>

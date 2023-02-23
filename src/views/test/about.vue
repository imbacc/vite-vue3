<script setup lang="ts">
import { useUserStore } from '@/common/store/user.js'
const userStore = useUserStore()
</script>

<template>
  <a href="javascript:history.back(-1)">返回上一页</a>
  <p />
  <div>
    <hr>
    <h1>{{ userStore }}</h1>
  </div>
</template>

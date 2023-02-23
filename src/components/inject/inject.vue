<script setup lang="ts">
import { watchEffect, toRefs, defineProps } from 'vue'
import { useState } from '@/common/provide/num'

defineProps({ msg: String })

const { num } = toRefs(useState())
watchEffect(() => console.log(`watchEffect num: ${num.value}`))
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>inject num = {{ num }}</h1>
  </div>
</template>

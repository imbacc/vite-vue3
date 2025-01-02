<template>
  <div
    class="flex-center-align fixed w-[fit-content] top-45% left-45% right-0 animate-fade-in-up animate-duration-[0.3s] pointer-events-none z-999"
  >
    <div
      class="h-30px inline-flex bg-[rgba(0,0,0,0.6)] flex-center-align text-[#fff] p-20px rounded-4px"
      style="margin: 0 atuo;"
    >
      {{ msg }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

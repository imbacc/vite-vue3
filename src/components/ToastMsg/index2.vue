<template>
  <div
    class="flex-center-align fixed w-[fit-content] top-45% left-45% right-0 animate-fade-in-up animate-duration-[0.3s] pointer-events-none z-999"
  >
    <div
      class="h-40px inline-flex bg-[#fff] flex-center-align text-[#179b55] p-20px rounded-6px box-shadow"
      style="margin: 0 atuo;"
    >
      {{ msg }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

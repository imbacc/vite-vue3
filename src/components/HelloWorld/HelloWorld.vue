<script setup lang="ts">
import logoPng from '@/assets/logo.png'

const props = defineProps({ msg: String })
const emit = defineEmits(['call'])

console.log('props=', props)
// ---reactive---
const value = ref(0)

// ---function---
const onclick = (msg: string) => emit('call', msg)

const refClick = () => {
  console.log('refclick...')
  fetch('/api/index/ddd')
    .then((res) => res.json())
    .then((res) => {
      console.log('/api/index/ddd', res)
    })
}
</script>

<template>
  <div>
    <img alt="Vue logo" :src="logoPng">
    <h1>{{ props.msg }}</h1>
    <button @click="value++">
      count is: {{ value }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code>
      to test hot module replacement.
    </p>
    <button @click="onclick('ddd')">
      onclick onclick onclick
    </button>
  </div>
</template>

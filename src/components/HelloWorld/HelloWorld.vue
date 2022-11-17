<template>
	<div>
		<img alt="Vue logo" :src="logoPng" />
		<h1>{{ props.msg }}</h1>
		<button @click="value++">count is: {{ props.value }}</button>
		<p>
			Edit
			<code>components/HelloWorld.vue</code>
			to test hot module replacement.
		</p>
		<button @click="onclick(false)">onclick onclick onclick</button>
	</div>
</template>

<script setup lang="ts">
	import logoPng from '@/assets/logo.png'

	import { reactive, defineProps, defineEmits } from 'vue'

	const props = defineProps({ msg: String })
	const emit = defineEmits(['call'])

	console.log('props=', props)
	// ---reactive---
	const data = reactive({ value: 0 })

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

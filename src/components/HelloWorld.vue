<template>
	<div>
		<img alt="Vue logo" src="src/assets/logo.png" />
		<h1>{{ msg }}</h1>
		<button @click="count.value++">count is: {{ count.value }}</button>
		<p>
			Edit
			<code>components/HelloWorld.vue</code>
			to test hot module replacement.
		</p>
		<button @click="onclick(false)">onclick onclick onclick</button>
	</div>
</template>

<script setup>
//setup 方式书写
// useContext reactive 需放前面
import { useContext, reactive, defineProps, defineEmit } from 'vue'
const prop = defineProps({ msg: String })
const emit = defineEmit(['call'])
const onclick = (msg) => emit('call', msg)
const count = reactive({ value: 0 })
const context = useContext()
// console.log('slots=', context.slots)
// console.log('emit=', context.emit)
// console.log('expose=', context.expose) //对外暴露函数

context.expose({
	refClick() {
		console.log('refclick...')
		fetch('/api/user')
			.then((res) => res.json())
			.then((res) => {
				console.log('/api/user', res)
			})
	}
})

// vue3 setup(props, context) 书写
// export default {
//   name: 'HelloWorld',
//   props: {
//     msg: String
//   },
//	 emit: ['call']
// }
//
</script>

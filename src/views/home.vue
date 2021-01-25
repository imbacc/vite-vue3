<template>
	<div class="home">
		<img alt="Vue logo" src="src/assets/logo.png" />
		<HelloWorld :msg="react.msg" @call="callClick" ref="hw_ref" />
		<button @click="callClick('ref 操作 HelloWorld')">ref 操作 HelloWorld</button>
		--------------------------------------------
	</div>
</template>

<script setup>
//setup 方式书写
import HelloWorld from '@components/HelloWorld.vue'
// ref 要丢前面
import { ref, onMounted, reactive } from 'vue'
const react = reactive({ msg: 'Welcome to Your vite2 + vue3' })
const hw_ref = ref(null) // 直接映射到ref相同名字

const callClick = (e) => {
	console.log('callClick hhhhhhhhhh')
	if (e) {
		console.log('hw_ref=', hw_ref)
		hw_ref.value.refClick()
		react.msg = e
	}
}
</script>

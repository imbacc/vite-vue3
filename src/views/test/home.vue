<template>
	<a href="javascript:history.back(-1)">返回上一页</a>
	<div class="home">
		<img alt="Vue logo" :src="logoPng" />
		<HelloWorld :msg="data.msg" @call="callClick" ref="childRef" />
		<button @click="callClick('ref 操作 HelloWorld')">ref 操作 HelloWorld</button>
		--------------------------------------------
	</div>
</template>

<script setup>
	import { reactive, toRefs, ref } from 'vue'
	import logoPng from '@/assets/logo.png'

	// ---reactive---
	const data = reactive({ ddd: 'ddd', msg: 'Welcome to Your vite2 + vue3' })
	// ---ref---
	const childRef = ref()

	// ---function---
	const callClick = (e) => {
		console.log('callClick hhhhhhhhhh')
		if (e) {
			console.log('childRef=', childRef)
			childRef.value.refClick()
			data.msg = e
		}
	}
</script>

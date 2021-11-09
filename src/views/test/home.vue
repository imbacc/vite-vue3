<template>
	<a href="javascript:history.back(-1)">返回上一页</a>
	<div class="home">
		<img alt="Vue logo" :src="logo_png" />
		<HelloWorld :msg="msg" @call="callClick" ref="childRef" />
		<button @click="callClick('ref 操作 HelloWorld')">ref 操作 HelloWorld</button>
		--------------------------------------------
	</div>
</template>

<script>
	import { reactive, toRefs, ref } from 'vue'
	import logo_png from '@/assets/logo.png'

	export default {
		setup() {
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

			return {
				// ---reactive---
				...toRefs(data),
				// ---ref---
				childRef,
				// ---function---
				callClick,
				// ---other---
				logo_png
			}
		}
	}
</script>

<template>
	<div v-show="bool" class="csc">feel csc 0731</div>
</template>

<script>
	import { ref } from 'vue'

	export default {
		setup() {
			const bool = ref(false)

			const message = (msg, type) => {
				console.log('msg', msg)
				console.log('type', type)
				bool.value = true
				alert(`msg: ${msg} | type: ${type}`)
				// hide()
			}

			const hide = () => {
				bool.value = false
			}

			return {
				bool,
				message,
				hide
			}
		}
	}
</script>

<style scoped>
	.csc {
		font-size: 66px;
	}
</style>

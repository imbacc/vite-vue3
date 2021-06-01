<template>
	<div>
		<h1>{{ msg }}</h1>
		<h1>inject num = {{ numObj.num }}</h1>
	</div>
</template>

<script>
import { watchEffect, defineComponent } from 'vue'
import { useState } from '../common/provide/num.js'

export default defineComponent({
	props: {
		msg: String
	},
	setup() {
		const numObj = useState()
		watchEffect(() => console.log(`watchEffect num: ${numObj.num}`))

		return {
			numObj
		}
	}
})
</script>

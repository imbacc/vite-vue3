<template>
	<div>
		<h1>{{ msg }}</h1>
		<h1>inject num = {{ numObj.num }}</h1>
	</div>
</template>

<script setup>
//setup 方式书写
import { watchEffect, defineProps } from 'vue'
import { useState } from '../common/provide/num.js'

defineProps({ msg: String })
const numObj = useState()
watchEffect(() => console.log(`watchEffect num: ${numObj.num}`))

// vue3 setup(props, context) 书写
// 	import { watchEffect } from 'vue'

// 	import { useState } from '../common/provide/num.js'

// 	export default {
// 	  props: {
// 		msg: String
// 	  },
// 	  setup(aa,bb){
// 		  const numObj = useState()

// 		  watchEffect(() => {
// 		    console.log(`watchEffect set num: ${numObj.num}`)
// 		  })

// 		  return {
// 			  numObj
// 		  }
// 	  }
// 	}
//
//
</script>

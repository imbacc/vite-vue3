<template>
	<div>
		<img src="src/assets/logo.png" />
		<h1>This is about page</h1>
		<hr />
		<h1>{{ title }}</h1>
		<button @click="update">更新标题</button>
	</div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, getCurrentInstance } from 'vue'
const { ctx } = getCurrentInstance() // ctx => vue2 vm
console.log(ctx.is_cdn) // 全局 property main.js -> app.config.globalProperties.is_cdn
const store = useStore()

const title = computed(() => store.state.title)
const update = () => store.commit('set_vuex', ['title', 'vue3 composition...'])
</script>

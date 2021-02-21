<template>
	<div>
		<button @click="register">点击我懒加载test_vuex copy_vuex模块 js</button>
		<button @click="update_test">点我修改test_vuex copy_vuex模块 模块内容(需要先加载 test_vuex copy_vuex模块模块)</button>
		<img src="src/assets/logo.png" />
		<h1>This is about page</h1>
		<hr />
		<h1>{{ title }}</h1>
		<button @click="update">更新标题</button>
	</div>
</template>

<script setup>
import { registerStore } from '@/common/store/index.js'
import { useStore } from 'vuex'
import { computed, getCurrentInstance } from 'vue'
const { ctx } = getCurrentInstance() // ctx => vue2 vm
const { commit, state } = useStore()

console.log('初始化 state', state)
console.log('ctx.is_cdn', ctx.is_cdn)
console.log(ctx.is_cdn) // 全局 property main.js -> app.config.globalProperties.is_cdn

const title = computed(() => state.title)
const update = () => commit('set_vuex', ['title', 'vue3 composition...'])
const register = () => registerStore(['test_vuex', 'copy_vuex'])
const update_test = () => {
	commit('test_vuex/set_vuex', ['test', '我修改了test_vuex的state内容!'])
	commit('copy_vuex/set_vuex', ['name', '我修改了copy_vuex的state内容!'])
	console.log('修改后 state', state)
}
</script>

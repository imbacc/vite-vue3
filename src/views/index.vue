<template>
	<div>
		<router-link to="/home">Home</router-link>
		|
		<router-link to="/about">About</router-link>
		|
		<router-link to="/reactive">Reactive</router-link>
		|
		<router-link to="/action">Action</router-link>
	</div>
	<p></p>
	<div>
		<button @click="auth">点我授权去Action</button>
	</div>
</template>

<script setup>
import { useStore } from 'vuex'

const { commit } = useStore()
const auth = () => {
	commit('user_vuex/set_role', ['user']) // 添加user权限
	alert('授权完成,看缓存')
}
</script>

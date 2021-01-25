<template>
	<div>login user</div>
	<button @click="login">login</button>
</template>

<script setup>
import { useStore } from 'vuex'
import { getCurrentInstance } from 'vue'
const { ctx } = getCurrentInstance() // ctx => vue2 vm
const store = useStore()

const login = () => {
	store.commit('user_vuex/set_vuex', ['token', 'vue3 token'])
	store.commit('user_vuex/set_vuex', ['user_info', { username: 'imbacc', password: 'vite2vue3' }])
	ctx.$router.push('/')
}
</script>

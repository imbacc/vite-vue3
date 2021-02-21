<template>
	<div>login user</div>
	<button @click="login">login</button>
</template>

<script setup>
import { useStore } from 'vuex'
import { registerRouter } from '@/common/router/index.js'

const { commit } = useStore()

const login = () => {
	commit('user_vuex/set_token', 'vue3 token')
	commit('user_vuex/set_userInfo', { username: 'imbacc', password: 'vite2vue3' })
	commit('user_vuex/set_vuex', ['is_login_page', false])

	registerRouter(['init_module', 'action_module', 'test_module']).then((router) => {
		router.replace({ path: '/' })
	})
}
</script>

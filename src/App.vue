<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>
			|
			<router-link to="/about">About</router-link>
			|
			<router-link to="/reactive">Reactive</router-link>
			|
			<router-link to="/action">Action</router-link>
		</div>
		<router-view />
	</div>
</template>

<style scoped>
#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>

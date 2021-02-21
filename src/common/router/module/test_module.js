export default [
	{
		path: '/reactive',
		name: 'reactive',
		component: () => import('@views/reactive.vue')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@views/about.vue')
	}
]

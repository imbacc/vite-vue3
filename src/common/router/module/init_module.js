export default [
	{
		path: '/home',
		name: 'home',
		component: () => import('@views/test/home.vue'),
		meta: {
			// auth: ['user']
			router: ['init_module', 'action_module', 'test_module']
		}
	}
]

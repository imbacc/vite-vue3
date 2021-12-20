export default [
	{
		is_proxy: true, // 全局代理专用 必须在第一个数组
		meta: {
			no_cache: 'test_router'
		}
	},
	{
		path: '/test',
		name: 'test',
		component: () => import('@/views/test/index.vue'),
		meta: {
			store: ['test_vuex'],
			father: 'layout',
			child: ['test_child_router']
		}
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('@/views/test/index.vue'),
		meta: {
			store: ['test_vuex'],
			father: 'layout',
			child: ['test_child_router']
		}
	}
]

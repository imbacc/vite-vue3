// 用于懒加载的module
// 特殊需求用

export default [
	{
		path: '/action',
		name: 'action',
		component: () => import('@views/test/action.vue'),
		meta: {
			auth: ['user'] // 权限
		}
	}
]

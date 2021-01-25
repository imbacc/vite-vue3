// test_api module 里的测试接口 mock
export default [
	{
		url: '/api/ddd',
		method: 'get',
		response: () => {
			return {
				code: 0,
				message: 'ok',
				data: '我是/api/ddd 测试数据'
			}
		}
	},
	{
		url: '/api/222/fff',
		method: 'get',
		response: () => {
			return {
				code: 0,
				message: 'ok',
				data: '我是/api/:id/fff 测试数据'
			}
		}
	},
	{
		url: '/api/ddd/333',
		method: 'get',
		response: () => {
			return {
				code: 0,
				message: 'ok',
				data: '我是/api/ddd/:id 测试数据'
			}
		}
	},
	{
		url: '/api/www',
		method: 'get',
		response: () => {
			return {
				code: 0,
				message: 'ok',
				data: '我是/api/www GET 我会缓存10分钟 测试数据 缓存在localStorage里查看'
			}
		}
	},
	{
		url: '/api/eee',
		method: 'post',
		response: () => {
			return {
				code: 0,
				message: 'ok',
				data: '我是/api/eee POST 我会缓存20分钟 测试数据 缓存在localStorage里查看'
			}
		}
	},
	{
		url: '/api/qqq/666/update',
		method: 'post',
		response: () => {
			return {
				code: 0,
				message: '更新成功',
				data: '我是更新接口 不要缓存老子'
			}
		}
	}
]

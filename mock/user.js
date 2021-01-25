// user module 里的测试接口 mock
export default [
	{
		url: '/api/user',
		method: 'get',
		response: () => {
			return {
				code: 0,
				message: 'ok',
				data: {
					name: 'imbacc',
					createTime: '2021-1-25'
				}
			}
		}
	}
]

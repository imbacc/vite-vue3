// test_api module 里的测试接口 mock
export default [
  {
    url: '/mock/api/getTest',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: { dd: '我是/api/getTest 测试数据' },
      }
    },
  },
]

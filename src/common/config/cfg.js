//配置

// 请求体方式
const METHOD = {
	POST: 'POST',
	GET: 'GET',
	PUT: 'PUT'
}

const { clientWidth, clientHeight } = document.body
const sys_config = {
	clientWidth,
	clientHeight
}
const time_out = 9000
const env = import.meta.env
const mode = env.MODE // development or production
const is_dev = Boolean(mode === 'development') // 是否是开发环境
const is_cdn = 'https://www.baidu.com/static/img/'
const page_name = 'page'
const size_name = 'size'

export { METHOD, env, mode, is_dev, is_cdn, time_out, page_name, size_name }

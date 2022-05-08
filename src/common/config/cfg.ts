//配置

// 请求体方式
const METHOD = {
	POST: 'POST',
	GET: 'GET',
	PUT: 'PUT'
}

const { clientWidth, clientHeight } = document.body
const sysConfig = {
	clientWidth,
	clientHeight
}
const timeOut = 3000
const env = import.meta.env
const mode = env.MODE // development or production
const isDev = Boolean(mode === 'development') // 是否是开发环境
const isCdn = 'https://xxx/static/img/'
const pageKey = 'page'
const sizeKey = 'size'

export { METHOD, env, mode, isDev, isCdn, timeOut, pageKey, sizeKey, sysConfig }

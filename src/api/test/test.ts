import http from '@/api/request'

// unplugin-auto-import自动导入的api

export const getTestApi = () => http.request(['/api/getTest', 'GET'])
export const getTest222Api = (id: number) => http.request(['/api/get_test/:id', 'GET'], { _id: `${id}` })
export const getTest333Api = (param = {}, body = {}) => http.request<{ test: number }>(['/api/get_test/three', 'GET'], { _param: param, _body: body })

export const getTest444Api = () => {
  return useRequest<{ dd: string }>(() => http.request(['/api/getTest', 'GET']))
}

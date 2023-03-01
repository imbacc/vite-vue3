import http from '@/tools/request'

export const getTest = () => http.request(['api/get_test', 'GET'])
export const getTest222 = (id: number) => http.request(['api/get_test/:id', 'GET'], { _id: `${id}` })
export const getTest333 = (param = {}, body = {}) => http.request(['api/get_test/three', 'GET'], { _param: param, _body: body })
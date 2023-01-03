import http from '@/tools/request.js'

export const getUser = () => http.request(['api/user', 'GET'], {})

import http from '@/api/request'

export const getUserApi = () => http.request(['/api/user', 'GET'])

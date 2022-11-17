export type METHOD_DTYPE = 'POST' | 'GET' | 'PUT' | 'OPTIONS'
export type api_DTYPE = { [key in string]: string | [string, METHOD_DTYPE] | [string, METHOD_DTYPE, number] }

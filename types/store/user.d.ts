export interface userStore_DTYPE {
  token: string
  userInfo: any
  userAuth: Array<string>
}

export type setCache_params_DTYPE = { [key in keyof userStore_DTYPE]: key extends keyof userStore_DTYPE ? userStore_DTYPE[key] : never }

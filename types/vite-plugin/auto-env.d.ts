export type ENV_DTYPE = {
  /**
   * HOST
   */
  VITE_HOST: string
  /**
   * APP标题
   */
  VITE_GLOB_APP_TITLE: string
  /**
   * mock
   */
  VITE_USE_MOCK: boolean
  /**
   * gzip
   */
  VITE_BUILD_GZIP: boolean
  /**
   * 接口地址
   */
  VITE_GLOB_API_URL: string
  /**
   * 上传地址
   */
  VITE_GLOB_UPLOAD_URL: string
  /**
   * 启动端口
   */
  VITE_PORT: number
  /**
   * 公共路径
   */
  VITE_PUBLIC_PATH: string
  /**
   * 代理数组
   */
  VITE_PROXY: Record<string, any>
  /**
   * 删除console
   */
  VITE_DROP_CONSOLE: boolean
  /**
   * 兼容老版本浏览器
   */
  VITE_LEGACY: boolean
}

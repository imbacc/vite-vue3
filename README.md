# vite2-vue3-ts

# 使用 vite2 构建 vue3

vite2.0 <https://vitejs.dev> vue3.0 <https://v3.cn.vuejs.org>

`pnpm install` `pnpm dev or npm debug` `建议使用pnpm pnpm pnpm!!!`

`pnpm run force` `清除node_module缓存依赖...` `pnpm run debug` `开启debug显示相关debug信息...` `pnpm run serve` `生成线上版本预览...`

[![](https://cloudbase.net/deploy-en.svg)](https://console.cloud.tencent.com/webify/new?tpl=https%3A%2F%2Fgithub.com%2Fimbacc%2Fvite2-vue3)

```
 ├── node_modules                      依赖包
 ├── mock                              mock
 ├── public                            从未在源代码中引用(例如robots.txt)
 ├── vite-plugin                       vite自定义插件
 ├── src                               源代码
 ├── .env                        默认配置
 ├── .env.development            开发配置
 ├── .env.production             线上配置
 ├── package.json                依赖包及配置信息文件
 ├── vite.config.ts              vite配置文件
```

![image](https://github.com/imbacc/vite2-vue3/assets/28825000/c28916c7-a0ce-49e9-8b38-2818338f1567)

unplugin-vue-components包之前生产环境打包是有问题的,现在可以不需要import引用了,解决了!!!

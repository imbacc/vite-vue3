# vite2-vue3

# 使用 vite2 构建 vue3

部分代码已封装成包
<p>
    <a href="https://www.npmjs.com/package/imba-cache">imba-cache</a>
</p>
<p>
    <a href="https://www.npmjs.com/package/imba-lazy">imba-lazy</a>
</p>
<p>
    <a href="https://www.npmjs.com/package/imba-lazy-store-router">imba-lazy-store-router</a>
</p>
<p>
    <a href="https://www.npmjs.com/package/imba-request">imba-request</a>
</p>

掘金文章 -> <https://juejin.cn/post/6931614543999303694>

vite2.0 <https://vitejs.dev> vue3.0 <https://v3.cn.vuejs.org>

`pnpm install` `pnpm dev or npm debug` `建议使用pnpm pnpm pnpm!!!`

`pnpm run force` `清除node_module缓存依赖...`
`pnpm run debug` `开启debug显示相关debug信息...`
`pnpm run serve` `生成线上版本预览...`

[![](https://cloudbase.net/deploy-en.svg)](https://console.cloud.tencent.com/webify/new?tpl=https%3A%2F%2Fgithub.com%2Fimbacc%2Fvite2-vue3)

```
 ├── node_modules                      依赖包
 ├── mock                              mock
 ├── public                            从未在源代码中引用(例如robots.txt)
 ├── vite-plugin                       vite自定义插件
 ├── src                               源代码
 │   ├── assets                        静态资源
 │   ├── common
 │   │     ├── config                  配置信息
 │   │     │      │── module           api模块配置
 │   │     │      │── index.js         api公共配置
 │   │     │      │── cfg.js           全局配置设定
 │   │     ├── provide                 vue3特性抽离 provide 和 inject
 │   │     ├── lib                     js包
 │   │     ├── router                  路由页面配置
 │   │     │      ├── module           router模块配置
 │   │     │      ├── index.js         router配置入口
 │   │     ├── store                   状态管理配置
 │   │     │      ├── module           vuex模块配置
 │   │     │      ├── index.js         vuex配置入口
 │   │     ├── tools                   工具
 │   │     │      ├── cmake_router.js  路由拦截
 │   │     │      ├── cmake_tools.js   自定义工具
 │   │     │      ├── cmake_zintercept.js   请求封装
 │   │     │── components              组件
 │   │     │── styles                  全局样式
 │   │     │── views                   页面入口
 │   │     │── App.vue                 app.vue
 │   │     │── main.js                 入口
 ├── .env                        默认配置
 ├── .env.development            开发配置
 ├── .env.production             线上配置
 ├── package.json                依赖包及配置信息文件
 ├── vite.config.js              vite配置文件
```

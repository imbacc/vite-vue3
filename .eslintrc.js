module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  settings: {
    'import/core-modules': ['uno.css', '~icons/*', 'virtual:svg-icons-register'],
  },
  extends: ['@antfu'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // 未使用变量或者值
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    // if换行
    'curly': 'off',
    'antfu/if-newline': 'off',
    // else换行
    'brace-style': ['error', '1tbs'],
    '@typescript-eslint/brace-style': 'off',
    // 导出名称按字母排序
    'sort-imports': 'off',
    'import/order': 'off',
  },
}

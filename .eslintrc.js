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
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
}

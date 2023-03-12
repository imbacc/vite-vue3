const config = require('imba-eslint-config')
Object.assign(config.rules, this.rules, {
  // vue标签顺序
  'vue/component-tags-order': ['error', {
    order: [['script', 'template'], 'style'],
  }],
})
module.exports = config

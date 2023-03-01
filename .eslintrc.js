const config = require('imba-eslint-config')
Object.assign(config.rules, this.rules, {
  'vue/component-tags-order': ['error', {
    order: [['script', 'template'], 'style'],
  }],
})
module.exports = config

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['standard', 'plugin:vue/recommended'],
  plugins: ['vue'],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'vue/require-default-prop': 0,
    'vue/order-in-components': 0,
    'vue/return-in-computed-property': 0,
    'vue/prop-name-casing': 0,
    'arrow-parens': 0,
    'quote-props': 0,
    'prefer-const': 0,
    'generator-star-spacing': 0,
    'no-use-before-define': 0,
    'no-debugger': 0,
    'no-console': 0
  }
}

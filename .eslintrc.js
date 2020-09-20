module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true
  },
  extends: ['alloy'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
    __WECHAT__: true,
    __ALIPAY__: true,
    App: true,
    Page: true,
    Component: true,
    Behavior: true,
    wx: true,
    my: true,
    swan: true,
    getApp: true,
    getCurrentPages: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'no-debugger': 2,
    'no-unused-vars': 1,
    'no-var': 0,
    'no-param-reassign': 0,
    'no-irregular-whitespace': 0,
    'no-useless-catch': 1,
    'max-params': ['error', 3],
    'array-callback-return': 1,
    eqeqeq: 0,
    indent: ['error', 2, { SwitchCase: 1 }]
  }
}

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'import/no-useless-path-segments': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-unresolved': 'off',
    'import/no-dynamic-require': 'off',
    'import/extensions': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'global-require': 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};

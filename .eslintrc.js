module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    '@nuxtjs/eslint-config-typescript',
    'eslint-config-airbnb-base',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'import/no-useless-path-segments': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-unresolved': 'off',
    'import/no-dynamic-require': 'off',
    'import/extensions': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'func-names': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/no-v-html': 'off',
  },
};

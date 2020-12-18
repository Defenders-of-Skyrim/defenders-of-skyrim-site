module.exports = {
  env: {
    PACKAGE_VERSION: require('./package.json').version,
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  watchers: {
    webpack: {
      ignored: [/\.nuxt\//, /node_modules/],
    },
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Defenders of Skyrim',
    titleTemplate: '%s - Defenders of Skyrim',
    meta: [
      { charset: 'utf-8' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Defenders of Skyrim' },
      { name: 'apple-mobile-web-app-title', content: 'Defenders of Skyrim' },
      { name: 'application-name', content: 'Defenders of Skyrim' },
      { name: 'msapplication-TileColor', content: '#434343' },
      { name: 'msapplication-config', content: '/favicons/browserconfig.xml' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      {
        rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png',
      },
      {
        rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/favicons/site.webmanifest' },
      { rel: 'mask-icon', color: '#5bbad5', href: '/favicons/safari-pinned-tab.svg' },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
      config.module.rules.push({
        test: /\.vue$/,
        loader: 'vue-svg-inline-loader',
      });
    },
  },
  plugins: [
    { src: '~/plugins/components.ts' },
    { src: '~/plugins/axios.ts' },
    { src: '~/plugins/api.ts' },
  ],
  buildModules: [
    '@nuxt/typescript-build',
  ],
  modules: [
    'nuxt-purgecss',
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    ['bootstrap-vue/nuxt'],
    ['nuxt-leaflet'],
    ['nuxt-i18n', {
      defaultLocale: 'en',
      detectBrowserLanguage: false,
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          file: 'en.json',
        },
        {
          code: 'ru',
          iso: 'ru',
          file: 'ru.json',
        },
      ],
      lazy: true,
      langDir: 'locales/',
      vueI18nLoader: true,
      seo: true,
    }],
  ],
  bootstrapVue: {
    components: [
      'BButton',
      'BCard',
      'BCardBody',
      'BCardGroup',
      'BCardHeader',
      'BCardImgLazy',
      'BCardTitle',
      'BDropdownGroup',
      'BDropdownItem',
      'BDropdownText',
      'BFormCheckbox',
      'BFormSelect',
      'BLink',
      'BNav',
      'BNavItem',
      'BNavForm',
      'BNavItemDropdown',
      'BNavbar',
      'BNavbarNav',
      'BNavbarBrand',
      'BNavbarToggle',
    ],
    componentPlugins: [
      'CollapsePlugin',
      'ImagePlugin',
      'ModalPlugin',
      'TabsPlugin',
    ],
    config: {
      breakpoints: ['xs', 'sm', 'md', 'lg', 'xl', 'hg', 'xh', 'xxh'],
    },
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
  },
  purgeCSS: {
    paths: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.ts',
    ],
    whitelist: [
      'a',
      'collapse',
      'hr',
      'show',
      'list-unstyled',
      'html',
      'body',
      'nuxt-progress',
    ],
    whitelistPatterns: [
      /btn/,
      /card/,
      /dropdown/,
      /^fade/,
      /form/,
      /^nav/,
      /select/,
      /skyrim/,
      /^text/,
      /^col-/,
      /^img-/,
      /leaflet/,
      /^mb-/,
      /^px-/,
      /^custom-/,
      /^cool-lightbox/,
    ],
    whitelistPatternsChildren: [
      /btn/,
      /card/,
      /^nav/,
      /skyrim/,
      /^col-/,
      /^img-/,
      /leaflet/,
      /^mb-/,
      /^px-/,
      /^custom-/,
      /^cool-lightbox/,
    ],
  },
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      },
    },
  },
};

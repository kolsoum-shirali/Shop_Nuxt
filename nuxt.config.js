// import colors from 'vuetify/es5/util/colors'
// import env from './config/env.json'
export default {
  target: 'server', // default is 'server'
  // router: {
  //   base: '/Shop_Nuxt/'
  // },
  server: {
    port: 3500, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false,
  },
  head: {
    titleTemplate: '%s - shop',
    title: 'shop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    '@/assets/css/main.css',
    '@/assets/scss/main.scss',
    '@/static/IRANSans/font.css',
  ],

  plugins: [
    '@plugins/mixins/global',
    '@plugins/axios',
    '@plugins/mock',
    '@plugins/jalaliday',
  ],

  components: false,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: ['./assets/scss/_mixin.scss'],
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'vue-toastification/nuxt',
    'nuxt-client-init-module',
    'nuxt-leaflet',
    '@nuxtjs/dayjs',
  ],
  dayjs: {
    locales: ['en', 'fa'],
    defaultLocale: 'fa',
    defaultTimeZone: 'Asia/Tehran',
    plugins: ['utc', 'timezone', 'relativeTime'],
  },
  pwa: {
    short_name: 'فروشگاه اینترنتی',
    name: 'فروشگاه اینترنتی',
    icons: [
      {
        src: 'logo.png',
        sizes: '64x64 32x32 24x24 16x16',
        type: 'image/x-icon',
      },
    ],
    start_url: '.',
    display: 'standalone',
    theme_color: '#000000',
    background_color: '#ffffff',
    manifest: {
      name: 'فروشگاه اینترنتی',
      short_name: 'فروشگاه اینترنتی',
      description: 'فروشگاه اینترنتی',
      lang: 'fa',
      dir: 'rtl',
      //   useWebmanifestExtension: false,
    },
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    rtl: true,
    // theme: {
    //     dark: false,
    //     themes: {
    //         dark: {
    //             primary: colors.blue.darken2,
    //             accent: colors.grey.darken3,
    //             secondary: colors.amber.darken3,
    //             info: colors.teal.lighten1,
    //             warning: colors.amber.base,
    //             error: colors.deepOrange.accent4,
    //             success: colors.green.accent3,
    //         },
    //     },
    // },
  },

  build: {
    extractCSS: {
      ignoreOrder: true,
    },
    minimize: true,
    collapseBooleanAttributes: true,
    decodeEntities: true,
    minifyCSS: true,
    minifyJS: true,
    processConditionalComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    trimCustomFragments: true,
    useShortDoctype: true,
    loaders: {
      vue: {
        prettify: false,
      },
    },
  },
}

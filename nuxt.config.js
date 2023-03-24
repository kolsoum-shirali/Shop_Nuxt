// import colors from 'vuetify/es5/util/colors'
// import env from './config/env.json'
export default {
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

    css: ['@/assets/css/main.css', '@/assets/scss/main.scss'],

    plugins: ['@plugins/mixins/global', '@plugins/axios', '@plugins/mock'],

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
    ],
    pwa: {
        meta: {
          name: 'فروشگاه اینترنتی',
        author:'pwa'
        },
        manifest: {
          lang: 'en',
          name: 'shop',
          short_name:'shop',
          description:'shop'
        },
        icon:{
            sizes:[64,120,256,512,384],
            fileName:'icon.png'
        }
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
            ignoreOrder: true
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
                prettify: false
            }
        }
    }
}
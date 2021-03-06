const {router} = require('./config/routes.js');
const {head} = require('./config/head.js');
const {I18N} = require('./config/i18n.js');

module.exports = {
    router,
    head,
    serverMiddleware: [
        '~/api'
    ],
    css: [
        '@/assets/themes/hd2be/style/app.scss'
    ],
    modules: [
        ['nuxt-i18n', I18N]
    ],
    plugins: [
        {src: '~/plugins/bus', ssr: false},
        {src: '~/plugins/nuxt-client-init', ssr: false},
        {src: '~/plugins/extend-prototype/modal', ssr: false},
        {src: '~/plugins/extend-prototype/storage', ssr: false},
        {src: '~/plugins/api-client/binding.js'},
        {src: '~/plugins/elements/element-io'},
        {src: '~/plugins/element-custom'},
    ],
    transition: 'fade',
    loading: {
        color: '#418000'
    },
    build: {
        extractCSS: {
            allChunks: true
        },
        extend (config, {isDev}) {
            if (isDev && process.client) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                    options: {
                        fix: true
                    }
                })
            }
        }
    }
};

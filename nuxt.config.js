// ========== 应用配置 ==========
const Path = require('path')
const LodashWebpackPlugin = require('lodash-webpack-plugin')
const Pkg = require('./package.json')
const nodeEnv = process.env.NODE_ENV
const isDevMode = ['development', 'analyze'].includes(nodeEnv)

module.exports = {
  srcDir: Path.resolve(__dirname, 'src'),
  globalName: 'cyfe',
  ssr: false,
  target: 'static',
  env: {
    nodeEnv: nodeEnv,
    serverUrl: Pkg.config.serverUrl
  },
  head: {
    title: '陈一发儿',
    titleTemplate: '%s',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '陈一发,陈一发儿'
      },
      {
        hid: 'description',
        name: 'description',
        content: '我陈一发儿最牛逼'
      },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no'
      },
      {
        name: 'renderer',
        content: 'webkit'
      },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge'
      },
      {
        name: 'format-detection',
        content: 'address=no, date=no, email=no, telephone=no'
      },
      {
        name: 'msapplication-tap-highlight',
        content: 'no'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'default'
      },
      {
        name: 'apple-mobile-web-app-title',
        content: '陈一发儿'
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '256x256'
      }
    ],
    script: [
      {
        src: 'https://w.cnzz.com/c.php?id=1276106502'
      }
    ]
  },
  css: [
    {
      lang: 'stylus',
      src: '~/assets/css/common.styl'
    },
    'aplayer/dist/APlayer.min.css'
  ],
  loading: {
    color: '#ffb583',
    failedColor: '#ff2f00',
    height: '3px'
  },
  loadingIndicator: {
    name: 'three-bounce',
    color: '#be2222',
    background: '#fff'
  },
  router: {
    linkActiveClass: 'link-active',
    linkExactActiveClass: 'link-exact-active',
    middleware: ['route']
  },
  generate: {
    dir: 'docs',
    fallback: true,
    subFolders: true
  },
  modules: [
    [
      '@nuxtjs/pwa',
      {
        manifest: {
          name: '陈一发儿',
          short_name: '陈一发儿',
          lang: 'cn',
          display: 'standalone',
          orientation: 'portrait',
          theme_color: '#ff2f00',
          background_color: '#333'
        },
        workbox: false
      }
    ]
  ],
  plugins: [
    '~/plugins/util.js',
    '~/plugins/cookie.js',
    '~/plugins/msg.js',
    '~/plugins/api.js',
    '~/plugins/css-vars-ponyfill.js',
    {
      src: '~/plugins/storage.js',
      mode: 'client'
    },
    {
      src: '~/plugins/clear.js',
      mode: 'client'
    },
    {
      src: '~/plugins/cnzz.js',
      mode: 'client'
    }
  ],
  build: {
    ssr: true,
    cache: false,
    publicPath: '/public/',
    analyze: nodeEnv === 'analyze',
    extractCSS: !isDevMode,
    filenames: {
      app: isDevMode ? '[name].js' : '[chunkhash:7].js',
      chunk: isDevMode ? '[name].js' : '[chunkhash:7].js',
      css: isDevMode ? '[name].css' : '[contenthash:7].css',
      img: isDevMode ? '[path][name].[ext]' : 'img/[hash:7].[ext]',
      font: isDevMode ? '[path][name].[ext]' : 'fonts/[hash:7].[ext]',
      video: isDevMode ? '[path][name].[ext]' : 'videos/[hash:7].[ext]'
    },
    babel: {
      babelrc: false,
      cacheDirectory: undefined,
      plugins: ['lodash', 'date-fns']
    },
    postcss: {
      plugins: {
        'postcss-preset-env': {
          stage: 2,
          autoprefixer: {
            remove: false
          }
        },
        'postcss-pxtorem': {
          rootValue: 12,
          propList: ['*'],
          mediaQuery: true
        },
        cssnano: !isDevMode
          ? {
            preset: 'default',
            reduceIdents: false,
            zindex: false
          }
          : false
      }
    },
    terser: {
      cache: true,
      parallel: true,
      sourceMap: false,
      extractComments: false,
      terserOptions: {
        ie8: false,
        safari10: true,
        ecma: 5,
        mangle: true,
        sourceMap: false,
        compress: {
          warnings: false,
          drop_console: true,
          drop_debugger: true
        },
        output: {
          comments: false,
          beautify: false,
          ascii_only: true
        }
      }
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|styl|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    loaders: {
      fontUrl: { limit: 5000 },
      imgUrl: { limit: 5000 }
    },
    plugins: [
      /* eslint new-cap: 0 */
      new LodashWebpackPlugin({
        shorthands: true,
        cloning: true,
        currying: true,
        collections: true,
        exotics: true,
        guards: true,
        metadata: true,
        deburring: true,
        unicode: true,
        chaining: true,
        memoizing: true,
        coercions: true,
        flattening: true,
        paths: true,
        placeholders: true
      })
    ],
    extend (config, ctx) {
      config.devtool = ctx.isDev ? 'cheap-module-eval-source-map' : false
      config.resolve.alias = Object.assign(config.resolve.alias, {
        vue$: 'vue/dist/vue.esm.js'
      })
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          test: /\.(js|vue)$/,
          enforce: 'pre',
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        })
      }
    }
  }
}

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  mode: 'universal',
  loading: {
    color: 'green'
  },
  head: {
    title: 'Grace wealthness',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/vue2-perfect-scrollbar.js',
      mode: 'client'
    },
    {
      src: '~/plugins/vuelidate.js',
      mode: 'client'
    },
    {
      src: '~/plugins/vt-notifications.js',
      mode: 'client'
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next'
  ],

  auth: {
    strategies: {      
      local: {
        token: {
          property: 'access_token',
        },
        user: {
          property: 'data',
          autoFetch: false
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/user', method: 'get', propertyName: false }
        }
      }
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: `http://localhost:5000`
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }

}

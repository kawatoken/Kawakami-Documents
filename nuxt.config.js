import theme from '@nuxt/content-theme-docs'

export default theme({
  target: 'static',
  head: {
    link: [
      {rel: 'stylesheet', type: 'text/css', href: '/style/main.css'},
    ]
  },
  ssr: true,
  generate: {
        dir: 'docs', // gh_pages/ instead of dist/
//    subFolders: false // HTML files are generated according to the route path
  },
  router: {
    base: '/',
    trailingSlash: false
},
image: {
  staticFilename: '[name][ext]'
},
  docs: {
    primaryColor: '#E24F55'
  },
  modules: ['@nuxt/image',
  ['nuxt-cname-module', { baseUrl: 'myFunnyUrl.com' }],
]
//  buildModules: ['@nuxtjs/html-validator']
})

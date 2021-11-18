import theme from '@nuxt/content-theme-docs'

export default theme({
  target: 'static',
  ssr: true,
  generate: {
        dir: 'docs', // gh_pages/ instead of dist/
//    subFolders: false // HTML files are generated according to the route path
  },
  router: {
    base: '/<repository-name>/'

},
  docs: {
    primaryColor: '#E24F55'
  },
  buildModules: ['@nuxt/image']
//  buildModules: ['@nuxtjs/html-validator']
})


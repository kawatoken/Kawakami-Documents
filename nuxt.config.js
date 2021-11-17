import theme from '@nuxt/content-theme-docs'

export default theme({
  target: 'static',
  generate: {
        dir: 'docs', // gh_pages/ instead of dist/
//    subFolders: false // HTML files are generated according to the route path
  },
  router: {
    base: '/KawaPack.github.io'

},
  docs: {
    primaryColor: '#E24F55'
  }
})


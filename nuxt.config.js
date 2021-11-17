import theme from '@nuxt/content-theme-docs'

export default theme({
  generate: {
        dir: 'docs', // gh_pages/ instead of dist/
//    subFolders: false // HTML files are generated according to the route path
  },
  docs: {
    primaryColor: '#E24F55'
  }
})


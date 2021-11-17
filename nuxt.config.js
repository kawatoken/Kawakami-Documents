import theme from '@nuxt/content-theme-docs'

export default {
  generate: {
        dir: 'docs', // gh_pages/ instead of dist/
    subFolders: false // HTML files are generated according to the route path
  },
  theme: {
  docs: {
    primaryColor: '#E24F55'
  }
}
}


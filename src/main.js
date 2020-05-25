// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('typeface-inter')

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'en' }

    // Add Google Font
    // head.link.push({
    //   rel: 'stylesheet',
    //   href: '"https://fonts.googleapis.com/css?family=Inter:wght@300;400&display=swap'
    // })
}

// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Dorian Zgraggen',
  siteUrl: 'https://www.dorianzgraggen.com',
  // siteDescription: "Hey, I'm Dorian Zgraggen. I run cgbookcase.com, a website with PBR textures and scanned 3D models. I create 3D Renderings, develop VR stuff and design websites",
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'ProjectPost',
        path: './content/work/**/*.md',
        baseDir: './content/work',
        pathPrefix: '/work',
        template: './src/templates/ProjectPost.vue',
        plugins: [
          "remark-attr",
          "remark-container",
          "gridsome-plugin-remark-youtube"
        ]
        
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'LinkPost',
        path: './content/link/**/*.md',
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      // anchorClassName: "icon icon-link",
    }
  },
  // templates: {
  //   ProjectPost: '/work/:slug'
  // }
}

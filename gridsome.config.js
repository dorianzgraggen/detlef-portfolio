// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Dorian Zgraggen',
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
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'ProjectPost',
        path: './content/work/**/*.md',
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
      // global remark options
    }
  },
  templates: {
    ProjectPost: '/work/:slug'
  }
}

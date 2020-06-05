---
title: Design and Development
slug: developing-cgbookcase-com
category: cgbookcase
featuredImage: /uploads/cgb-mockup.jpg
importance: 1
description: Over the last few years, I've created more than 400 PBR textures and released them to the public domain. The textures are made out of four to six different types of texture maps.
---

The backend of cgbookcase.com is written with Node.js. I'm using Express.js for routing and ejs as a templating engine. Information about the textures are stored in a JSON file.

To serve the textures, I use Backblaze B2 Cloud Storage and a content delievery network (CDN) by Cloudflare. For other static assets, I use DigitalOceans's Spaces, which also comes with a CDN. 

The code of this project can be found on the [GitHub repository](https://github.com/dorianzgraggen/cgbookcase.com). The code on the master branch is what's runnig on the server of cgbookcase.com. Commits on the development branch are only applied on a separate development server.


## Screenshots

![alt](/uploads/cgb_screenshot_textures.jpg){class="wide desktop"}

![alt](/uploads/cgb_screenshot_viewtexture.jpg){class="wide desktop"}

![alt](/uploads/cgb_screenshot_blog.jpg){class="wide desktop"}

<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <h2>Projects</h2>
    <ul>
      <li v-for="post in $page.posts.edges" :key="post.id">
        <g-link :to="post.node.path">
          {{ post.node.title }}
        </g-link>
      </li>
    </ul>

    <h3>cgbookcase.com</h3>
     <ul>
      <li v-for="post in $page.posts.edges" :key="post.id" v-if="post.node.category == 'cgbookcase'">
        <g-link :to="post.node.path">
          {{ post.node.title }}
        </g-link>
      </li>
    </ul>

    
    <h3>3D Renderings</h3>
     <ul>
      <li v-for="post in $page.posts.edges" :key="post.id" v-if="post.node.category == '3d'">
        <g-link :to="post.node.path">
          {{ post.node.title }}
        </g-link>
      </li>
    </ul>

    
    <h3>Virtual Reality</h3>
     <ul>
      <li v-for="post in $page.posts.edges" :key="post.id" v-if="post.node.category == 'vr'">
        <g-link :to="post.node.path">
          {{ post.node.title }}
        </g-link>
      </li>
    </ul>

    
    <h3>More</h3>
     <ul>
      <li v-for="post in $page.posts.edges" :key="post.id" v-if="post.node.category == 'other'">
        <g-link :to="post.node.path">
          {{ post.node.title }}
        </g-link>
      </li>
    </ul>



    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>


<page-query>
query ProjectPosts {
  posts: allProjectPost {
    edges {
      node {
        title
        slug
        content
        category
        path
      }
    }
  }
}
</page-query>



<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

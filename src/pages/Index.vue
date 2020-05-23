<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world! </h1>
   


    <h1>Hello, world! </h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <h2>Projects</h2>
    <!-- <ul>
      <li v-for="(post, index) in $page.posts.edges" :key="post.id">
        <g-link :to="post.node.path">
          {{ post.node.title }} {{ index }}
        <img alt="Example image" v-bind:src="post.node.featuredImage">

        </g-link>

      </li>
    </ul> -->

    <h3>cgbookcase.com</h3>
    <ProjectList :array="$page.cgbPosts.edges" :startIndex="0"/>
    
    <h3>3D Renderings</h3>
    <ProjectList :array="$page.renderingPosts.edges" :startIndex="$page.cgbPosts.edges.length"/>
    
    <h3>Virtual Reality</h3>
    <ProjectList :array="$page.vrPosts.edges" :startIndex="$page.cgbPosts.edges.length + $page.renderingPosts.edges.length"/>
    
    <h3>More</h3>
    <ProjectList :array="$page.morePosts.edges" :startIndex="$page.cgbPosts.edges.length + $page.renderingPosts.edges.length + $page.vrPosts.edges.length"/>

    




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
        featuredImage
      }
    }
  },
  cgbPosts: allProjectPost(filter: {category: {eq: "cgbookcase"}}) {
    edges {
      node {
        title
        slug
        content
        category
        path
        featuredImage
      }
    }
  },
  renderingPosts: allProjectPost(filter: {category: {eq: "3d"}}) {
    edges {
      node {
        title
        slug
        content
        category
        path
        featuredImage
      }
    }
  },
  vrPosts: allProjectPost(filter: {category: {eq: "vr"}}) {
    edges {
      node {
        title
        slug
        content
        category
        path
        featuredImage
      }
    }
  },
  morePosts: allProjectPost(filter: {category: {eq: "more"}}) {
    edges {
      node {
        title
        slug
        content
        category
        path
        featuredImage
      }
    }
  }

}
</page-query>




<script>
import ProjectList from '~/components/ProjectList.vue'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    ProjectList
  }
}



</script>

<style>
.home-links a {
  margin-right: 1rem;
}

h3 {
  text-align: center;
}

</style>

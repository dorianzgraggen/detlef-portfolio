<template>
  <Layout>



    <div id="start-thing" class="narrow">
      
      <div id="start-3d-scene">
      </div>
      <div id="start-desc">
        <span>
        Hey, I'm <strong>Dorian Zgraggen</strong> and I create <a href="/#cgbookcase">cgbookcase.com</a>, <a href="/#3d">3D Renderings</a>, <a href="/#vr">VR stuff</a> and <a href="/#more">more</a>.
        </span>
      </div>
    </div>

  

    <span id="work"></span>
    <!-- <ul>
      <li v-for="(post, index) in $page.posts.edges" :key="post.id">
        <g-link :to="post.node.path">
          {{ post.node.title }} {{ index }}
        <img alt="Example image" v-bind:src="post.node.featuredImage">

        </g-link>

      </li>
    </ul> -->

    <h3 id="cgbookcase">cgbookcase.com</h3>
    <p class="narrow">There that burned till as uncertain that my. The and nevermore burden wretch wondering no raven a, back there the if soul only. This the of cushioned i, unseen human not upon answer unseen nevermore bird not leave. Broken out air with but there.</p>
    <ProjectList :array="$page.cgbPosts.edges" :startIndex="0"/>
    
    <h3 id="3d">3D Renderings</h3>
    <ProjectList :array="$page.renderingPosts.edges" :startIndex="$page.cgbPosts.edges.length"/>
    
    <h3 id="vr">Virtual Reality</h3>
    <p class="narrow">Door whether much of a what cushioned of whom that but, broken chamber one said the name raven this hear. Bird the sorrowsorrow ominous burden chamber token broken. And a whose word morrow tinkled chamber. Of on fancy no tapping me shutter ember, gaunt ghastly.</p>
    <ProjectList :array="$page.vrPosts.edges" :startIndex="$page.cgbPosts.edges.length + $page.renderingPosts.edges.length"/>
    
    <h3 id="more">More</h3>
    <ProjectList :array="$page.morePosts.edges" :startIndex="$page.cgbPosts.edges.length + $page.renderingPosts.edges.length + $page.vrPosts.edges.length"/>

    <section class="narrow">
    
    <h2 id="posts">Posts</h2>

    <ul class="links">
      <li v-for="post in $page.links.edges" :key="post.id">
        
          <a :href="post.node.link" target="_blank" class="linkpost">
            <div style="display: flex; overflow: hidden;">
              <g-image :src="post.node.favicon"></g-image>
              <span class="link-title">
                <span class="truncated">{{ post.node.title}}</span>
               
              </span> 
            </div>
            <div style="display: flex">

            <div class="link-date dimmed"> {{ months[new Date(post.node.date).getMonth()]}} '{{ new Date(post.node.date).getFullYear().toString().substring(2)}}</div>

            </div>

          </a>
      </li>
    </ul>
    </section>


    <section class="narrow">
    
      <h2 id="about">About</h2>
      <p>Thy bird nevermore that raven for my at. Velvet grim blessed at it, from now nevermore followed till thy mien shorn the i, a faintly laden rare some and. And lordly it meaninglittle here this muttered by. Said i or.</p>
      <p v-on:click="mailto"></p>
    </section>

    <div class="socialmedia-container">
      <a href="https://twitter.com/dorianzgraggen" target="_blank"><g-image src="/uploads/twitter.svg"> </g-image></a>
      <a href="https://www.instagram.com/dorianzgraggen/" target="_blank"><g-image src="/uploads/instagram.svg"> </g-image></a>
      <a href="https://www.youtube.com/dorianzg" target="_blank"><g-image src="/uploads/youtube.svg"> </g-image></a>
      <a href="https://www.linkedin.com/in/dorianzgraggen/" target="_blank"><g-image src="/uploads/linkedin.svg"> </g-image></a>
    
    </div>
  

  </Layout>
</template>


<page-query>
query ProjectPosts {
  links: allLinkPost {
    edges {
      node {
        title
        link
        favicon
        date
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



// var months = [ "January", "February", "March", "April", "May", "June", 
//            "July", "August", "September", "October", "November", "December" ];

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    ProjectList
  },
  data () {
    return {
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun", 
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
      ]
    }
  }
 
}



</script>

<style>
.home-links a {
  margin-right: 1rem;
}

#start-thing {
  display: flex;
}

#start-3d-scene {
  width: 50%;
  height: 500px
}

#start-desc {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}

h3, h2 {
  text-align: center;
}

ul>li>a>div>img {
  width: 30px;
  height: 30px;
  margin: 4px 0px 4px 6px;
  display: block;
}

ul {
  list-style: none;
  padding: 0;
}

.linkpost {
  display: flex;
  justify-content: space-between;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.2); */
  background: none;
  border: none;
  border-radius: 4px;
  padding: 2px 0;
  margin: 4px 0;
  /* background-color: rgba(255,255,255,0.03); */
  transition-duration: 0.2s;
}

.linkpost:hover {
  background-color: #89a2e60f;
}

.link-title {
  overflow: hidden;
  text-overflow: ellipsis;
   /* border-bottom: 2px solid rgba(255, 255, 255, 0.39); */
}

.link-title, .link-date {
   display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin: 6px 12px;
}

.link-date {
  /* color: rgba(255,255,255,0.4); */
  text-align: right;
  white-space: nowrap;
}

.flex {
  display: flex;
}

.truncated {
  /* Must not be `display: flex` */
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.overflow-hidden {
  /* You can also use overflow: auto, or overflow: scroll */
  overflow: hidden;
}

.socialmedia-container {
  display:flex;
  width: 300px;
  justify-content: space-between;
  margin: 50px auto 25px auto;
}

.socialmedia-container > a > img {
  width: 42px;
}

.socialmedia-container > a {
  background: none;
  border: none;
}

</style>

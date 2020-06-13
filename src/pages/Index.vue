<template>
  <Layout>



    <div id="start-thing" class="narrow">
      
      <div id="start-3d-scene">
        <ThreeScene />

      </div>
      <div id="start-desc">
        <span>
        Hey, I'm <strong>Dorian Zgraggen</strong>. <br>I run <button @click="smoothlyScrollTo('#cgbookcase')" id="hash-cgb" data-color="red">cgbookcase.com</button> and create <br><button id="hash-3d" @click="smoothlyScrollTo('#3d')" data-color="yellow">3D Renderings</button>, <button id="hash-vr" @click="smoothlyScrollTo('#vr')"  data-color="green">VR stuff</button> and <button id="hash-more" @click="smoothlyScrollTo('#more')" data-color="blue">more</button>.
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
    <p class="narrow">cgbookcase.com is an online library of PBR textures for 3D artists that I run. The textures are available for free under the Creative Commons 0 (CC0) license, which means anyone can use them for anything they want, even commercially. The project is backed by patrons, but I will soon start to offer some paid scanned 3D models as well.</p>
    <ProjectList :array="$page.cgbPosts.edges" :startIndex="0"/>
    
    <h3 id="3d">3D Renderings</h3>
    <ProjectList :array="$page.renderingPosts.edges" :startIndex="$page.cgbPosts.edges.length"/>
    
    <h3 id="vr">Virtual Reality</h3>
    <ProjectList :array="$page.vrPosts.edges" :startIndex="$page.cgbPosts.edges.length + $page.renderingPosts.edges.length"/>
    
    <h3 id="more">More</h3>
    <ProjectList :array="$page.morePosts.edges" :startIndex="$page.cgbPosts.edges.length + $page.renderingPosts.edges.length + $page.vrPosts.edges.length"/>

    <section class="narrow">
    
    <h2 id="posts">Posts</h2>

    <ul class="links" style="list-style-type: none; padding: 0;" id="links_p">
      <li v-for="post in $page.links.edges" :key="post.id">
        
          <a :href="post.node.link" target="_blank" class="linkpost">
            <div style="display: flex; overflow: hidden;">
              <div>
                <g-image :src="post.node.favicon"></g-image>
              </div>
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
  cgbPosts: allProjectPost(filter: {category: {eq: "cgbookcase"}}, sortBy: "importance", order: DESC) {
    edges {
      node {
        title
        description
        content
        category
        path
        featuredImage
      }
    }
  },
  renderingPosts: allProjectPost(filter: {category: {eq: "3d"}}, sortBy: "importance", order: DESC) {
    edges {
      node {
        title
        description
        content
        category
        path
        featuredImage
      }
    }
  },
  vrPosts: allProjectPost(filter: {category: {eq: "vr"}}, sortBy: "importance", order: DESC) {
    edges {
      node {
        title
        description
        content
        category
        path
        featuredImage
      }
    }
  },
  morePosts: allProjectPost(filter: {category: {eq: "more"}}, sortBy: "importance", order: DESC) {
    edges {
      node {
        title
        description
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
import ThreeScene from '~/components/ThreeScene.vue'

// var months = [ "January", "February", "March", "April", "May", "June", 
//            "July", "August", "September", "October", "November", "December" ];

export default {
  metaInfo: {
    title: 'Home  ',
    meta: [
      { name: 'description', content: "Hey, I'm Dorian Zgraggen. I run cgbookcase.com, a website with PBR textures and scanned 3D models. I create 3D Renderings, develop VR stuff and design websites"}
    ]
  },
  components: {
    ProjectList: ProjectList,
    ThreeScene: ThreeScene
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
  },
  mounted() {
    console.log(window.location.hash);
    if (window.location.hash != "") {
      document.querySelector(window.location.hash).scrollIntoView({ 
          behavior: 'smooth' 
        })
    }


    // if (window.innerWidth <= 600) {
    //   document.querySelector("#start-thing").style.height = (window.innerHeight - 50) + "px";
    //   document.querySelector("#start-thing").style.marginBottom = "50px";

    // //   console.log("smol")
    // //   document.querySelector(".header").style.background = "red";
    // //   document.querySelector(".header").style.height = "60px";
    // //   document.querySelector("#start-thing").style.marginBottom = "90px";
    // //   // document.querySelector("#start-thing").style.height = (window.innerWidth).toString() + "px";
    // //   document.querySelector("#start-3d-scene").style.height = ((window.innerHeight - 60 - 110) * 1).toString() + "px";
    // //   document.querySelector("#start-3d-scene").style.padding = "0";
    // //   document.querySelector(".three-container").style.height = (window.innerWidth).toString() + "px";
    // //   document.querySelector(".three-container").style.margin = (((window.innerHeight - 60 - 140) - window.innerWidth) / 2).toString() + "px 0";
    // //   document.querySelector("#start-desc").style.height = "110px";

    // //   // document.querySelector("#start-3d-scene").style.padding = "20px 0";
    // }
  },
  methods: {
    smoothlyScrollTo(identifier) {
      console.log()
      if(window.location.pathname == "/") {
        document.querySelector(identifier).scrollIntoView({ 
          behavior: 'smooth' 
        })
      } else {
        window.location.href = window.location.origin + "/" + identifier;
      }

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
  height: 500px;
  height: 400px;
  padding: 50px 0;
}

#start-desc {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}

#start-desc a {
  border-bottom-width: 2px;
  border-bottom-style: solid;
  transition-duration: .15s;
  /* color: white; */
  /* text-decoration: underline #a9c5ff; */
  cursor: pointer;
}

#start-desc button {
  background: #03060C;
  border: none;
  border-bottom: 2px solid;
  font-size: inherit;
  margin: 0;
  padding: 0; 
  cursor: pointer;
  transition-duration: .15s;
}

button[data-color="red"] {
  border-bottom-color: #ef476fcc;
  color:  #ef476f;
}


button[data-color="red"]:hover {
  background: #ef476e5e !important;
}

button[data-color="yellow"] {
  border-bottom-color: #ffd166dd;
  color:  #ffd166;
}


button[data-color="yellow"]:hover {
  background:  #ffd16667 !important;
}

button[data-color="green"] {
  border-bottom-color: #06d6a0cc;
  color:  #06d6a0;
}


button[data-color="green"]:hover {
  background:  #06d69e67 !important;
}

button[data-color="blue"] {
  border-bottom-color: #14a3d3cc;
  color:  #14a3d3;
}


button[data-color="blue"]:hover {
  background:  #14a3d35e !important;
}
  
h3, h2 {
  text-align: center;
}

ul>li>a>div>div>img {
  width: 30px;
  height: 30px;
  margin: 4px 0px 4px 6px;
  display: block;
}

#links_p {
  list-style-type: none !important;
  padding: 0 !important;
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
  width: 100%;
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

@media only screen and (max-width: 600px) {
  .portfolio-item {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
  .desc-container {
    width: 100%;
  }
  .thumb-container {
    width: 100%;
  }

  .thumb-container .g-image {
    width: 100%;
  }

  .project-1 {
    flex-direction: column-reverse;
  }

  .linkpost {
    height: 80px;
    /* background: #3e4a6b31; */
    margin: 5px 0;
  }

  .linkpost:hover {
    background: none;
  }

  ul > li > a > div > div > img {
    width: 40px;
    height: 40px;
    margin: 20px 10px 20px 15px;
    display: block;
  }

  .truncated {
   white-space: initial !important;
    overflow: hidden;
  }

  .link-date {
    display: none !important;
  }



  /* RUBIKS CUBE */
  #start-thing {
    flex-wrap: wrap;
    height: 90vh;
    height: calc(100vh - 50px);
    margin-bottom: 50px;
  }

  #start-3d-scene {
    width: 100%;
    /* height: unset; */
  }
  
  #start-desc {
    width: 100%;
    /* align-items: unset; */
  }
  
  .header {
    margin-bottom: 0px;
  }

  #start-3d-scene {
    display: none;
  }

  .desc-container > span > a > h4 {
    margin-top: 12px !important;
  }
  
}

</style>

<template>
  <div>
  
     <div class="portfolio-item" v-for="(post, index) in array" :key="post.id" :class="'project-' + (((index + parseInt(startIndex, 10)) % 2))">
        
        <div class="desc-container">
          <span>
            <g-link :to="post.node.path">
              <h4 style="margin-bottom: 0px; margin-top: 2px">{{ post.node.title }}</h4>
            </g-link>
            <p style="margin-top: 6px; margin-bottom: 0px">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit repellat iure officiis mollitia tempore magnam delectus sequi praesentium dolores dolorem, a nemo deleniti laborum at temporibus odio, inventore libero deserunt.</p>
            <p style="margin-top: 26px">
              <g-link :to="post.node.path" class="df-btn">Keep reading ...</g-link>
            </p>
          </span>
        </div>
        
        <div class="thumb-container">
          <g-link :to="post.node.path">
            <g-image :src="post.node.featuredImage"></g-image>
          </g-link>
          <!-- <g-image :src="post.node.featuredImage" width=""></g-image> -->
        </div>
      </div>
    
  </div>





</template>


<script>
export default {
  name: 'ProjectList',
  props: ['array', "startIndex"],
}
</script>



<style>


.portfolio-item {
  display: flex;
  margin-top: 36px;
  margin-bottom: 72px;
}

.desc-container {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left !important;
}

.thumb-container {
  width: 50%;
}
.thumb-container .g-image {
  width: 80%;
  border-radius: 3px;
}

.project-1 {
  flex-direction: row-reverse;
}

.project-1 img {
  float: left;
}

.project-0 img {
  float: right;
}

</style>
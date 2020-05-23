<template>
  <div>
  
     <div class="portfolio-item" v-for="(post, index) in array" :key="post.id" :class="'project-' + (((index + parseInt(startIndex, 10)) % 2))">
        
        <div class="desc-container">
          <g-link :to="post.node.path">
            <h4>{{ post.node.title }}</h4>
          </g-link>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit repellat iure officiis mollitia tempore magnam delectus sequi praesentium dolores dolorem, a nemo deleniti laborum at temporibus odio, inventore libero deserunt.</p>

        </div>
        
        <div class="thumb-container">
          <g-image src="/uploads/thumb_placeholder.png"></g-image>
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
}

.thumb-container {
  width: 50%;
}
.thumb-container .g-image {
  width: 80%;
}

.project-1 {
  flex-direction: row-reverse;
}

.project-0 .g-image {
  float: right;
}

</style>
<template>

        <!-- <g-image :src="'/uploads/' + image"></g-image> -->

  <div class="gallery-container">
          <!-- <span v-for="n in Number(last) - Number(first) +  1">{{ n + Number(first) - 1 }} </span> -->
          <g-image v-for="n in Number(last) - Number(first) +  1" :src="'/uploads/' + name + (n + Number(first) - 1) + suffix"></g-image>

  </div>
 

  

  




</template>


<script>
export default {
  name: 'ImageGrid',
  props: ['name', 'first', 'last', 'suffix'],
  methods: {
  },
}
</script>


<style>

.gallery-container {
  line-height: 0;
  -webkit-column-count: 3;
  -webkit-column-gap:   8px;
  -moz-column-count:    3;
  -moz-column-gap:      8px;
  column-count:         3;
  column-gap:           8px;  
}

.gallery-container img {
  width: 100% !important;
  height: auto !important;
  margin-bottom: 8px;
}

video:focus {
  outline: none;
}

p {
  hyphens: auto;
}

.videoBlock-container {
  display: flex;
  margin-top: 56px;
  margin-bottom: 56px;
}

.invert-direction {
  flex-direction: row-reverse;
}

.invert-direction .video-div {
  float: right;
}

.video-container {
  width: 50%;
}

.video-div {
  width: 85%;
  border-radius: 3px;
  position: relative;
  display: flex;
}

img {
  width: 100%;
  border-radius: 3px;
}

.videoText-container {
  width: 50%
}

.videoText-container > h4 {
  text-align: left;
}

.video-btn-center {
  border-radius: 100%;
  position: absolute;
  z-index: 100;
  background: #0d121ec4;
  border: 2px solid #a1b3e547;
  display: inline-block;
  transition: background-color .2s;
  font-size: 16px;
  color: white;
  height: 60px;
  width: 60px;
  cursor: pointer;
  transition-duration: .1s;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -45%);
}

.play-btn {
  position: absolute;
  z-index: 100;
  background: #0d121ec4;
  border: 2px solid #a1b3e547;
  display: inline-block;
  font-size: 16px;
  color: white;
  height: 30px;
  width: 30px;
  cursor: pointer;
  transition-duration: .1s;
  left: 0;
  bottom: 0;
  border-bottom-left-radius: 3px;
}

.firstplay-svg {
  filter: invert(1);
  width: 35%;
}

.replay-svg {
  filter: invert(1);
  width: 45%;
}

.play-svg {
  filter: invert(1);
  width: 100%;
}

.pause-svg {
  filter: invert(1);
  width: 100%;
}

.pause-btn {
  position: absolute;
  z-index: 100;
  background: #0d121ec4;
  border: 2px solid #a1b3e547;
  /* border: none; */
  display: inline-block;
  font-size: 16px;
  color: white;
  height: 30px;
  width: 30px;
  cursor: pointer;
  transition-duration: .1s;
  left: 0;
  bottom: 0;
  border-bottom-left-radius: 3px;
}


</style>
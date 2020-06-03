<template>
  <div class="videoBlock-container" :class="{'invert-direction': !onLeftSide }">
    <div class="video-container">
      <div class="video-div">

        <video ref="myvideo" id="videoElement" @ended="onEnd()" width="100%" :class="video" v-on:click="videoclick">
          <source :src="'/uploads/videos/' + video + '.mp4'" type="video/mp4">
          <!-- <source src="movie.ogg" type="video/ogg"> -->
          Your browser does not support the video tag.
        </video>

        <button v-show="firstplay && !playing && !ended" class="video-btn-center" v-on:click="startplay">
          <img src="/uploads/play-solid.svg" alt="" class="firstplay-svg">
        </button>

        <button v-show="!firstplay && !playing && !ended" class="play-btn" v-on:click="play">
          <img src="/uploads/play-solid.svg" alt="" class="play-svg">
        </button>

         <button v-show="playing && !ended" class="pause-btn" v-on:click="pause">
          <img src="/uploads/pause-solid.svg" alt="" class="pause-svg">
        </button>

         <button v-show="ended" class="video-btn-center" v-on:click="replay">
          <img src="/uploads/undo-alt-solid.svg" alt="" class="replay-svg">
        </button>

      </div>
 
    </div>

    <div class="videoText-container">
      <h4>{{ title }}</h4>
      <p>{{ desc}}</p>
    </div>
  
  </div>

  




</template>


<script>
export default {
  name: 'VideoBlock',
  props: ['video', 'onLeftSide', 'title', 'desc'],
  data () {
    return {
      firstplay: true,
      playing: false,
      ended: false,
    }
  },
  methods: {
    greet() {
      console.log("hellooo");
    },
    startplay() {
      this.$refs.myvideo.play();
      this.playing = true;
      this.firstplay = false;
    },
    play() {
      this.$refs.myvideo.play();
      this.playing = true;
    },
    replay() {
      this.$refs.myvideo.play();
      this.playing = true;
      this.ended = false;
      this.firstplay = false;
    },
    pause() {
      this.$refs.myvideo.pause();
      this.playing = false;
    },
    onEnd() {
      this.ended = true;
      this.playing = false;
      this.firstplay = true;
    },
    videoclick() {
      // if (this.firstplay) {
      //   return;
      // }
      if (this.playing) {
        this.$refs.myvideo.pause();
        this.playing = false;

      } else {
        this.$refs.myvideo.play();
        this.playing = true;
        this.firstplay = false;
        this.ended = false;
      }
    }
  },
}
</script>


<style>

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

video {
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
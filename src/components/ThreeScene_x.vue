<template>
  <div class="three-container">
    <canvas id="c"></canvas>

  </div>

    
</template>

<script>


export default {
  name: 'ThreeScene',
  data () {
    return {
      message: 'Try change me!'
    }
  },
  methods: {
    onClick () {
      this.message = 'Here you go :)'
    },
    main() {
        console.log("EEEEEEY geile siech")
    }
  },
  mounted() {

    }
}
</script>




<style>
.three-container {
  /* padding: 20px; */
  height: 100%;
  width: 100%;
  cursor: pointer;
}

#c {
   width: 100%;
   height: 100%;
   display: block;
}

#c:focus {
    outline: none;
}
</style>
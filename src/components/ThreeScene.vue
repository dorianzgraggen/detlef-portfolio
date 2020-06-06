<template>
  <div class="three-container">
    <canvas id="c"></canvas>

  </div>
    
</template>

<script>
// import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/build/three.module.js';
var THREE = require("three");
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.setClearColor( 0x03060C, 1);

    const fov = 45;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 20;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 10;
    camera.position.y = 0;
    camera.position.x = 4;
    // camera.rotation.x =  THREE.Math.degToRad( -14 )
    camera.rotation.y =  THREE.Math.degToRad( 21 )
    // camera.lookAt(0, 0, 0)

    const scene = new THREE.Scene();

    var loader = new GLTFLoader();


    // {
    //     const color = 0xFFFFFF;
    //     const intensity = 1;
    //     const light = new THREE.DirectionalLight(color, intensity);
    //     light.position.set(-1, 2, 4);
    //     scene.add(light);
    // }
    {
        var light = new THREE.AmbientLight( 0xffffff ); // soft white light
        scene.add( light );
    }


    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    function makeInstance(geometry, color, x) {
        const material = new THREE.MeshPhongMaterial({color});

        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        cube.position.x = x;

        return cube;
    }

    const cubes = [
        // makeInstance(geometry, 0x44aa88,  0),
        // makeInstance(geometry, 0x8844aa, -2),
        // makeInstance(geometry, 0xaa8844,  2),
    ];

    console.log("loading eeeeh")

    let cublets = [];

    var group = new THREE.Group();
    loader.load(
        
        '/3d/rubiks_cube2.glb',

        function ( gltf ) {

            group.add( gltf.scene );

            gltf.animations; // Array<THREE.AnimationClip>
            cublets = gltf.scene; // THREE.Group
            gltf.scenes; // Array<THREE.Group>
            gltf.cameras; // Array<THREE.Camera>
            gltf.asset; // Object

        },
        // called while loading is progressing
        function ( xhr ) {

            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

        },
        // called when loading has errors
        function ( error ) {

            console.log( 'An error happened' );

        }
        
    );
    scene.add( group );


    // Keybindings
    document.addEventListener('keydown', handleKeys);

    function handleKeys(e) {
        if (e.key == "d") {
            console.log("");
            if (cublets.children) {
            // console.log(cublets.children.length)
        
            // cublets.children[1].position.y += 0.01;
                cublets.children.forEach(cublet => {
                    if (Math.round(cublet.position.y) == -1) {
                        cublet.position.y -= 0.01;
                    }
                });
            } else {
                console.log("cublets.children does not exist");
            }
        }
    }

    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
        renderer.setSize(width, height, false);
        }
        return needResize;
    }

    let then = 0;
    let delta = 0;
    function render(time) {
        time *= 0.001;
        delta = time - then; 
        then = time;

        if (cublets.children) {
            // console.log(cublets.children.length)
        
            // cublets.children[1].position.y += 0.01;

        
            // console.log(delta)
            // console.log("FPS:", 1 / delta)
            group.rotation.y += THREE.Math.degToRad(1);
        }


        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();

        cubes.forEach((cube, ndx) => {
        const speed = 1 + ndx * .1;
        const rot = time * speed;
        cube.rotation.x = rot;
        cube.rotation.y = rot;
        });

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
    }
}
</script>




<style>
.three-container {
  /* padding: 20px; */
  background: red;
  height: 100%;
  width: 100%;
}

#c {
   width: 100%;
   height: 100%;
   display: block;
}
</style>
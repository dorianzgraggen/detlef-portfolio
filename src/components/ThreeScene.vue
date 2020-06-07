<template>
  <div class="three-container">
    <canvas id="c"></canvas>

  </div>
    
</template>

<script>
// import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/build/three.module.js';
var THREE = require("three");
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

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

    var controls = new OrbitControls( camera, renderer.domElement );
    controls.update();

    const scene = new THREE.Scene();

    var loader = new GLTFLoader();


    {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
    }
     {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(1, 2, -4);
        scene.add(light);
    }
    {
        var light = new THREE.AmbientLight( 0xffffff, 0.1 ); // soft white light
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

    // let cublets = [];
    let allCublets = [];

    var group = new THREE.Group();
    loader.load(
        
        '/3d/rubiks_cube2.glb',

        function ( gltf ) {

            group.add( gltf.scene );

            gltf.animations; // Array<THREE.AnimationClip>
            gltf.scene; // THREE.Group
            gltf.scenes; // Array<THREE.Group>
            gltf.cameras; // Array<THREE.Camera>
            gltf.asset; // Object

            gltf.scene.children.forEach(element => {
                allCublets.push(element)
            });
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
    console.log(group)
 


    let rotationGroup = new THREE.Group();
    group.add(rotationGroup);


    // Define steps

    let sides = [
        "front",
        "back",
        "left",
        "right",
        "up",
        "down",
    ]


    let axes = [
        "z", "z",
        "x", "x",
        "y", "y"
    ]
    let directions = [
        -90,
        -90,
        90,
        90
    ]

    let steps = [];


    for (let i = 0; i < 10; i++) {
        let side = Math.floor(Math.random() * 6);
        let direction = Math.floor(Math.random() * 4);
        let step = {
            side: side,
            direction: direction
        }
        steps.push(step)
    }
    console.log(steps)


    // Keybindings
    document.addEventListener('keydown', handleKeys);

    let currentStep = 0;
    let bMoveGroupBack = false;
    let moveBackCublets = [];

    function handleKeys(e) {

        if (e.key == "d") {
            console.log("");
            if (allCublets != []) {
            // console.log(cublets.children.length)
        
            // cublets.children[1].position.y += 0.01;
                allCublets.forEach(cublet => {
                    if (Math.round(cublet.position["y"]) == -1) {
                        cublet.position.y -= 0.02;
                    }
                });
            } else {
                console.log("allCublets is empty");
            }
        }

         if (e.key == "l") {
             console.log(allCublets)
         }

        if (e.key == "n") {
            console.log(group.children)
            let direction = directions[steps[currentStep].direction];
    	    let axis = axes[steps[currentStep].side]
            
    
            
            let selectedCublets = [];
            console.log(selectedCublets)

            
            console.log("=============")
            console.log(allCublets)
            console.log("=============")

            allCublets.forEach(cublet => {
                let conditions = [
                    (Math.round(cublet.position["z"]) == -1),
                    (Math.round(cublet.position["z"]) == 1), 
                    (Math.round(cublet.position["x"]) == -1),
                    (Math.round(cublet.position["x"]) == 1),
                    (Math.round(cublet.position["y"]) == 1),
                    (Math.round(cublet.position["y"]) == -1),  
                ];

                
                // console.log(cublet.position[axis])
                
                if (conditions[steps[currentStep].side]) {

                    console.log(cublet.name)
                    console.log(axis)

                    selectedCublets.push(cublet);
                    rotationGroup.attach(cublet);
                }
                
            });
            console.log("added")
            console.log(selectedCublets)


            console.log("attached")
            console.log(rotationGroup)



            rotationGroup.rotation[axis] += THREE.Math.degToRad(direction);
            // rotationGroup.position.y += -.5;
            selectedCublets.forEach(cublet => {
                group.attach(cublet)
            });


            rotationGroup.rotation[axis] -= THREE.Math.degToRad(direction);
            console.log("re-attached")
            console.log(rotationGroup)
            


            currentStep++;
        }

        if (e.key == "s") {
            currentStep--;
            console.log(currentStep);

            allCublets.forEach(cublet => {
                let conditions = [
                    (Math.round(cublet.position["z"]) == -1),
                    (Math.round(cublet.position["z"]) == 1), 
                    (Math.round(cublet.position["x"]) == -1),
                    (Math.round(cublet.position["x"]) == 1),
                    (Math.round(cublet.position["y"]) == 1),
                    (Math.round(cublet.position["y"]) == -1),  
                ];

                
                // console.log(cublet.position[axis])
                
                if (conditions[steps[currentStep].side]) {

                    console.log(cublet.name)
                    //console.log(axis)

                    moveBackCublets.push(cublet);
                    rotationGroup.attach(cublet);
                }
                
            });

            bMoveGroupBack = true;
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

    let moveBackStep = 1;

    let then = 0;
    let delta = 0;
    function render(time) {
        time *= 0.001;
        delta = time - then; 
        then = time;

        


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

        if (bMoveGroupBack) {
            let direction = directions[steps[currentStep].direction];
    	    let axis = axes[steps[currentStep].side]

            rotationGroup.rotation[axis] -= THREE.Math.degToRad(direction) / 10;   

            
            if (moveBackStep >= 10) {
                console.log("ended")
                bMoveGroupBack = false;
                moveBackStep = 1;
                moveBackCublets.forEach(cublet => {
                    group.attach(cublet)
                });
                moveBackCublets = [];
                rotationGroup.rotation[axis] += THREE.Math.degToRad(direction);
            } else {
                moveBackStep++;
            }

        }

        controls.update();

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
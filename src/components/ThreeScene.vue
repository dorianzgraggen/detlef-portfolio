<template>
  <div class="three-container">
    <canvas id="c"></canvas>
    <div id="cube-instruction">
        click to solve
    </div>
  </div>
    
</template>

<script>
// import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/build/three.module.js';
import { Scene, Quaternion, Clock, WebGLRenderer, ACESFilmicToneMapping, Math as threeMath, PerspectiveCamera, DirectionalLight, AmbientLight, BoxGeometry, Group  } from "three/build/three.min.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

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
    
    // Hide instruction text
    setTimeout(() => {
        document.getElementById("cube-instruction").style.opacity = 0;
    }, 5000);

    var bCubeIsSolved = false;
    var bCurrentlySolving = false;
    var startRotation = new Quaternion();
    var endRotation = new Quaternion();
    var duration = 4;
    var elapsedTime = 0;
    var clock = new Clock();
    let bModelLoaded = false;

    const canvas = document.querySelector('#c');
    const renderer = new WebGLRenderer({canvas, antialias: true});
    renderer.setClearColor( 0x03060C, 1);
    renderer.toneMapping = ACESFilmicToneMapping;
    // renderer.shadowMap.update = false;
    // renderer.shadowMap.type = BasicShadowMap;

    const fov = 18;
    const aspect = 2;  // the canvas default
    const near = 2;
    const far = 7;
    const camera = new PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 4;
    camera.position.y = 0;
    camera.position.x = 2;
    // camera.rotation.x =  Math.degToRad( -14 )
    camera.rotation.y =  threeMath.degToRad( 21 )
    // camera.lookAt(0, 0, 0)

    // var controls = new OrbitControls( camera, renderer.domElement );
    // controls.enableDamping = true;
    // controls.dampingFactor = 0.07;
    // controls.enableKeys = false;
    // controls.enablePan = false;
    // controls.enableZoom = false;
    // //controls.autoRotateSpeed = 20.0;
    // controls.enabled = false;

    // controls.update();

    const scene = new Scene();

    var loader = new GLTFLoader();


  
    if (window.innerWidth <= 600) {
        {
            const light = new HemisphereLight( 0xffffff, 0x080808, 6 );
            scene.add( light );
        }
    } else {
        {
            const color = 0xFFFFFF;
            const intensity = 1;
            const light = new DirectionalLight(color, intensity);
            light.position.set(-1, 1, 1);
            scene.add(light);
        }
        {
            const color = 0xFFFFFF;
            const intensity = 1;
            const light = new DirectionalLight(color, intensity);
            light.position.set(1, 1, 1);
            scene.add(light);
        }
        {
            const color = 0xFFFFFF;
            const intensity = 1;
            const light = new DirectionalLight(color, intensity);
            light.position.set(1,1, -1);
            scene.add(light);
        }
        {
            const color = 0xFFFFFF;
            const intensity = 1;
            const light = new DirectionalLight(color, intensity);
            light.position.set(-1, 2, 4);
            scene.add(light);
        }
        {
            const color = 0xFFFFFF;
            const intensity = 1;
            const light = new DirectionalLight(color, intensity);
            light.position.set(1, 2, 4);
            scene.add(light);
        }
        {
            const color = 0xFFFFFF;
            const intensity = 1;
            const light = new DirectionalLight(color, intensity);
            light.position.set(1, 2, -4);
            scene.add(light);
        }
    }
   
    {
        const light = new AmbientLight( 0xffffff, 0.5 ); // soft white light
        scene.add( light );
    }
    


    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new BoxGeometry(boxWidth, boxHeight, boxDepth);

    function makeInstance(geometry, color, x) {
        const material = new MeshPhongMaterial({color});

        const cube = new Mesh(geometry, material);
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

    var group = new Group();
    loader.load(
        
        '/3d/rubiks_textured_optimized_noRoughness.glb',

        function ( gltf ) {

            group.add( gltf.scene );

            gltf.animations; // Array<AnimationClip>
            gltf.scene; // Group
            gltf.scenes; // Array<Group>
            gltf.cameras; // Array<Camera>
            gltf.asset; // Object

            gltf.scene.children.forEach(element => {
                allCublets.push(element)
            });

            bModelLoaded = true;
            shuffleCube();
        },
        // called while loading is progressing
        function ( xhr ) {

            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            if (xhr.loaded / xhr.total == 1) console.log("loaded nice :DD")

        },
        // called when loading has errors
        function ( error ) {

            console.log( 'An error happened' );

        }
        
    );
    scene.add( group );
    console.log(group)
 


    let rotationGroup = new Group();
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
        90,
        -90,
    ]

    let steps = [];


    for (let i = 0; i < 24; i++) {
        let step = {};

      
        let side, direction;

        side = Math.floor(Math.random() * 6);
        direction = Math.floor(Math.random() * 2);
        
        if (i > 0) {
            while (side == steps[i - 1].side && (direction + 1) % 2 == steps[i - 1].direction % 2 ) {
                side = Math.floor(Math.random() * 6);
                direction = Math.floor(Math.random() * 2);
            }
        }
        
        
        step = {
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

    let bRotateToFace = false;

    function shuffleCube() {
        for (let j = 0; j < 24; j++) {
            
            let direction = directions[steps[currentStep].direction];
            let axis = axes[steps[currentStep].side]
            
            let selectedCublets = [];

            allCublets.forEach(cublet => {
                let conditions = [
                    (Math.round(4 * cublet.position["z"]) == -1),
                    (Math.round(4 * cublet.position["z"]) == 1), 
                    (Math.round(4 * cublet.position["x"]) == -1),
                    (Math.round(4 * cublet.position["x"]) == 1),
                    (Math.round(4 * cublet.position["y"]) == 1),
                    (Math.round(4 * cublet.position["y"]) == -1),  
                ];

                if (conditions[steps[currentStep].side]) {
                    selectedCublets.push(cublet);
                    rotationGroup.attach(cublet);
                }
            });
            

            rotationGroup.rotation[axis] += threeMath.degToRad(direction);
            
            selectedCublets.forEach(cublet => {
                group.attach(cublet)
            });

            rotationGroup.rotation[axis] -= threeMath.degToRad(direction);

            currentStep++;
        }
    }

    function startSolving() {
        document.body.querySelector(".three-container").style.cursor = "default";
        document.getElementById("cube-instruction").style.opacity = 0;

        bCurrentlySolving = true;
        bRotateToFace = true;
        runSolveStep();
    }

    function runSolveStep() {
        currentStep--;
        if (currentStep < 0) {
            bRotateWhileSolving = false;
            bCubeIsSolved = true;
            bCurrentlySolving = false;
            return;
        }
        if (currentStep == 1) {
            // bRotateWhileSolving = true;
            // rotWhileSolvStep = 5 * delta;
        }
        
        // console.log(currentStep);

        allCublets.forEach(cublet => {
            let conditions = [
                (Math.round(4 * cublet.position["z"]) == -1),
                (Math.round(4 * cublet.position["z"]) == 1), 
                (Math.round(4 * cublet.position["x"]) == -1),
                (Math.round(4 * cublet.position["x"]) == 1),
                (Math.round(4 * cublet.position["y"]) == 1),
                (Math.round(4 * cublet.position["y"]) == -1),  
            ];

            
            // console.log(cublet.position[axis])
            
            if (conditions[steps[currentStep].side]) {

                // console.log(cublet.name)
                //console.log(axis)

                moveBackCublets.push(cublet);
                rotationGroup.attach(cublet);
            }
            
        });

        bMoveGroupBack = true;
    }

    let stopRot = false;
    let bRotateWhileSolving = false;
    let rotWhileSolvStep = 0;

    function rotateTo(num) {
        let rot = group.rotation.y;
        let goalRot = Math.PI * 2;
        stopRot = ( (Math.floor(rot / goalRot) + 1) * goalRot );
        console.log(rot)
        console.log(stopRot)

        

        stopRot += Math.PI / 2 * num;

        if (stopRot - rot > Math.PI * 2) {
            stopRot -= Math.PI * 2;
        }

    }

    function handleKeys(e) {

        if (e.key == "d") {
            console.log(renderer.info.render);
        }

        if (e.key == "q") {
            rotateTo(1);
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



            rotationGroup.rotation[axis] += threeMath.degToRad(direction);
            // rotationGroup.position.y += -.5;
            selectedCublets.forEach(cublet => {
                group.attach(cublet)
            });


            rotationGroup.rotation[axis] -= threeMath.degToRad(direction);
            console.log("re-attached")
            console.log(rotationGroup)
            


            currentStep++;
        }

        if (e.key == "a") {
            shuffleCube();
            
        }

        if (e.key == "s") {
            startSolving();
            // let rot = group.rotation.y;
            // let goalRot = Math.PI * 2;
            // let newStopRot = ( (Math.floor(rot / goalRot) + 1) * goalRot )
            // console.log(rot)
            // console.log(newStopRot)
            // rotWhileSolvStep = (newStopRot - rot) / 24 / 10;

            // bRotateWhileSolving = true;

        }
    }


    document.body.querySelector("#hash-cgb").addEventListener('mouseover', () => {
        if (bCurrentlySolving) return;
        if (!bCubeIsSolved) return
        rotateTo(0)
    });
    document.body.querySelector("#hash-3d").addEventListener('mouseover', () => {
        if (bCurrentlySolving) return;
        if (!bCubeIsSolved) return;
        rotateTo(2)
    });
    document.body.querySelector("#hash-vr").addEventListener('mouseover', () => {
        if (bCurrentlySolving) return;
        if (!bCubeIsSolved) return;
        rotateTo(3);
    });

    document.body.querySelector("#hash-more").addEventListener('mouseover', () => {
        if (bCurrentlySolving) return;
        if (!bCubeIsSolved) return;
        rotateTo(1)
    });

    document.body.querySelector("#hash-cgb").addEventListener('mouseout', () => {
        if(bCurrentlySolving) return;
        if (bCubeIsSolved) stopRot = false;
    });

    document.body.querySelector("#hash-3d").addEventListener('mouseout', () => {
        if(bCurrentlySolving) return;
        if (bCubeIsSolved) stopRot = false;
    });

    document.body.querySelector("#hash-vr").addEventListener('mouseout', () => {
        if(bCurrentlySolving) return;
        if (bCubeIsSolved) stopRot = false;
    });

    document.body.querySelector("#hash-more").addEventListener('mouseout', () => {
        if(bCurrentlySolving) return;
        if (bCubeIsSolved) stopRot = false;
    });

    document.body.querySelector(".three-container").addEventListener('click', () => {
        if (bCubeIsSolved || bCurrentlySolving) return;

        startSolving();

    })


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

        camera.lookAt(0, 0, 0)
        


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

            rotationGroup.rotation[axis] -= threeMath.degToRad(direction) / 10;   

            
            
            if (moveBackStep >= 10) {
                // console.log("ended")
                bMoveGroupBack = false;
                moveBackStep = 1;
                moveBackCublets.forEach(cublet => {
                    group.attach(cublet)
                });
                moveBackCublets = [];
                rotationGroup.rotation[axis] += threeMath.degToRad(direction);


                setTimeout(runSolveStep, 100);
                // runSolveStep();

            } else {
                moveBackStep++;
            }

        }

        if (bRotateToFace) {
            // group.rotation.y += 1 * delta;
            // group.rotation.y
        }

        if (bModelLoaded) {
            camera.position.y = 1 * Math.sin(.3 * time);


            if (stopRot == false && !bRotateWhileSolving) {

                group.rotation.y += 0.5 * delta;
            
            } else if (group.rotation.y < stopRot) {
                group.rotation.y += 16 * delta;
                
            }
            // console.log(group.rotation.y)

            if (bRotateWhileSolving) {
                group.rotation.y += rotWhileSolvStep;
            }
        }


        // controls.update();

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
  height: 100%;
  width: 100%;
  cursor: pointer;
  position: relative;
}

#c {
   width: 100%;
   height: 100%;
   display: block;
}

#c:focus {
    outline: none;
}

#cube-instruction {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-45%);
    background: #000000b0;
    text-shadow: 2px 2px 2px #00000024;
    border-radius: 24px;
    padding: 7px 17px;
    opacity: 1;
    transition-duration: 1s;
}
</style>
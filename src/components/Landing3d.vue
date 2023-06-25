<template>
	<div id="container3d" class=" w-full h-full"
	>
	<div class=" flex justify-center items-center w-full h-full absolute top-0 pointer-events-none">
		<div class="font-cornerstone text-5xl text-white w-[70%] h-full flex flex-col justify-center items-start">
			HELLO THERE, GEENRAL KENOBI!
			<br>
			Its A Pleasure to meet you
		</div>

	</div>
	</div>
</template>
<script setup lang="ts">
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { GUI } from 'dat.gui'
import { onMounted } from 'vue';
import Stats from 'stats.js'
import * as TWEEN from '@tweenjs/tween.js'

////scene
const scene = new THREE.Scene();



// const stats = new Stats()
// stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom



///camera
//const pos = new THREE.Vector3(-40,46, -72);
const camera = new THREE.PerspectiveCamera(90 , window.innerWidth / window.innerHeight, 0.1, 1000 );
// camera.position.x=-60;
// camera.position.y = 46;
 camera.position.z = 77;
//camera.lookAt(pos);


////renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance", precision: "highp", alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );


console.log(document.querySelector("#container3d"));
onMounted(()=>{

	document.querySelector("#container3d")?.appendChild(renderer.domElement);
	//document.querySelector("#container3d")?.appendChild(stats.dom);


})



////orbit controls
// const controls = new OrbitControls( camera, renderer.domElement );


/////load 3d asset
const loader = new GLTFLoader();
// controls.update();
loader.load( 'src/assets/models/iphone_12_pro.glb', function ( gltf ) {
	const myModel = gltf.scene;
	myModel.position.y -= 47
	myModel.position.x = 45
	myModel.rotateY(0.1)

	scene.add( myModel );

	function moveUp() {
  const initialPosition = { y: myModel.position.y };
  const targetPosition = { y: myModel.position.y + 6 };

  const tweenUp = new TWEEN.Tween(initialPosition)
    .to(targetPosition, 1000) // Move the object up in 1000 milliseconds
    .easing(TWEEN.Easing.Quadratic.InOut)
    .onUpdate(() => {
      myModel.position.y = initialPosition.y;
      renderer.render(scene, camera);
    });

  const tweenDown = new TWEEN.Tween(targetPosition)
    .to({ y: myModel.position.y }, 1000) // Move the object down in 1000 milliseconds
    .easing(TWEEN.Easing.Quadratic.InOut)
    .onUpdate(() => {
      myModel.position.y = targetPosition.y;
      renderer.render(scene, camera);
    })
    .onComplete(() => {
      // When the downward animation completes, start the upward animation again
      moveUp();
    });

  tweenUp.chain(tweenDown); // Chain the tweens together

  tweenUp.start(); // Start the upward animation
}

// Call the moveUp function to start the animation
moveUp();


	// const tween = new TWEEN.Tween({y:0}).to({y:1}, 200).onUpdate((coords)=>{
	// 	myModel.position.x += coords.y;
	// }).repeat(Infinity)
	// tween.start();
	
}, 
function (xhr) {
    const percentLoaded = (xhr.loaded / xhr.total) * 100;
    console.log('GLB model ' + Math.round(percentLoaded) + '% loaded');
  },
  
  function ( error ) {
	
	console.error( error );
	
} );




/////load 3d asset
const headphone_loader = new GLTFLoader();
// controls.update();
headphone_loader.load( 'src/assets/models/headphone.glb', function ( gltf ) {
	const myModel = gltf.scene;
	myModel.position.y -= 60
	myModel.position.x = 350
	myModel.position.z =-600

	myModel.rotateY(0.1)

	scene.add( myModel );

	function moveUp() {
  const initialPosition = { y: myModel.position.y };
  const targetPosition = { y: myModel.position.y + 20 };

  const tweenUp = new TWEEN.Tween(initialPosition)
    .to(targetPosition, 1000) // Move the object up in 1000 milliseconds
    .easing(TWEEN.Easing.Quadratic.InOut)
    .onUpdate(() => {
      myModel.position.y = initialPosition.y;
      renderer.render(scene, camera);
    });

  const tweenDown = new TWEEN.Tween(targetPosition)
    .to({ y: myModel.position.y }, 1000) // Move the object down in 1000 milliseconds
    .easing(TWEEN.Easing.Quadratic.InOut)
    .onUpdate(() => {
      myModel.position.y = targetPosition.y;
      renderer.render(scene, camera);
    })
    .onComplete(() => {
      // When the downward animation completes, start the upward animation again
      moveUp();
    });

  tweenUp.chain(tweenDown); // Chain the tweens together

  tweenUp.start(); // Start the upward animation
}

// Call the moveUp function to start the animation
moveUp();


	// const tween = new TWEEN.Tween({y:0}).to({y:1}, 200).onUpdate((coords)=>{
	// 	myModel.position.x += coords.y;
	// }).repeat(Infinity)
	// tween.start();
	
}, undefined, function ( error ) {
	
	console.error( error );
	
} );






////// Add lights to the scene, so we can actually see the 3D model
const sunLight = new THREE.DirectionalLight(0xd53bff, 15); // (color, intensity) toplight.position.set(500, 500, 500) //top-left-ish toplight.castShadow = true;
sunLight.position.set(-15,52,55);
sunLight.castShadow = true;
scene.add(sunLight);
const ambient = new THREE.AmbientLight(0xffffff, 25);
scene.add(ambient);


////dat GUI
// const gui = new GUI();


// create parameters for GUI
var params = {color: sunLight.color.getHex(), color2: ambient.color.getHex()}

// create a function to be called by GUI
const update = function () {
	var colorObj = new THREE.Color( params.color )
	var colorObj2 = new THREE.Color( params.color2 )


	sunLight.color.set(colorObj)
	ambient.color.set(colorObj2)


}

//////////////////////////////////////////////////
//// GUI CONFIG
// gui.add(sunLight, 'intensity').min(0).max(100).step(0.0001).name('Dir intensity')


// gui.add(sunLight.position, 'x').min(-100).max(100).step(0.00001).name('Dir X pos')
// gui.add(sunLight.position, 'y').min(0).max(100).step(0.00001).name('Dir Y pos')
// gui.add(sunLight.position, 'z').min(-100).max(100).step(0.00001).name('Dir Z pos')



// gui.addColor(params,'color').name('Dir color').onChange(update)
// gui.addColor(params,'color2').name('Amb color').onChange(update)


// gui.add(ambient, 'intensity').min(0).max(100).step(0.001).name('Amb intensity')
// gui.add(camera.position, 'x').min(-500).max(500).step(1).name('camera x pos')
// gui.add(camera.position, 'y').min(-500).max(500).step(1).name('camera y pos')
// gui.add(camera.position, 'z').min(-500).max(500).step(1).name('camera z pos')




/////animation loop
function animate() {
	// stats.begin();

	TWEEN.update();

    // controls.update();
	 renderer.render( scene, camera );
	// stats.end();
	requestAnimationFrame( animate );
}

animate();




window.addEventListener('resize', ()=>{
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth , window.innerHeight);

})

</script>

<style>

</style>
import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

//                                         fov, aspect ratio                            view frustum: controls what objects are visible relative to camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg')
})

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

renderer.render( scene, camera );

const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 )

// you can make custom material with the WebGl Library (will make stuff look cooler I suppose)
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );
const torus = new THREE.Mesh (geometry, material);

scene.add(torus)

//                                                intensity
const pointLight = new THREE.PointLight(0xffffff, 400);
pointLight.position.set(1,10,1)
scene.add(pointLight)

const ambientLight = new THREE.AmbientLight(0xffff00);
scene.add(ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial( { color: 0xffffff })
  const star = new THREE.Mesh( geometry, material );

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ));

  star.position.set(x, y, z);
  scene.add(star)


}

Array(200).fill().forEach(addStar)


const spaceTexture = new THREE.TextureLoader().load('spac.jpg');
scene.background = spaceTexture;

function moveCamera() {

  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;
  
  rocket.rotation.y += 0.02;
  rocket.rotation.z += 0.01;
  
  camera.position.x = t * -0.0001;
  camera.position.y = t * -0.0001;
  camera.position.z = t * -0.01;

  
}

document.body.onscroll = moveCamera

function animate() {
  requestAnimationFrame( animate );

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  controls.update();

  renderer.render( scene, camera );
}

// Avater

const rocketTexture = new THREE.TextureLoader().load('rocky.jpg')

const rocket = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial( { map: rocketTexture } )
)
scene.add(rocket)

// Moon
const moonTexture = new THREE.TextureLoader().load('moon.jpg')
const bumpTexture = new THREE.TextureLoader().load('bump.jpg')


const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: bumpTexture
  })
)

scene.add(moon)

moon.position.z = 30
moon.position.setX(-5);

animate()
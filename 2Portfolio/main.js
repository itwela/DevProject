import './style.css'
import * as THREE from 'three';
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//Scene
const scene = new THREE.Scene();

//Material
const sphereTexture = new THREE.TextureLoader().load('globe.jpg')

//Sphere
const geometry = new THREE.SphereGeometry(3, 24, 24)
const material = new THREE.MeshStandardMaterial( { 
    map: sphereTexture,
})

const spheremesh = new THREE.Mesh( geometry, material );
spheremesh.position.set(0,-0.5,0)

scene.add(spheremesh)


//Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}



//Light
const lightone = new THREE.PointLight(0xffffff, 200, -100)
lightone.position.set(5,15,3)
scene.add(lightone)

const lighttwo = new THREE.PointLight(0xffffff, 100)
lighttwo.position.set(5,30,3)
scene.add(lighttwo)

const lightthree = new THREE.PointLight(0xffffff, 20)
lightthree.position.set(0,2,5)
scene.add(lightthree)


const ambientLight = new THREE.AmbientLight(0x808080);
scene.add(ambientLight)

const lightfour = new THREE.PointLight(0xffffff, 5)
lightfour.position.set(0,-23,0)
scene.add(lightfour)


//const lightHelperone = new THREE.PointLightHelper(lightone)
//const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(lightHelperone)//, gridHelper)

//const lightHelpertwo = new THREE.PointLightHelper(lighttwo)
//const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(lightHelpertwo)

//background
const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;


//Camera   
const camera = new THREE.PerspectiveCamera( 45, sizes.width / sizes.height, 0.1, 100);
                                        //(45, 800 / 600)
camera.position.z = 19
scene.add(camera)



//Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGL1Renderer({canvas});


renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(2)
renderer.render(scene, camera)

//Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
// This stops people from being able to move object out of positions 
controls.enablePan = true
// This stops people from being able to zoom in or out.
controls.enableZoom = false
controls.autoRotate = true
//controls.autoRotateSpeed = 10


//Resize Function
window.addEventListener('resize', () => {
    //Update Sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    //Update Camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
})

//Makes contents on the page stop stretching and instead
// re renders the content.
//loop :)
const loop = () => {
    controls.update()
    //light.position.x += 0.1
    renderer.render(scene,camera);
    window.requestAnimationFrame(loop);
}

loop()

// Timeline (synchronize many animations)
// from to loops animating anyhting on the page here
const tl = gsap.timeline({ defaults: {duration: 1} })
tl.fromTo(spheremesh.scale, {z:0, x:0, y:0}, {z:1, x:1, y:1})
tl.fromTo('nav', {y: '-100%'}, {y:'0%'})
tl.fromTo('.title', {opacity: 0}, {opacity: 1})
tl.fromTo('.subtitle', {opacity: 0}, {opacity: 0.6})


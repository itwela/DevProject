import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import gsap from 'gsap'
import * as dat from 'dat.gui'


/**
 * Base
 */


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// 
let mixer = null

/**
 * Textures
 */

// ADD FULL MODEL!!!

const gltfLoader = new GLTFLoader()



let myGLTF;


// // idle guy
gltfLoader.load('lowpoly.glb',

    (gltf) => {
        // const children = [...gltf.scene.children]

        // for(const child of children) 
        // {
        //     scene.add(child)
        // }
        const textureLoader = new THREE.TextureLoader()
        const matcapTexture = textureLoader.load('/3.png')

        // Material
        const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture }) 

        // Apply material to all meshes in the glTF file
        gltf.scene.traverse((obj) => {
            if (obj instanceof THREE.Mesh) {
                obj.material = material;
            }
        });

        //Animation
        mixer = new THREE.AnimationMixer(gltf.scene)
        const action = mixer.clipAction(gltf.animations[0])

        action.play()


        gltf.scene.scale.set(0.005, 0.005, 0.005)
        gltf.scene.position.setX(-1.83)
        gltf.scene.position.setY(0.07)
        gltf.scene.position.setZ(0.07)

        myGLTF = gltf;


        scene.add(gltf.scene)
        console.log(gltf.scene)
  
    }
)




/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.left = - 7
directionalLight.shadow.camera.top = 7
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(5, 5, 5)
scene.add(directionalLight)

const lightHelperone = new THREE.PointLightHelper(directionalLight)
//const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelperone)//, gridHelper)


/**
 * Sizes
 */
const sizes = {
    width: innerWidth / 1, 
    height: innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth 
    // sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height) 
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


})

/**
 * Camera
 */
// Base camera
/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(4, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 1
camera.position.y = -4
camera.position.x = 12.5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
// controls.target.set(4, -1.2)
controls.enableDamping = true
controls.enablePan = true
controls.enableZoom = false
controls.enableRotate = false






/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

// clear color background
renderer.setClearColor(0x000000, 0);
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


// 



/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // update mixer
    // !== means different than 
    if (mixer !== null) {
        
        mixer.update(deltaTime)

    }

    // Update controls
    controls.update()

        // Update glTF object scale
        if (myGLTF) {
            const scale = Math.min(scene.width) / 300;
            myGLTF.scene.scale.set(0.005, 0.005, 0.005);
        }

    // animations
    if (myGLTF) {
        myGLTF.scene.rotation.y += deltaTime * 1
    } 
    
    
    // Render
    renderer.render(scene, camera)


    // Call tick again on the next frame
    window.requestAnimationFrame(tick)


}



/**
 * Debug
 */


window.addEventListener('keydown', (event) =>
{
    if(event.key === 'h')
    {
        if(gui._hidden)
            gui.show()
        else
            gui.hide()
    }
})




tick()

import {
    SpotLight,
    useGLTF,
    useAnimations,
    Environment,
    Html,
    PresentationControls
} from '@react-three/drei'
import * as THREE from 'three'
import { AmbientLight } from 'three'
import { useEffect, useState, useRef } from 'react'
import { useControls } from 'leva'
import { useFrame } from '@react-three/fiber'


export default function Model() {
    const computer = useGLTF("./src/3d/computer/scene.gltf")
    const animations = useAnimations(computer.animations, computer.scene)
    console.log(computer)
   
    const [hover, setHover] = useState(false)
    const hoverstateRef = useRef()
    const vec = new THREE.Vector3()

    // const { animationName } = useControls({
    //     animationName: { options: animations.names }
    // })

    useEffect(() => {
        const action = animations.actions.Animation
        action
            .reset()
            .fadeIn(0.5)
            .play()

        return () => {
            action.fadeOut(0.5)
        }
    }, [])
    

    useFrame(state => {
        if (hover) {
            state.camera.lookAt(0,0.2,0)
            state.camera.position.lerp(vec.set(0, 1.45, 1.4), .0099)
            console.log('yo')
        } else {
            state.camera.position.lerp(vec.set(0, 1.3, 3.4), .09)
            state.camera.lookAt(0, 0.2, 0); // Set the camera's lookAt target
             // Set the camera position to its original position
         } // Set the camera's lookAt target to the center of the scene
        return null;
    })

    return <>


        <PresentationControls
            polar={[-0.4, -0.4]}
            azimuth={[-0.8, 0.8]}
        >
            <primitive
                object={computer.scene}
                scale={0.5}
                position-y={-0.45}
                ref={hoverstateRef}

            >
                <Html 
                    wrapperClass='laptop' 
                    className='lapcont'
                    position={[0.03, 1.43, 0.4]}
                    transform
                    distanceFactor={2.6}
                    rotation-x={0, 50.2}
                >
                    <iframe 
                    // src="https://itwela.vercel.app/"
                    src="https://192.168.86.163:3000/?room=powerful_elephant_614&editorid=688"
                    onMouseEnter={() => setHover(!hover)}
                    onMouseLeave={() => setHover(false)}
                    ></iframe>
                </Html>
            </primitive>
            {/* <mesh receiveShadow position-y={ -0.53 } rotation-x={ - Math.PI * 0.5 } scale={ 6}>
            <planeGeometry />
            <meshStandardMaterial color="#3a3a3a" />
        </mesh>  */}
        </PresentationControls>
        {/* </Float> */}
    </>
}

useGLTF.preload("./src/3d/computer/scene.gltf")
import {
    SpotLight,
    useGLTF,
    useAnimations,
    Environment,
    Html,
    PresentationControls,
    Float,
    useTexture
} from '@react-three/drei'
import * as THREE from 'three'
import { AmbientLight } from 'three'
import { useEffect, useState, useRef } from 'react'
import { useControls } from 'leva'
import { Unity, useUnityContext } from "react-unity-webgl";
import { useFrame } from '@react-three/fiber'
import sand1 from '../assets/brown10.png'
import sand2 from '../assets/brown2.jpg'
import sand3 from '../assets/brown4.jpg'


export default function Model() {
    const computer = useGLTF('sphere4.glb')
    const computerRef = useRef();
    const animations = useAnimations(computer.animations, computer.scene)
   
    const [hover, setHover] = useState(false)
    const hoverstateRef = useRef()
    const vec = new THREE.Vector3()

    const sandTex1 = useTexture(sand1)
    // const sandTex2 = useTexture(sand2)
    // const sandTex3 = useTexture(sand3)

    // const allTex = [sandTex3, sandTex2, sandTex1]
    // const { animationName } = useControls({
    //     animationName: { options: animations.names }
    // })
    

    // useEffect(() => {
    //     const action = animations.actions.Animation
    //     action
    //         .reset()
    //         .fadeIn(0.5)
    //         .play()

    //     return () => {
    //         action.fadeOut(0.5)
    //     }
    // }, [])
    

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

    if (computerRef.current) {
        computerRef.current.traverse((child) => {
          if (child.isMesh) {
            child.material.transparent = true;
            child.material.opacity = 0.3; // Set the opacity you want
          }
        });
      }

    return <>

        <Float>
        <PresentationControls
            polar={[-0.4, -0.4]}
            azimuth={[-0.8, 0.8]}
        >
            <primitive
                object={computer.scene}
                ref={computerRef}
                scale={2}
                position-x={-7.2}    
                // position-y={0.1}    
            />
            <mesh receiveShadow position-y={ -0.53 } position-x={ -1.6 } rotation-x={ - Math.PI * 0.5 } scale={ 1.7}>
            {/* <sphereGeometry />
            {/* <meshStandardMaterial map={sand1}/> */}
            {/* <meshBasicMaterial map={sandTex1} map-flipY={ false } /> */} 
        </mesh> 
        </PresentationControls>
        </Float>
    </>
}

useGLTF.preload('sphere4.glb')
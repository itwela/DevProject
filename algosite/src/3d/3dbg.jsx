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
import { Unity, useUnityContext } from "react-unity-webgl";
import { useFrame } from '@react-three/fiber'


export default function Model() {
    const computer = useGLTF('compu.glb')
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
                // object={computer.scene}
                scale={0.5}
                position-y={-0.45}
                // ref={hoverstateRef}

            >
                <Html 
                    className='lapcont'
                    position={[0.03, 1.43, 0.37]}
                    transform
                    distanceFactor={2.6}
                    rotation-x={0, 50.2}
                >
                     {/* <span className='pl-[15px]'>Hey,</span>
                     <br /> 
                     <p className='pl-[10px]'>
                        I trade for I&I Technologies.</p> */}
                    <iframe 
                    // src="https://itwela.vercel.app/"
                    src="https://www.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22CME_MINI%3AMNQ1!%22%2C%22frameElementId%22%3A%22tradingview_a85e5%22%2C%22interval%22%3A%22D%22%2C%22hidelegend%22%3A%221%22%2C%22hidesidetoolbar%22%3A%221%22%2C%22symboledit%22%3A%221%22%2C%22saveimage%22%3A%220%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22www.tradingview.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22CME_MINI%3AMNQ1!%22%2C%22page-uri%22%3A%22www.tradingview.com%2Fwidget%2Fadvanced-chart%2F%22%7D"
                    onMouseEnter={() => setHover(!hover)}
                    onMouseLeave={() => setHover(false)}
                    >
                    </iframe>
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

// useGLTF.preload('compu.glb')
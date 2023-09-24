import { useThree, extend, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Stage, Lightformer, Sparkles, Environment, Sky, ContactShadows, RandomizedLight, AccumulativeShadows, SoftShadows, BakeShadows, useHelper, Center } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import * as THREE from 'three'

extend ({ OrbitControls })

export default function Experience()
{
    const { camera, gl } = useThree() 
    // && useScroll()
    const circleRef = useRef()
    const sparkleRef = useRef()
 
    
    useFrame((state, delta) =>
    {
        // const angle = state.clock.elapsedTime
        // state.camera.position.x = Math.sin(angle) * 8
        // state.camera.position.z = Math.cos(angle) * 8
        // state.camera.lookAt(0, 0, 0)

        // circleRef.current.rotation.y += delta
        // groupRef.current.rotation.y += delta
        // const angle = state.clock.elapsedTime / 2
        // state.camera.position.x = Math.sin(angle) * 1
        // state.camera.position.y = Math.sin(angle) * 1
        // state.camera.position.z = Math.cos(angle) * 6
        // state.camera.lookAt(0,0,0)
        
    })

    // useScroll ((state) =>
    // {

    //     state.camera.position.x = Math.sin(angle) * 8
    //     state.camera.position.z = Math.cos(angle) * 8

    // })

    return <>

        <EffectComposer>
            <Bloom mipmapBlur />
        </EffectComposer>

            <orbitControls enableZoom={false} args={ [ camera, gl.domElement ] } />
            
            <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
            <ambientLight intensity={ 0.5 } />
        <Center>
                {/* <mesh scale={0.4}>    
                <capsuleGeometry/>
                <meshStandardMaterial color={ [0.2, 0.05, 4] } toneMapped={ false }/>
                </mesh> */}
                    <Sparkles 
                        size={0.2}
                        scale={9}
                    />
                    <Sparkles 
                        size={0.4}
                        scale={9}
                        position-z={-0.5}
                    />
                    <Sparkles 
                        size={0.4}
                        scale={9}
                        position-x={4.9}
                    />
                    <Sparkles 
                        size={0.4}
                        scale={9}
                        position-x={-4.9}
                    />


        </Center>
        </>
}
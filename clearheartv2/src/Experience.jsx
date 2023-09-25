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
    const circleRef = useRef()
    const sparkleRef = useRef()

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
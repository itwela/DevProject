import { OrbitControls, Environment, useTexture, useGLTF, useAnimations } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { EffectComposer } from '@react-three/postprocessing'
import { useEffect } from 'react'


export default function ApModel()
{

    const model = useGLTF('./campfire/scene.gltf')
    const animations = useAnimations(model.animations, model.scene)

    useEffect(() => {

        const action = animations.actions.Animation
        action.play()
        // console.log(action)
    }, [])

    return <>

        <EffectComposer>
        </EffectComposer>
        {/* <color args={['#331A0E']} attach='background'/> */}
        {/* <Perf position="top-left" /> */}
        <OrbitControls enableZoom={false} />
        <Environment preset='forest'/>
        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.001 } />
        <ambientLight intensity={ 0.5 } />
        <primitive
        object={ model.scene }
        scale={ 5 }
    />
    </>
}

useGLTF.preload('./campfire/scene.gltf')
import { OrbitControls, Environment, useTexture } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { EffectComposer } from '@react-three/postprocessing'

export default function ApModel()
{

    // const model = useLoader(GLTFLoader, './campfire/scene.gltf')

    return <>

        <EffectComposer>

        </EffectComposer>

        {/* <color args={['#331A0E']} attach='background'/> */}


        {/* <Perf position="top-left" /> */}

        <OrbitControls enableZoom={true} />
        <Environment preset='forest'/>
        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.001 } />
        {/* <ambientLight intensity={ 0.5 } /> */}

    </>
}
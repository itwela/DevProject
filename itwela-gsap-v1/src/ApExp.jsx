import { OrbitControls, Environment, Clone, useGLTF, useAnimations, useTexture, MeshPortalMaterial, RoundedBox, CameraControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Suspense, useState } from 'react'
import { useEffect } from 'react'
import * as THREE from 'three'
import ApModel from './ApModel.jsx'


export default function Experience() {

    const [active, setActive] = useState(null)

    const model = useGLTF('./campfire/scene.gltf')
    const animations = useAnimations(model.animations, model.scene)

    useEffect(() =>
    {

        const action = animations.actions.Animation
        action.play()
        // console.log(action)

    }, [])

    const map = useTexture(
        // '../public/3cave.jpg'
        // '../public/Surreal_equirectangular-png_a_home_for_a_2712941_8912756.png'
        '../public/Anime_equirectangular-png_a_dark_cave_that_1440576948_8912784.png'
    )

    return <>


        <CameraControls />

        {/* <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } /> */}
        <ambientLight intensity={0.5} />
        <Environment preset='sunset' />
        <RoundedBox args={[2, 3, 0.1]} onDoubleClick={ () => setActive(active === name ? null : name)}>
            active={active}
            setActive={setActive}
            <MeshPortalMaterial side={THREE.DoubleSide} blend={active  === name ? 1 : 0}>
                <ambientLight intensity={0.5} />
                <Environment preset='sunset' />
                <mesh>
                    <sphereGeometry args={[12, 64, 64]}/>
                    <meshStandardMaterial map={map} side={THREE.BackSide} />
                </mesh>
            </MeshPortalMaterial >
        </RoundedBox>

        <Suspense>
            <ApModel />
        </Suspense>
        {/* <primitive object={model.scene} position-y={-1}/> */}

    </>
}

useGLTF.preload('./campfire/scene.gltf')
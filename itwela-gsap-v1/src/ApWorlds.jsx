import { OrbitControls, Environment, Clone, useGLTF, useAnimations, useTexture, MeshPortalMaterial, RoundedBox, CameraControls, Bounds, Capsule } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Suspense, useState } from 'react'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import ApModel from './ApModel.jsx'
import cave1 from '../public/Anime_equirectangular-png_a_dark_cave_that_1440576948_8912784.png'
import cave2 from '../public/Surreal_equirectangular-png_a_home_for_a_2712941_8912756.png'


import { easing } from 'maath'


export default function ApWorlds() {

    const [active, setActive] = useState(null)
    const map = useTexture(cave1)
    const map2 = useTexture(cave2)
    const portalMaterial = useRef()
    const firepitMaterial = useRef()

    useFrame((_state, delta) => {
        const worldOpen = active === name;
        easing.damp(portalMaterial.current, 'blend', worldOpen ? 1 : 0, 0.2, delta)
        // easing.damp(firepitMaterial.current, 'blend', worldOpen ? 1 : 0, 0.2, delta)
    })

    return <>
        <CameraControls 
        maxPolarAngle={Math.PI / 2} 
        minPolarAngle={Math.PI / 6} 
        maxDistance={15}
        maxSpeed={8}
        maxZoom={0}
         />

        <ambientLight intensity={0.5} />
        <Environment preset='sunset' />
        <Suspense>
        <RoundedBox args={[2, 3, 0.1]} position-y={-1} scale={5} onDoubleClick={() => setActive(active === name ? null : name)}>
            active={active}
            setActive={setActive}
            <MeshPortalMaterial side={THREE.DoubleSide}
                ref={portalMaterial}>
                <ambientLight intensity={0.5} />
                <Environment preset='sunset' />
                <mesh>
                    <sphereGeometry args={[12, 64, 64]} />
                    <meshStandardMaterial map={map} side={THREE.BackSide} />
                </mesh>
            </MeshPortalMaterial >
            {/* <ApModel ref={firepitMaterial}/> */}
        </RoundedBox>
        </Suspense>

        {/* ---------------- */}
{/* 
        <RoundedBox args={[2, 3, 0.1]}  position-x={-1} rotation-y={Math.PI / 8} onDoubleClick={() => setActive(active === name ? null : name)}>
            active={active}
            setActive={setActive}
            <MeshPortalMaterial side={THREE.DoubleSide}
                ref={portalMaterial}>
                <ambientLight intensity={0.5} />
                <Environment preset='sunset' />
                <mesh>
                    <sphereGeometry args={[12, 64, 64]} />
                    <meshStandardMaterial map={map2} side={THREE.BackSide}  />
                </mesh> 
            </MeshPortalMaterial >
        </RoundedBox> */}
       

        {/* ----------------- */}

            {/* <OrbitControls makeDefault />
            <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias={ 0.04 } />
            <ambientLight intensity={ 0.5 } />

            <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />
            </mesh> */}


    </>
}


import { OrbitControls, Environment, Clone, useGLTF, useAnimations, useTexture, MeshPortalMaterial, RoundedBox, CameraControls, Bounds, Capsule } from '@react-three/drei'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Suspense, useState } from 'react'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import ApModel from './ApModel'
// import cave1 from '../public/Anime_equirectangular-png_a_dark_cave_that_1440576948_8912784.png'
// import cave2 from '../public/Surreal_equirectangular-png_a_home_for_a_2712941_8912756.png'



export default function ApWorlds() {


    return <>
        {/* <CameraControls 
        maxPolarAngle={Math.PI / 2} 
        minPolarAngle={Math.PI / 6} 
        zoom={false}
        dolly={false}
        enableZoom={false}
        // maxDistance={10}
        /> */}
        <OrbitControls
        enableZoom={false}
        enablePan={false}
        />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias={ 0.04 } />
        <ambientLight intensity={ 0.5 } />
        
        {/* <mesh receiveShadow position-y={ -1 } rotation-x={ - Math.PI * 0.5 } scale={ 4}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh> */}
        <Suspense>
             <ApModel/>
        </Suspense>

    </>
}


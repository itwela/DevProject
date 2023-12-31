import { PresentationControls, Environment, Clone, useGLTF, useAnimations, useTexture, MeshPortalMaterial, RoundedBox, CameraControls, Bounds, Capsule, SpotLight } from '@react-three/drei'
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
         <Environment 
         preset='forest'
        />      

{/* <SpotLight
            distance={7}
            position-y={2.1}
            position-x={-2.1}
            radiusTop={0.01}
            radiusBottom={2.6}
            opacity={0.356}
            color={'#5F90F0'}
        /> */}
        <directionalLight
        
        />
        <Suspense>
             <ApModel/>
             
        </Suspense>

    </>
}


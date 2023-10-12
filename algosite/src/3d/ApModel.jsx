import {
    SpotLight,
    useGLTF,
    useAnimations,
    Environment,
    Html,
    PresentationControls
} from '@react-three/drei'
import { AmbientLight } from 'three'
import { useEffect } from 'react'
import { useControls } from 'leva'


export default function Model() {
    const computer = useGLTF("./src/3d/computer/scene.gltf")
    const animations = useAnimations(computer.animations, computer.scene)
    console.log(computer)

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

    return <>

        <SpotLight
            distance={5}
            position-y={2.1}
            radiusTop={0.5}
            radiusBottom={2.6}
            opacity={0.2}
            color={'#5F90F0'}
        />
        <PresentationControls
            global
            polar={[-0.4, -0.4]}
            azimuth={[-0.4, 0.4]}
        >
            <primitive
                object={computer.scene}
                scale={0.5}
                position-y={-0.45}
            >
                <Html 
                    wrapperClass='laptop' 
                    className='lapcont'
                    position={[0.03, 1.43, 0.4]}
                    transform
                    distanceFactor={2.6}
                    rotation-x={0, 50.2}
                >
                    <iframe src="https://itwela.vercel.app/"></iframe>
                </Html>
            </primitive>
            <mesh receiveShadow position-y={ -0.53 } rotation-x={ - Math.PI * 0.5 } scale={ 6}>
            <planeGeometry />
            <meshStandardMaterial color="black" />
        </mesh> 
        </PresentationControls>
        {/* </Float> */}
    </>
}

useGLTF.preload("./src/3d/computer/scene.gltf")
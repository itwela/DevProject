import { useGLTF } from '@react-three/drei'

export default function Model()
{
    const computer = useGLTF("./src/3d/computer/scene.gltf")
    console.log(computer)
    
    return <>
    <primitive
        object={computer.scene}
        scale={0.6}
        position-y={-0.6}
    />
    </>
}

useGLTF.preload("./src/3d/computer/scene.gltf")
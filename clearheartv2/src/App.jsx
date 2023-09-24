import React from 'react'
import ReactDOM from 'react-dom'
import Experience from './Experience.jsx'
import { Canvas } from '@react-three/fiber'
import "./index.css"

const camsettings = 
{
  fov: 45,
  zoom: 100,
  near: 0.1,
  far: 200
} 


// R3F ELEMENTS ------------------- START

ReactDOM.render(
  <>
    <Canvas orthographic
    camera =
    { 
      camsettings 
    }>
    {/* <color 
      args={ [ 'black' ] } attach='background'
    /> */}
    <Experience/>
    </Canvas>
  </>,
  document.getElementById('root')
)

// R3F ELEMENTS ------------------- END


// ReactDOM.render(
//   <>
//     <h1>Yo</h1>
//   </>,
//   document.getElementById('root')
// )
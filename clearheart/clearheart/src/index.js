import ReactDOM from 'react-dom/client'
import Experience from './Experience.js'
import Homehtml from './homepage.js'
import { Canvas } from '@react-three/fiber'


const root = ReactDOM.createRoot(document.querySelector('#root'));
const homepage = ReactDOM.createRoot(document.querySelector('#homepage'));


const camsettings = {
    fov: 45,
    zoom: 100,
    near: 0.1,
    far: 200
  } 

homepage.render(

  <Homehtml />


)


// root.render(
//   <>
//     <Canvas 
//       orthographic
//       camera={ 
//         camsettings 
//       }
//     >
//     {/* <color 
//       args={ [ 'black' ] } attach='background'
//     /> */}
//     <Experience/>
//     </Canvas>
//   </>
// );



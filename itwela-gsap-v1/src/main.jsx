import React from 'react'
import ReactDOM from 'react-dom/client'
import Blog from './pages/Play/Play.jsx'
import Contact from './pages/Contact/Contact.jsx'
import App from './App.jsx'
import ApExp from './ApExp.jsx'
import { Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import './index.css'
import { createBrowserRouter,RouterProvider,Route, Routes, HashRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'blog',
    element: <Blog/>
  },
  {
    path: 'contact',
    element: <Contact/>
  },
]);



const root =ReactDOM.createRoot(document.getElementById('root'))


root.render(
  // return (
  <>
  {/* <HashRouter> */}
    <RouterProvider router={router}></RouterProvider>
    {/* </HashRouter> */}
  </>

  // )
)


export default function R3fasset() {

  return (
  <>
  <div id='dacanvas'>
    <Canvas
    camera= 
    {{ position: [0, 14, -15] , fov: 60,  }}>
      <ApExp/>
    </Canvas>
    </div>
  </>
  )
}
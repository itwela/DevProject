import React from 'react'
import ReactDOM from 'react-dom/client'
import Blog from './pages/Hero/Hero.jsx'
import Contact from './pages/Contact/Contact.jsx'
import App from './App.jsx'
import ApExp from './ApExp.jsx'
import { Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import './index.css'
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom'

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
  <>
  <div id="canvas-container">
    <Canvas
    shadows camera= {{ position: [0,0,10], fov:30 }}
    >
      <Html>
      </Html>
      <ApExp/>
    </Canvas>
    </div>
    <RouterProvider router={router}></RouterProvider>
  </>

)
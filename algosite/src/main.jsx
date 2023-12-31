import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ApWorlds from './3d/ApWorlds.jsx'
import './index.css'
import { Canvas } from '@react-three/fiber'
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom'
import Strategies from './pages/trades/Strategies.jsx'
import Insights from './pages/insights/Insights.jsx'
import About from './pages/About/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'Insights',
    element: <Insights/>
  },
  {
    path: 'Strategies',
    element: <Strategies/>
  },
  {
    path: 'About',
    element: <About/>
  },
]);

const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouterProvider router={router} />
)

export default function R3fasset() {

  return (
  <>
  <div id='dacanvas'>
    <Canvas
    camera= 
    {{ position: [0, 1.3, 3.4] , fov: 35}}
    opacity={[0.2]}
    >
      <ApWorlds/>
    </Canvas>
    </div>
  </>
  )
}
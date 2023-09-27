import React from 'react'
import ReactDOM from 'react-dom/client'
import Blog from './pages/Hero/Hero.jsx'
import Contact from './pages/Contact/Contact.jsx'
import App from './App.jsx'
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
  <RouterProvider router={router} />
)
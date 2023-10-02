import React from 'react'
import ReactDOM from 'react-dom/client'
// import Blog from './pages/Blogpage/Blog-page.jsx'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  // {
  //   path: 'blog',
  //   element: <Blog/>
  // },
]);



const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouterProvider router={router} />
)
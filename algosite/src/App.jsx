import { useState } from 'react'
import './App.css'
import R3fasset from './main'
import Hero from './pages/hero/hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <R3fasset/>
      <Hero>
      </Hero>
    </>
  )
}

export default App

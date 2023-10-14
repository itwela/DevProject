import { useState } from 'react'
import './App.css'
import R3fasset from './main'
import Hero from './pages/hero/hero'
import Unitytrade from './3d/Unitytrade.jsx'

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

import { useState } from 'react'
import './App.css'
import Mnq from './3d/Mnq.jsx'
// import R3fasset from './main'
import Hero from './pages/hero/hero'
import Unitytrade from './3d/Unitytrade.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mnq/>
      {/* <R3fasset/> */}
      <Hero>
      </Hero>
    </>
  )
}

export default App

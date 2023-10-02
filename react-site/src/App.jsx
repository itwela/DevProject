import Hero from './pages/hero/Hero.jsx'
import Header from './components/Header/Header.jsx'
import Overlay from './components/graphics/overlay.jsx'
import Projects from './pages/projects/Projects.jsx'
import StickyFooter from './components/footer/footer.jsx'
import './App.css'
import './index.css'


function App() {

  return (
    <>
    <Header/>
      <Hero/>
      <Projects/>
      <Hero/>
      <StickyFooter/>
    </>
  )
}

export default App

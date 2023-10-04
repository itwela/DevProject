import Hero from './pages/hero/Hero.jsx'
import Header from './components/Header/Header.jsx'
import Overlay from './components/graphics/overlay.jsx'
import Projects from './pages/projects/Projects.jsx'
import About from './pages/about/About.jsx'
import ProjectSlider from './pages/projects/Projects2.jsx'
import Connect from './pages/connect/Connect.jsx'
import StickyFooter from './components/footer/footer.jsx'
import './App.css'
import './index.css'


function App() {

  return (
    <>
    <Header/>
      <Hero/>
      <Projects/>
      <ProjectSlider/>
      <About/>
      <Connect/>
      <StickyFooter/>
    </>
  )
}

export default App

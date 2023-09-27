import React from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './pages/Hero/Hero';
import Contact from './pages/Contact/Contact';
import { motion } from 'framer-motion'
import './components/Navbar/Navbar.scss'


function App() {
  return (
      <>
      <Navbar/>
      <motion.div className='home-container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
      <section className='welcome-section'>
        <h1 className='letters-home'>
        <motion.div className='t-w' animate={{ color: '#c73c2e' }}>W</motion.div>
        <motion.div className='t-e' animate={{ color: '#e35e3f' }}>E</motion.div>
        <motion.div className='t-l' animate={{ color: '#ff9b50' }}>L</motion.div>
        <motion.div className='t-c' animate={{ color: '#ffba5d' }}>C</motion.div>
        <motion.div className='t-o' animate={{ color: '#ffd46e' }}>O</motion.div>
        <motion.div className='t-m' animate={{ color: '#ffea67' }}>M</motion.div>
        <motion.div className='t-ee' animate={{ color: '#fff175' }}>E</motion.div>
        </h1>
        </section>
        </motion.div>

        {/* Hero */}
        <Hero/>
        {/* contact */}
        <Contact/>
      </>
    );
}

export default App

import React from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar/Navbar';
import { motion } from 'framer-motion'
import './components/Navbar/Navbar.scss'


function App() {
  return (
      <>
      <Navbar/>
      <section className='welcome-section'>
        <h1 className='letters-home'>
        <motion.div className='t-w' animate={{ color: '#ff2945' }}>W</motion.div>
        <motion.div className='t-e' animate={{ color: '#ffcc00' }}>E</motion.div>
        <motion.div className='t-l' animate={{ color: '#40cc0' }}>L</motion.div>
        <motion.div className='t-c' animate={{ color: '#2190ff' }}>C</motion.div>
        <motion.div className='t-o' animate={{ color: '#e8eaed' }}>O</motion.div>
        <motion.div className='t-m' animate={{ color: '#e8e' }}>M</motion.div>
        <motion.div className='t-ee' animate={{ color: '#e78d30' }}>E</motion.div>
        </h1>
        </section>
      </>
    );
}

export default App

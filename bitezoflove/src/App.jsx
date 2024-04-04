import { useState, useContext } from 'react'

import { motion } from 'framer-motion';
import Header from './components/header/header'
import FooterComp from './components/footer/footer';
import Hero from './pages/hero/hero'
import Bottles from './pages/bottles/bottles'
import Brands from './pages/brands/brands';
import './App.css'
import FindUs from './pages/findus/findus';

function FadeInWhenVisible() {

      // --------- ANIMATIONS

      const fadeIn = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
        exit: { opacity: 0 } // define exit animation
      }
    
      // -------------------
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.3 }}
      variants={fadeIn}
    >
    </motion.div>
  );
}


function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Brands/>
      <Bottles/>
      <FindUs/>
      <FooterComp/>
    </>
  )
}

export default App

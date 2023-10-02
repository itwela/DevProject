import React, { useState } from 'react'
import { gsap } from 'gsap'
import torch from '../public/cave/torch1.gif'
import torch2 from '../public/cave/torch2.gif'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import './App.css'
import '../index.css'
import './Appmore.css'
import './components/Navbar/Navbar.scss'
import Navbar from './components/Navbar/Navbar'
import Stock from './components/Stock/Stock.jsx'
import Skills from './components/Skills/Skills.jsx'
import { duration } from '@mui/material'




function App() {

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 } // define exit animation
  }
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const handleClick = (id) => {
    setIsVisible(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };
  const handleClick2 = (id) => {
    setIsVisible2(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };
  const handleClick3 = (id) => {
    setIsVisible3(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMinimized2, setIsMinimized2] = useState(false);
  const [isMinimized3, setIsMinimized3] = useState(false);
  const currentlifestatus = "and am currently looking for internships and or work opportunities."
  const variants = {
    enterxleft: { x: [-100, 700, 0] },
    exitxleft: { x: [0, -1000] }
  }

  return (
    <>
      <Navbar />
      {/* <div className='wrapper-all'> */}
      <div className='home-container'>
        <div class="container">
        {/* HI IM ITWELA */}
        {!isVisible['more-1-wrapper'] && (
          <div className="letters-home">
            <img className='torch-left-1' src={torch}></img>
            <div className='absolut-welcome-wrapper'>
              <motion.div className='title-container'
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 0.2
                  }
                }}
              >
              </motion.div>
            </div>
          </div>
        )}
        <div className="more-1-cont">
          <div id='m-a' className='m-a'
            onClick={() => {
              handleClick('more-1-wrapper');
              setIsMinimized(!isMinimized);
            }}>
            {isMinimized ? "X" : ""} <div id='bottom-right-cont'> <div className="more-bt">More</div></div>
          </div>
        </div>
        <AnimatePresence>
          {isVisible['more-1-wrapper'] && (
            <motion.div className="more-1-wrapper" id='more-wrapper'
              initial='hidden'
              animate='show'
              variants={fadeIn}
              exit={'exit'}
              transition={{ duration: 1 }}
              delay={3}
            >
              <Stock />
              <h1 className='more-text-1' id='more-text-all'></h1>
              <p id='dropdown-text'>Hello,<br></br><br></br> My name is Itwela Ibomu and I love
                design and development. Im 22 years old, from Atlanta, Ga {currentlifestatus}
                <br></br>
                <br></br>
                Currently, I attend WGU - Western Governors University pursuing my bachelors in Software Engineering.
                <br></br>
                <br></br>
              </p>
              <div className='skills'>
                <Skills />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>

        {/* IM A SOFTWARE DEV */}
        <section className='welcome-section-2' id='home-section'>
          {!isVisible2['more-2-wrapper'] && (
            <div className='letters-home-2'>
              <img className='torch-right-1' src={torch} />
              <motion.div className='t-w'
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 0.2
                  }
                }}>
              </motion.div>
            </div>
          )}
          <div className="more-2-cont">
            <div className='m-a-1' id='m-a-1'
              onClick={() => {
                handleClick2('more-2-wrapper');
                setIsMinimized2(!isMinimized2);
              }}>
              {isMinimized2 ? "Close" : ""} <div id='top-left-cont'><div className="project-bt"></div></div>
            </div>
          </div>
          <AnimatePresence>
            {isVisible2['more-2-wrapper'] && (
              <motion.div className="more-2-wrapper" id='more-wrapper'
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 0.2
                  }
                }}>
                {/* <div id='top-left-cont'> */}
                <h1 className='more-text-2' id='more-text-all'></h1>
                {/* </div> */}
                <p id='dropdown-text' class='dropdown-text-2'>Hello,<br></br><br></br> 
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>

      {/* I LIKE SIMPLE */}
      <section className='welcome-section-3' id='home-section'>
        {!isVisible3['more-3-wrapper'] && (
          <h1 className='letters-home-2'>
            <img className='torch-left-2' src={torch}></img>
            <motion.div className='t-w'
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 0.2
                }
              }}
            >
            </motion.div>
          </h1>
        )}
        <div className="more-3-cont">
          <div className='m-a-2'
            id='m-a-2'
            onClick={() => {
              handleClick3('more-3-wrapper');
              setIsMinimized3(!isMinimized3);
            }}>
            {isMinimized3 ? "Close" : ""} <div id='top-right-cont'> <div id='interest-bt'></div></div>
          </div>
        </div>
        <AnimatePresence>
          {isVisible3['more-3-wrapper'] && (
            <motion.div className="more-3-wrapper" id='more-wrapper'
              initial='hidden'
              animate='show'
              variants={fadeIn}
              exit={'exit'}
              transition={{ duration: 1 }}>
              <div id="top-right-cont">
                <h1 className='more-text-3' id='more-text-3'>\</h1>
                <p className='more-text-3'>   
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* LETS CONNECT */}
      <section className='hero-3' id='home-section'>
        <h1 className='letters-home-3'>
          <img className='torch-bottom-right' src={torch2}></img>
          <img className='torch-bottom-left' src={torch2}></img>
          <motion.div className='t-w'
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.2
              }
            }}>
            Lets <br></br> Connect</motion.div>
        </h1>

      </section>

      {/* </div> */}
      {/* )} */}

    </>
  );
}

export default App

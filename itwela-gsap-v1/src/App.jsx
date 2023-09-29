import React, { useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import './App.css'
import './index.css'
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


  // --------------------------------

  const currentlifestatus = "and am currently looking for internships and or work opportunities."

  const variants = {
    enterxleft: { x: [-100, 700, 0] },
    exitxleft: { x: [0, -1000] }
  }

  return (

    <>
      <Navbar />
      {/* <ApExp /> */}
      {/* {['element1', 'element2', 'element3'].map(id => */}
      <div className='home-gradient'>
        <motion.div className='home-container'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>

          {/* HI IM ITWELA */}
          <section className='welcome-section' id='home-section'>
            {!isVisible['more-1-wrapper'] && (
              
              <div className="letters-home">
                <h1 className=''>
                <motion.div className='t-w'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}>
                  WE MAKE <br></br> HAPPEN
                  <p className='subhead'>
                    Im Itwela, Lets build.
                  </p>
                </motion.div>
              </h1>
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
                  transition={{ duration: 1 }}>
                  <Stock />
                  <h1 className='more-text-1' id='more-text-all'>Background:</h1>
                  <p id='dropdown-text'>Hello,<br></br><br></br> My name is Itwela Ibomu and I love
                    design and development. Im 22 years old, from Atlanta, Ga {currentlifestatus}
                    <br></br>
                    <br></br>
                    Currently, I attend WGU - Western Governors University pursuing my bachelors in Software Engineering.
                    <br></br>
                    <br></br>
                    I wear many hats as far as a developer but my tech stack includes:
                    <br></br>
                    <br></br>
                    <Skills />
                  </p>
                  <br>
                  </br>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* IM A SOFTWARE DEV */}
          <section className='welcome-section-2' id='home-section'>
            {!isVisible2['more-2-wrapper'] && (
              <h1 className='letters-home-1'>
                <motion.div className='t-w'
                  initial={{ color: 'var(--green)' }}
                  animate={{ color: 'var(--orange)' }}
                  transition={{ duration: 1.618 }}
                >I'm a<br></br>Creative<br></br>Developer</motion.div>
              </h1>
            )}
            <div className="more-2-cont">
              <div className='m-a-1' id='m-a-1'
                onClick={() => {
                  handleClick2('more-2-wrapper');
                  setIsMinimized2(!isMinimized2);
                }}>
                {isMinimized2 ? "Close" : ""} <div id='top-left-cont'><div className="project-bt">Projects</div></div>
              </div>
            </div>
            <AnimatePresence>
              {isVisible2['more-2-wrapper'] && (
                <motion.div className="more-2-wrapper" id='more-wrapper'
                  initial='hidden'
                  animate='show'
                  variants={fadeIn}
                  exit={'exit'}
                  transition={{ duration: 1 }}>
                  <div id='top-left-cont'>
                    <h1 className='more-text-3' id='more-text-2'>
                      <motion.div
                        variants={variants}
                        animate='enterxleft'
                        transition={{ duration: 2 }}
                        exit='exitxleft'
                        className="project-bt">
                        Projects</motion.div>
                    </h1>
                  </div>
                  <p class='more-text-3'>Hello,<br></br><br></br> My name is Itwela Ibomu and I love
                    design and development. Im 22 years old, from Atlanta, Ga {currentlifestatus}.
                    <br></br>
                    <br></br>
                    Currently, I attend WGU - Western Governors University pursuing my bachelors in Software Engineering
                    <br></br>
                    <br></br>
                    I wear many hats as far as a designer but my tech stack is as follows:
                  </p>

                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </motion.div>

        {/* I LIKE SIMPLE */}
        <section className='welcome-section-3' id='home-section'>
          {!isVisible3['more-3-wrapper'] && (
            <h1 className='letters-home-2'>
              <motion.div className='t-w'
                initial={{ color: 'var(--white)' }}
                animate={{ color: 'var(--green)' }}
                exit={'exit'}
                transition={{ duration: 1.618 }}
              >I like the<br></br>Simple Things</motion.div>
            </h1>
          )}
          <div className="more-3-cont">
            <div className='m-a-2'
              id='m-a-2'
              onClick={() => {
                handleClick3('more-3-wrapper');
                setIsMinimized3(!isMinimized3);
              }}>
              {isMinimized3 ? "Close" : ""} <div id='top-right-cont'> <div id='interest-bt'>Interests</div></div>
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
                  <h1 className='more-text-3' id='more-text-3'>Interests</h1>
                  <p className='more-text-3'>Hello,<br></br><br></br> My name is Itwela Ibomu and I love
                    design and development. Im 22 years old, from Atlanta, Ga {currentlifestatus}.
                    <br></br>
                    <br></br>
                    Currently, I attend WGU - Western Governors University pursuing my bachelors in Software Engineering
                    <br></br>
                    <br></br>
                    I wear many hats as far as a designer but my tech stack is as follows:

                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* LETS CONNECT */}
        <section className='hero-3' id='home-section'>
          <h1 className='letters-home-3'>
            <motion.div className='t-w'
              initial={{ color: 'var(--orange)' }}
              animate={{ color: 'var(--white)' }}
              transition={{ duration: 1.618 }}
            >Lets <br></br> Connect</motion.div>
          </h1>

        </section>
      </div>
      {/* )} */}

    </>
  );
}

export default App

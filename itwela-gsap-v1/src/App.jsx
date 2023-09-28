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



function App() {

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 } // define exit animation
  }

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (id) => {
    setIsVisible(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const [minimize, setMinimize] = useState("Less");
  const [isMinimized, setIsMinimized] = useState(false);


  // --------------------------------

  const currentlifestatus = "and am currently looking for internships and or work opportunities."

  return (

    <>
      <Navbar />
      {/* {['element1', 'element2', 'element3'].map(id => */}
      <div className='home-gradient'>
        <motion.div className='home-container'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>

          {/* HI IM ITWELA */}
          <section className='welcome-section' id='home-section'>
            {!isVisible['more-1-wrapper'] && (
              <h1 className='letters-home'>
                <motion.div className='t-w'
                  initial={{ color: 'var(--d-green)' }}
                  animate={{ color: 'var(--white)' }}
                  transition={{ duration: 1.618 }}>
                  Hi, im<br></br>Itwela</motion.div>
              </h1>
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
                    design and development. Im 22 years old, from Atlanta, Ga {currentlifestatus}.
                    <br></br>
                    <br></br>
                    Currently, I attend WGU - Western Governors University pursuing my bachelors in Software Engineering
                    <br></br>
                    <br></br>
                    I wear many hats as far as a developer but my tech stack includes:
                    
                  </p>

                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* IM A SOFTWARE DEV */}
          <section className='welcome-section-2' id='home-section'>
            {!isVisible['more-2-wrapper'] && (
              <h1 className='letters-home-1'>
                <motion.div className='t-w'
                  initial={{ color: 'var(--green)' }}
                  animate={{ color: 'var(--orange)' }}
                  transition={{ duration: 1.618 }}
                >I'm a<br></br>Software<br></br>Developer</motion.div>
              </h1>
            )}
            <div className="more-2-cont">
              <div className='m-a-1' id='m-a'
                onClick={() => {
                  handleClick('more-2-wrapper');
                  setIsMinimized(!isMinimized);
                }}>
                {isMinimized ? "Close" : ""} <div id='top-left-cont'>Projects</div>
              </div>
            </div>
            <AnimatePresence>
              {isVisible['more-2-wrapper'] && (
                <motion.div className="more-2-wrapper" id='more-wrapper'
                  initial='hidden'
                  animate='show'
                  variants={fadeIn}
                  exit={'exit'}
                  transition={{ duration: 1 }}>
                    <div id='top-left-cont'>
                  <h1 className='more-text-3' id='more-text-all'> <div className="project-bt">Projects</div> </h1>
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
          {!isVisible['more-3-wrapper'] && (
            <h1 className='letters-home-2'>
              <motion.div className='t-w'
                initial={{ color: 'var(--white)' }}
                animate={{ color: 'var(--green)' }}
                exit={'exit'}
                transition={{ duration: 1.618 }}
              >I like the<br></br>simple things</motion.div>
            </h1>
          )}
          <div className="more-3-cont">
            <div className='m-a-2'
              id='m-a'
              onClick={() => {
                handleClick('more-3-wrapper');
                setIsMinimized(!isMinimized);
              }}>
              {isMinimized ? "Close" : ""} <div id='top-right-cont'> <div id='interest-bt'>Interests</div></div>
            </div>
          </div>
          <AnimatePresence>
            {isVisible['more-3-wrapper'] && (
              <motion.div className="more-3-wrapper" id='more-wrapper'
                initial='hidden'
                animate='show'
                variants={fadeIn}
                exit={'exit'}
                transition={{ duration: 1 }}>
                  <div id="top-right-cont">
                <h1 className='more-text-3' id='more-text-all'>Hello,</h1>
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
            >Let's<br></br>Connect</motion.div>
          </h1>
        </section>
      </div>
      {/* )} */}

    </>
  );
}

export default App

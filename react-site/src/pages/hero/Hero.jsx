
import '../../index.css'
import './Hero.css'
import firevideo from '../../assets/fire.gif'

import { useTransform, useScroll, motion} from 'framer-motion';
import useDimension from '../projects/useDimension.jsx';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef } from 'react'
import { Grid, Avatar } from '@mui/material'
import img1 from '../../assets/react.png'
import img2 from '../../assets/csharp.png'
import img3 from '../../assets/python.png'
import img4 from '../../assets/tailwind.png'
import img5 from '../../assets/pinescript.png'
import img6 from '../../assets/node.png'

function Hero() {

    const fadeIn = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
        exit: { opacity: 0 } // define exit animation
      }

    const slideInYbottom = {
    enterybottom: { y: [100, 0, 0]  },
    exitybottom: { y: [0, 1000] },
    }

    const slideInXright = {
    enterxright: { x: [300, 0, 0]  },
    exitxright: { x: [0, 1000] },
    }

    const combinedVariantsYbottom = {
    hidden: { ...fadeIn.hidden, ...slideInYbottom.enterYbottom },
    show: { ...fadeIn.show, ...slideInYbottom.enterybottom },
    exit: { ...fadeIn.exit, ...slideInYbottom.exitybottom }
    }
    
    const combinedVariantsXright = {
    hidden: { ...fadeIn.hidden, ...slideInXright.enterxright },
    show: { ...fadeIn.show, ...slideInXright.enterxright },
    exit: { ...fadeIn.exit, ...slideInXright.exitxright }
    }

    return (
        <>
        <div id="top">

        </div>
        {/* <div className='overlay-cont fixed h-[100vh] w-[100vw] z-20 top-[0]'></div> */}        
        <motion.section 
            className='hero-section
flex
place-content-center
            '>
            <div className='hero-container 
m-0
            '>
                <p 
                id='caveman'
                className="caveman
text-lightbrown
pb-3
text-left
font-wide    
            ">
                    Caveman Creative ©
                </p>           
                <motion.h1 
                initial='hidden'
                animate='show'
                variants={combinedVariantsYbottom}
                exit={'exit'}
                transition={{ duration: 4.61 }}
                className="wemakehappen-container
font-main
bold 
text-left
font-black
text-[18vw]
sm:text-[6em]
md:text-[7em]
lg:text-[8em]
leading-[0.75em]
text-lightbrown
text-shadow-custom
  "
id='wmh'  >
                    WE MAKE 
                    <br></br>
                    <div className="wrapper-dreams
flex
w-[100%]
place-content-center
                    ">
                        <div className="wrapper__inner">
                    <h1 className="animate-multi
font-main
bold 
text-left
font-black
text-lightbrown
text-shadow-custom
                ">
                IDEAS 
                <br />
                <br />
                FINTECH 
                <br />
                <br />
                APPS 
                <br />
                <br />
                SITES 
                <br />
                <br />
                CHANGE
                <br />
                <br />
                MAGIC
                <br /> 
                <br /> 
                GOALS 
                <br />
                <br />
                DREAMS
                </h1>
                </div>
                </div>
                    <motion.span
                    initial='hidden'
                    animate='show'
                    variants={combinedVariantsYbottom}
                    exit={'exit'}
                    transition={{ delay: 1.0, duration: 1.61 }}
                    >
                        HAPPEN
                    </motion.span> 
                </motion.h1>

            <motion.p 
                            initial='hidden'
                            animate='show'
                            variants={combinedVariantsXright}
                            exit={'exit'}
                            transition={{ duration: 6.61 }}
            
            className="
text-2xl 
font-main
italic
flex
text-lightbrown
place-content-end
text-right
relative
">
            <p className="about-1-paragraph
text-lightbrown 
text-md 
leading-tight 
text-left 
sm:text-center
flex
opacity-60">

                                <Grid container spacing={0} minHeight={30}>
                                    <Grid xs display="flex" justifyContent="center" alignItems="center">
                                        <Avatar src={img1} />
                                    </Grid>
                                    <Grid display="flex" justifyContent="center" alignItems="center">
                                        <Avatar src={img2} />
                                    </Grid>
                                    <Grid xs display="flex" justifyContent="center" alignItems="center">
                                        <Avatar src={img4} />
                                    </Grid>
                                    <Grid xs display="flex" justifyContent="center" alignItems="center">
                                        <Avatar src={img5} />
                                    </Grid>
                                    <Grid display="flex" justifyContent="center" alignItems="center">
                                        <Avatar src={img3} />
                                    </Grid>
                                    <Grid xs display="flex" justifyContent="center" alignItems="center">
                                        <Avatar src={img6} />
                                    </Grid>
                                </Grid>
                            </p>

                
            </motion.p>
            </div>
            </motion.section>

        </>
    )
}

export default Hero


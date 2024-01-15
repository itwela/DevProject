import logo from '../../assets/bollogo.png'
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import igIcon from '../../assets/instagram.png'
import mindIcon from '../../assets/mind.gif'
import vitalityIcon from '../../assets/vitality.gif'
import './footer.css'

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

const slideInYtop = {
    enterytop: { y: [-100, 0, 0]  },
    exitytop: { y: [0, 1000] },
    }

const slideInYbottom = {
    enterybottom: { y: [50, 0, 0]  },
    exitybottom: { y: [0, 1000] },
    }
const combinedVariantsYtop = {
    hidden: { ...fadeIn.hidden, ...slideInYtop.enterYtop },
    visible: { ...fadeIn.visible, ...slideInYtop.enterytop },
    exit: { ...fadeIn.exit, ...slideInYtop.exitytop }
    }

const combinedVariantsYbottom = {
    hidden: { ...fadeIn.hidden, ...slideInYbottom.enterYbottom },
    visible: { ...fadeIn.visible, ...slideInYbottom.enterybottom },
    exit: { ...fadeIn.exit, ...slideInYbottom.exitybottom }
    }

function FooterComp() {

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
      const intervalId = setInterval(() => {
        // Update the year every minute (optional)
        setCurrentYear(new Date().getFullYear());
      }, 60000);
  
      // Clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures that the effect runs once on mount
    
    return ( 
        <>


            
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.6 }}
                variants={combinedVariantsYtop}
            className="footer-wrapper
w-[100vw]
h-[15vh]
z-[3]
flex
text-[#ffffff]
text-[0.7em]
font-second
font-[900]
bg-[#fffbec]
relative
justify-evenly
place-content-center
place-items-center
">
      <p className='
    bg-[#000]
    p-3
    rounded-[2em]
    h-[3em]
    bottom-5
    scale-[0.8]
    md:scale-[1]
      '>&copy; {currentYear} BITEZ OF LOVE</p>
      <div className="icons-cont
        ">
          <a href="https://www.instagram.com/bitezoflovewellness/" className="ig-link">
        <img src={igIcon} alt="" className="icon-ig" />
        </a>
      </div>
            </motion.div>
        </>
     );
}

export default FooterComp;
import './Connect.css'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react';
import firevideo from '../../assets/fire.gif'


export default function Connect () {

    const fadeIn = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
        exit: { opacity: 0 } // define exit animation
      }

    const slideInYbottom = {
    enterybottom: { y: [100, 0, 0]  },
    exitybottom: { y: [0, 1000] },
    }

    const combinedVariantsYbottom = {
        hidden: { ...fadeIn.hidden, ...slideInYbottom.enterYbottom },
        show: { ...fadeIn.show, ...slideInYbottom.enterybottom },
        exit: { ...fadeIn.exit, ...slideInYbottom.exitybottom }
        }


    
    return (
        <>
            <section className="connect-section absolute z-10">
                <div className="connect-container
flex
place-content-center


                ">
                <motion.div 
                initial='hidden'
                whileInView='show'
                variants={combinedVariantsYbottom}
                exit={'exit'}
                transition={{ duration: 1.61 }}
    
                className='lets-connect
font-black
text-lightbrown
font-main
text-[17vw]
md:text-[6em]
lg:text-[8em]
relative
left-0
leading-tight
text-left
pl-[5vw]
flex
                '>
                    LETS MAKE
                    <br />
                    FIRE
                    <div className='button-cont
                    
                    h-[20%]
                    w-[3em]
                    gap-5
                    flex
                    pl-[1px]
                    absolute
                    bottom-[-18.3%]
                    justify-between 
                    flex-wrap
                    '>
                        <button className='button-1-contact
                        text-sm
                        outline
                        rounded-[2em]
                        h-[60%]
                        pr-8
                        pl-8
                        place-self-center'>
                            CONTACT ME
                            </button>
                        <button className='button-1-contact
                        text-sm
                        outline
                        rounded-[2em]
                        h-[60%]
                        pr-8
                        pl-8
                        place-self-center'>
                            HIRE ME
                            </button>
                    </div>
                </motion.div>
                <img src={firevideo} alt="twezo" className='firegif                               
absolute
w-[100%]'
/>
                </div>
            </section>
        </>
    )
}
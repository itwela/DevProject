import './brands.css'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import sevenanda from '../../assets/sevenanda.png'
import coffee from '../../assets/coffee.png'
import blue from '../../assets/blueguy.png'
// import reco from '../../assets/reco.png'
import nature from '../../assets/nature.png'
import muni from '../../assets/muni.png'


function Brands() {

    // ANIMATIONS --------------

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }

    const slideInYleft = {
    enteryleft: { x: [-400,0, 0]  },
    exityleft: { x: [0, 0] },
    }
    const slideInYright = {
    enteryright: { x: [400, 0, 0]  },
    exityright: { x: [0, 1000] },
    }
    const slideInYbottom = {
    enterybottom: { y: [50, 0, 0]  },
    exitybottom: { y: [0, 1000] },
    }
    const slideInYtop = {
        enterytop: { y: [-100, 0, 0]  },
        exitytop: { y: [0, 1000] },
        }
    
    const combinedVariantsYbottom = {
        hidden: { ...fadeIn.hidden, ...slideInYbottom.enterYbottom },
        visible: { ...fadeIn.visible, ...slideInYbottom.enterybottom },
        exit: { ...fadeIn.exit, ...slideInYbottom.exitybottom }
        }
    
    const combinedVariantsYleft = {
        hidden: { 
            // ...fadeIn.hidden, 
            ...slideInYleft.enterYleft 
        },
        visible: { 
            // ...fadeIn.visible, 
            ...slideInYleft.enteryleft 
        },
        exit: { 
            // ...fadeIn.exit, 
            ...slideInYleft.exityleft }
        }
    
    const combinedVariantsYright = {
        hidden: { 
            // ...fadeIn.hidden, 
            ...slideInYright.enterYright 
        },
        visible: { 
            // ...fadeIn.visible, 
            ...slideInYright.enteryright 
        },
        exit: { 
            // ...fadeIn.exit, 
            ...slideInYright.exityright 
        }
        }

    const combinedVariantsYtop = {
        hidden: { ...fadeIn.hidden, ...slideInYtop.enterYtop },
        visible: { ...fadeIn.visible, ...slideInYtop.enterytop },
        exit: { ...fadeIn.exit, ...slideInYtop.exitytop }
        }

        // ---------------END ANIMATIONS --------

        // GSAP ---------------

        const firstLogo = useRef(null);
        const secondLogo = useRef(null);
        const lastLogo = useRef(null);
        let xPercent = 0;
        let direction = -1;

        useEffect(() => {
            requestAnimationFrame(animation);

        }, []);
        
        const animation = () => {
            if(xPercent <= -200){
                xPercent = 0;
            }
            
            gsap.set(firstLogo.current, {xPercent: xPercent})
            gsap.set(secondLogo.current, {xPercent: xPercent})
            gsap.set(lastLogo.current, {xPercent: xPercent})
            xPercent += 0.05 * direction;
            requestAnimationFrame(animation);
        } 
        // ------------------------------- 

    return (
        <>
        <div className="brands-wrapper
        h-[20vh]
        flex
        place-items-center
        bg-[#fffbec]
        ">
            <div 
            className="brands-container
w-[100vw]
h-max
font-second
flex
justify-center
place-items-center
relative
z-[400]
bg-[#fffbec]
overflow-x-hidden
            ">
                    <div
                    ref={firstLogo}
                    className="logo-container
absolute
w-[100vw]
flex
justify-around
p-3
">
                    <img src={sevenanda} className='' id='logos'/>
                    <img src={blue} className='scale-[0.7]' id='logos'/>
                    <img src={coffee} className='' id='logos'/>
                    </div>
                    <div 
                    ref={secondLogo} 
                    className="logo-container
absolute
left-[100%]
w-[100vw]
flex
justify-around
p-3
                    ">
                    {/* <img src={reco} className='' id='logos'/> */}
                    <img src={nature} className='' id='logos'/>
                    <img src={muni} className='' id='logos'/>

                    </div>
                    <div 
                    ref={lastLogo} 
                    className="logo-container
absolute
left-[200%]
w-[100vw]
flex
justify-around
p-3

                    ">
                    <img src={sevenanda} className='' id='logos'/>
                    <img src={blue} className='scale-[0.7]' id='logos'/>
                    <img src={coffee} className='' id='logos'/>                    </div>
            </div>
        </div>
        </>
    );
}


export default Brands;
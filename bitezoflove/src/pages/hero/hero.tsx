import './hero.css'
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation  } from 'framer-motion';
import gsap from 'gsap';
import ProductShots from '../bottles/bottles';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import energyIcon from '../../assets/energy.gif'
import mindIcon from '../../assets/mind.gif'
import vitalityIcon from '../../assets/vitality.gif'
import pinkheart from '../../assets/pink.gif' 
import leftArrow from '../../assets/left-1.png'
import rightArrow from '../../assets/right-1.png'

// bottles
import peachbottle from '../../assets/georgia-peach.png'
import clorobottle from '../../assets/cloro-transparent.png'
import strawberrybottle from '../../assets/strawberry-1.png'
import elderberrybottle from '../../assets/elderberry-1.png'
import gingerbottle from '../../assets/ginger-1.png'
import mangobottle from '../../assets/mango-1.png'
import soursopbottle from '../../assets/soursop-1.png'
import spirulinabottle from '../../assets/spirulina-1.png'
// bottle backgrounds
import clorobg from '../../assets/cloro-bg.png'
import peachbg from '../../assets/peach-bg.png'
import sbackg from '../../assets/s-bg.png'
import ebackg from '../../assets/ed-bg.png'
import mbackg from '../../assets/m-bg.png'
import gingerbackg from '../../assets/ginger-bg.png'
import sourbackg from '../../assets/soursop-bg.png'
import spirbackg from '../../assets/spir.png'


// gels
import cherrygel from "../../assets/cherry-gel-transparent.png"
// gels backgrounds
import cherrygelbg from "../../assets/cherry-gel-banner-gimp.png"



    // --------- ANIMATIONS {

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }

    const slideInYleft = {
    enteryleft: { x: [-700,0, 0]  },
    exityleft: { x: [0, 1000] },
    }
    const slideInYright = {
    enteryright: { x: [1000, 0, 0]  },
    exityright: { x: [0, 1000] },
    }
    const slideInYbottom = {
    enterybottom: { y: [100, 0, 0]  },
    exitybottom: { y: [0, 1000] },
    }

    const slideInYtop = {
        enterytop: { y: [-100, 0, 0]  },
        exitytop: { y: [0, 1000] },
        }
    
    const combinedVariantsYtop = {
        hidden: { ...fadeIn.hidden, ...slideInYtop.enterytop },
        visible: { ...fadeIn.visible, ...slideInYtop.enterytop },
        exit: { ...fadeIn.hidden, ...slideInYtop.exitytop }
        }
    
    const combinedVariantsYbottom = {
        hidden: { ...fadeIn.hidden, ...slideInYbottom.enterybottom },
        visible: { ...fadeIn.visible, ...slideInYbottom.enterybottom },
        exit: { ...fadeIn.hidden, ...slideInYbottom.exitybottom }
        }
    
    const combinedVariantsYleft = {
        hidden: { ...fadeIn.hidden, ...slideInYleft.enteryleft },
        visible: { ...fadeIn.visible, ...slideInYleft.enteryleft },
        exit: { ...fadeIn.hidden, ...slideInYleft.exityleft }
        }
    
    const combinedVariantsYright = {
        hidden: { ...fadeIn.hidden, ...slideInYright.enteryright },
        visible: { ...fadeIn.visible, ...slideInYright.enteryright },
        exit: { ...fadeIn.hidden, ...slideInYright.exityright }
        }

    //   ------------ }


const options = [
    "Peach",
    'Strawberry', 
    'Elderberry', 
    'Spirulina', 
    'Ginger', 
    'Soursop', 
    'Mango',
    'Clorophyll',
];

const images: { [key: string]: any } = {
    Peach: peachbottle,
    Strawberry: strawberrybottle,
    Elderberry: elderberrybottle,
    Spirulina: spirulinabottle,
    Ginger: gingerbottle,
    Soursop: soursopbottle,
    Mango: mangobottle,
    Clorophyll: clorobottle,
  };

const buttoncolors: { [key: string]: string } = {
    Peach: '#f9d207',
    Strawberry: '#F24236',
    Elderberry: '#C84153',
    Spirulina: '#12E23F',
    Ginger: '#F1D302',
    Soursop: '#8AC926',
    Mango: '#FFCA3A',
    Clorophyll: '#3cb113',
}

const effects: { [key: string]: any } = [
    'Toxins', 
    'Dehydration', 
    'Cavities', 
    'Jitters', 
    'Hypertension', 
    'Hair-Loss', 
    'Insomnia', 
    'Inflammation' 
]

const backgrounds: { [key: string]: string } = {
    Peach: peachbg,
    Strawberry: sbackg,
    Elderberry: ebackg,
    Ginger: gingerbackg,
    Mango: mbackg,
    Soursop: sourbackg,
    Spirulina: spirbackg,
    Clorophyll: clorobg,
}

const links: { [key: string]: string } = {
    Peach: 'https://bitez-of-love.myshopify.com/products/georgia-peach-sea-moss-lemonade',
    Clorophyll: 'https://bitez-of-love.myshopify.com/products/chlorophyll-sea-moss-lemonade',
    Strawberry: 'https://bitez-of-love.myshopify.com/products/untitled-dec5_15-55',
    Elderberry: 'https://bitez-of-love.myshopify.com/products/elderberry-bitez-wildcrafted-seamoss-lemonade',
    Spirulina: 'https://bitez-of-love.myshopify.com/products/spirulina-bitez-wildcrafted-seamoss-lemonade',
    Ginger: 'https://bitez-of-love.myshopify.com/products/ginger-bitez-wildcrafted-seamoss-lemonade',
    Soursop: 'https://bitez-of-love.myshopify.com/products/soursop-bitez-wildcrafted-seamoss-lemonade',
    Mango: 'https://bitez-of-love.myshopify.com/products/mango-bitez-wildcrafted-seamoss-lemonade',
}

function InfiniteCards({ currentButtonColor, currentBottle }: any) {


    return ( 
        <>
        <div className="favorites-wrapper
w-[100vw]
bg-[#fffbec]
flex
justify-start
p-1
    ">
        <div className="favorites-scroller
h-[95vh]
flex
pt-[3em]
z-[21]
        ">
<div className='infinite-scroll-1
z-[10]
md:scale-[1]
scale-[0.65]
w-[100vw]
            '>
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                      viewport={{ once: true }}
                    transition={{ duration: 1.6 }}
                    variants={combinedVariantsYtop}
                    className='infinite-scroll-fixed
                    flex
                    flex-col
                    justify-center
                    place-content-center
                    place-items-center
                    items-center
                    '>
                    <span className=''>WELLNESS FROM THE BITEZ OF LOVE FAMILY </span>
                    <h1
                    className='wild
                    font-second
                    font-[900]
                    '
                    style={{color: currentButtonColor}}
                    >
                        
                        WILDCRAFTED <br /> SEAMOSS LEMONADE
                    </h1>
                    <div className='sub-info flex flex-col gap-2'>
                        <p className='md:text-[1.3em] text-[1.5em] font-[400]'>All Organic Non-GMO Super Foods for a Healthier Lifestyle. Don't Just Eat Here, Eat Well!</p>
                        {/* <p className='md:text-[1.3em] text-[1.5em] font-[400]'>Don't Just Eat Here, Eat Well!</p> */}
                        <span className='
                        lowercase
                        italic
                        '>
                            <strong> SCROLL LEFT FOR HEALTH BENEFITS </strong>
                        </span>
                    </div>
                </motion.div>
            </div>
{/* ---------------------------------------- */}
            <div className='infinite-scroll-fixed
z-[10]
md:scale-[1]
scale-[0.65]
h-[60dvh]
w-[100vw]
flex
place-items-center
justify-center  
          '>
            <div className="card-1
w-[23em]
h-[17em]
bg-[#ffffff]
rounded-[2em]
            ">
            <div className="card-top-1
w-[23em]
h-[4em]
rounded-t-[2em]
flex
justify-center
place-content-center
place-items-center
items-center
text-[#fff]
font-second
            "
            style={{ backgroundColor: currentButtonColor }}
            >
             <span className='
text-[1.4em]
             '>
             ENERGY BOOSTER      
            </span>  
            </div>
            <div className="card-bottom-1
w-[23em]
h-[11em]
flex
flex-col
gap-4
justify-center
place-content-center
place-items-center
items-center
p-6
font-second
            ">
            <p className="benefit-1
            ">
            A natural energy boost 
            packed with essential vitamins 
            and minerals.
            </p>
            <img src={energyIcon} alt="" className='w-14' />
            </div>
            </div>
            </div>
{/* ---------------------------------------- */}
            <div className='infinite-scroll-fixed
z-[10]
md:scale-[1]
scale-[0.65]
h-[60dvh]
w-[100vw]
flex
place-items-center
justify-center
            '>
            <div className="card-2
w-[23em]
h-[17em]
bg-[#ffffff]
rounded-[2em]
font-second
            ">
            <div 
            style={{ backgroundColor: currentButtonColor }}
            className="card-top-2
w-[23em]
h-[4em]
rounded-t-[2em]
flex
justify-center
place-content-center
place-items-center
items-center
text-[#fff]
            ">
            <span className='
text-[1.2em]
             '>
            ENHANCED MENTAL CLARITY            
            </span>   
            </div>

            <div className="card-bottom-2
w-[23em]
h-[11em]
flex
flex-col
gap-5
justify-center
place-content-center
place-items-center
items-center
p-6
            ">
                <p className="benefit-2">
                Boost mental clarity, concentration and
                experience sharper focus. 
                </p>
                <img src={mindIcon} alt="" className='w-12' />
            </div>

            </div>
            </div>
{/* ---------------------------------------- */}
            <div className='infinite-scroll-fixed
z-[10]
md:scale-[1]
scale-[0.65]
h-[60dvh]
w-[100vw]
flex
place-items-center
justify-center
            '>
            <div className="card-3
w-[23em]
h-[17em]
bg-[#ffffff]
rounded-[2em]
font-second
            ">
            <div 
            style={{ backgroundColor: currentButtonColor }}
            className="card-top-3
w-[23em]
h-[4em]
rounded-t-[2em]
flex
justify-center
place-content-center
place-items-center
items-center
text-[#fff]
            ">
            <span className='
text-[1.2em]
uppercase
             '>
            Nutrient Dense            
            </span>   
            </div>

            <div className="card-bottom-3
flex
flex-col
gap-5
justify-center
place-content-center
place-items-center
items-center
p-6
            ">
                <p className="benefit-3">
                Loaded with essential nutrients like vitamins 
                (A, C, E, K), minerals (iron, potassium, magnesium), 
                & amino acids, promoting energy, immune function,
                & cellular health.
                </p>
                <img src={vitalityIcon} alt="" className='w-12' />
            </div>

            </div>
            </div>

{/* ---------------------------------------- */}
            <div className='infinite-scroll-fixed
z-[10]
md:scale-[1]
scale-[0.65]
h-[60dvh]
w-[100vw]
flex
place-items-center
justify-center
            '>
            <div className="card-4
rounded-[2em]
font-second
            ">
        <h1 style={{color: currentButtonColor}}>
            ALL PRODUCTS ARE MADE WITH ALKALINE WATER & NATURAL HERBS.
        </h1>

            </div>
            </div>

        </div>      
        </div>

        </>
     );
}


function Hero() {

    const leftButtonRef = useRef(null);

    const firstBg = useRef(null);

    const imageRef = useRef(null);
    const [currentOptionIndex, setCurrentOptionIndex] = useState(0);

    const handleLeftButtonClick = () => {
        // Add a 1-second delay before changing the currentOptionIndex
        setTimeout(() => {
            setCurrentOptionIndex((prevIndex) => (prevIndex - 1 + options.length) % options.length);
        }, 700);
            setPlayAnimation(true);
    };
  
    const handleRightButtonClick = () => {
        setTimeout(() => {
            setCurrentOptionIndex((prevIndex) => (prevIndex - 1 + options.length) % options.length);
        }, 700);      
            setPlayAnimation(true);
    };
  
    const currentBottle = options[currentOptionIndex];
    const currentImage = images[currentBottle];
    const currentButtonColor = buttoncolors[currentBottle];
    const currentEffect = effects[currentOptionIndex];
    const currentBackground = backgrounds[currentBottle];
    const currentLinks = links[currentBottle]
    // ----------------------

    
    return (  
        <>

        <div id='content' className="image-hero relative flex flex-col md:flex-row justify-center place-items-center">
            <div className="place-content-center flex flex-col font-second text-[#fff] hidden">
                <p className='tired-of-text'>
                    NO MORE
                </p>
                <h1 className='dy-tired-text'>
                {currentEffect}
                </h1>
            </div>

            <div className="bottle-container w-[100vw]">
                <div className="strawberry-bottle flex justify-center place-content-center place-items-center items-center h-[100dvh]">

                <motion.img 
                className='w-[13em] h-[28em] absolute z-[1]' 
                initial="hidden"
                whileInView="visible"
                //   viewport={{ once: true }}
                transition={{ duration: 1.8 }}
                variants={combinedVariantsYtop}
                src={currentImage} 
                ref={imageRef} id='the-bottle' 
                />

                </div>

            </div>
            
            <motion.div 
            className="bottle-change-box absolute bottom-0 h-[20%] flex justify-center place-content-center place-items-center items-center z-[2]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            variants={combinedVariantsYbottom}
            >
                <div className="bottle-picker flex gap- w-[100vw] justify-around place-content-center place-items-center items-center">
                    <div className="left-btn bg-[#ffffff] w-[3em] h-[3em] rounded-[2em] flex justify-center outline outline-[1px]" ref={leftButtonRef} onClick={handleLeftButtonClick}>
                            <img src={leftArrow} alt="" className='w-[2em]'/>
                    </div>
                    <a className="current-bottle-box rounded-[4em] p-5" href={currentLinks} style={{ backgroundColor: currentButtonColor }}>
                        <h1 className="current-bottle text-[1.3em] text-white font-main font-black">
                            {currentBottle}
                        </h1>
                    </a>
                    <div className="right-btn bg-[#ffffff] w-[3em] h-[3em] rounded-[2em] flex justify-center outline outline-[1px]" onClick={handleRightButtonClick}>
                        <img src={rightArrow} alt="" className='w-[2em]' />
                    </div>
                </div>
            </motion.div>
            
            <div className="circle-bottom h-[100dvh] w-[100vw] absolute z-[-1]">
            </div>
                {/* // style={{ backgroundColor: currentButtonColor }} */}
            <div className="bg-cont flex h-full w-[100vw] absolute justify-center place-items-center overflow-hidden" ref={firstBg} >
                <img src={currentBackground} alt="" className="back-img absolute scale-[1.6]"/>
            </div>

            <div className="heart-cont w-[100vw] h-[100dvh] absolute flex justify-center ">
                <img src={pinkheart} alt="" className="heart-1 absolute bottom-[30%] left-[4em] md:left-[15em] lg:left-[30em]" />
                <img src={pinkheart} alt="" className="heart-2 absolute bottom-[30%] right-[4em] md:right-[15em] lg:right-[30em]" />
            </div>
            
            <div className="test absolute z-[-1] w-[100vw] h-full bg-[#fffbec] overflow-hidden" style={{backgroundColor: currentButtonColor}}>
            </div>

        </div>

    {/* ========================== */}

        {/* ------------ THIS IS 
        THE SECOND HERO SECTION




        STARTING NOW:!
        */}






        <div className="bottles-wrap
w-[100vw]
h-[100dvh]
          ">
          <div className="circle-mask-white
w-[100vw]
h-[100dvh]
absolute
z-[1]
overflow-hidden
bg-[#fffbec]
              ">
                <div className="img-container
flex
justify-center
w-[100vw]
h-[100dvh]
relative
overflow-hidden
                ">
                       <InfiniteCards currentButtonColor={currentButtonColor}/> 
                <motion.img 
                initial="hidden"
                whileInView="visible"
                //   viewport={{ once: true }}
                transition={{ duration: 1.6 }}
                variants={fadeIn}
                src={currentImage} ref={imageRef} id='the-bottle' className='
md:w-[12em]
md:h-[28em]
w-[8.5em]
h-[20em]
absolute
z-[20]

bottom-[3%]
            ' /> 
            </div>
           </div>
        </div>


    {/* ========================== */}



        </>
    );
}

export default Hero;



import './bottles.css'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import leftArrow from '../../assets/left-1.png'
import rightArrow from '../../assets/right-1.png'
import strawberrybottle from '../../assets/strawberry-1.png'
import elderberrybottle from '../../assets/elderberry-1.png'
import gingerbottle from '../../assets/ginger-1.png'
import mangobottle from '../../assets/mango-1.png'
import soursopbottle from '../../assets/soursop-1.png'
import spirulinabottle from '../../assets/spirulina-1.png'

import reviewonevid from '../../assets/review-vid-1.mp4'
import reviewtwovid from '../../assets/review-vid-2.mp4'
import reviewthreevid from '../../assets/review-vid-3.mp4'
function ProductShots() {

    // const imageRef = useRef(null);
    // const [currentOptionIndex, setCurrentOptionIndex] = useState(0);

    // const handleLeftButtonClick = () => {
    //   setCurrentOptionIndex((prevIndex) => (prevIndex - 1 + options.length) % options.length);
    // };
  
    // const handleRightButtonClick = () => {
    //   setCurrentOptionIndex((prevIndex) => (prevIndex + 1) % options.length);
    // };
  
    // const currentBottle = options[currentOptionIndex];
    // const currentImage = images[currentBottle];
    // const currentButtonColor = buttoncolors[currentBottle];

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
        hidden: { ...fadeIn.hidden, ...slideInYbottom.enterybottom },
        visible: { ...fadeIn.visible, ...slideInYbottom.enterybottom },
        exit: { ...fadeIn.hidden, ...slideInYbottom.exitybottom }
        }
    
    const combinedVariantsYleft = {
        hidden: { 
            // ...fadeIn.hidden, 
            ...slideInYleft.enteryleft 
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
            ...slideInYright.enteryright 
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
        hidden: { ...fadeIn.hidden, ...slideInYtop.enterytop },
        visible: { ...fadeIn.visible, ...slideInYtop.enterytop },
        exit: { ...fadeIn.hidden, ...slideInYtop.exitytop }
        }

    // ------------------------------- 

    const text = "SOME OF OUR FAVS!";

    const spans = text.split("").map((char, index) => (
    <span key={index} className="flavors-individual-letter
leading-[1.2em]
">
        {char}
    </span>
    ));

    return (
        <>
    <div className="split-img-wrapper w-[100vw] relative flex flex-col justify-center place-content-center place-items-center">
        <div className="split-img-full md:h-[70vh] w-[100vw] md:flex justify-center place-content-center place-items-center bg-[#fffbec] outline z-[400]">
            
                <motion.div className="split-img-container-left overflow-hidden md:h-[70dvh] h-[50dvh] md:w-[33.3vw] w-[100vw] flex justify-center place-content-center place-items-center bg-[#fffbec] relative outline"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.6 }}
                variants={combinedVariantsYbottom} 
                >
                    <video className='absolute object-cover' muted loop autoPlay controls src={reviewonevid}/>
                    {/* <motion.div 
                        className="review w-[80%] bg-[#fffbec] absolute bottom-6 rounded-[2em] outline outline-[1px] flex flex-col place-content-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1.6 }}
                        variants={combinedVariantsYleft}     
                        >
                        <h1 className='review-h font-second'>Danielle B.</h1>
                        <p className='review-p'>
                        “I love the ginger seamoss. It gives me high energy and also blends amazing in my smoothies !!! Shop today you will not be disappointed! ⭐️⭐️⭐️⭐️⭐️”
                        </p>
                    </motion.div> */}
                </motion.div>
                
                
                <motion.div className="split-img-container-middle overflow-hidden md:h-[70dvh] h-[50dvh] md:w-[33.3vw] w-[100vw] flex justify-center place-content-center place-items-center bg-[#fffbec] relative outline"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.6 }}
                variants={combinedVariantsYbottom} 
                >
                    <video className='absolute object-cover' muted loop autoPlay controls src={reviewtwovid}/>
                    {/* <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1.6 }}
                        variants={combinedVariantsYright}
                        className="review w-[80%] bg-[#fffbec] absolute bottom-6 rounded-[2em] outline outline-[1px] flex flex-col place-content-center">
                        <h1 className='review-h font-second'>Rasean K.</h1>
                        <p className='review-p'>
                        “First and foremost I have to acknowledge how excited I was when I received the raw moss & it wasn’t the pool grown kind. Big ups to you guys🙏🏽 My family and I plan on returning to get more soon! ⭐️⭐️⭐️⭐️⭐️”
                        </p>
                    </motion.div> */}
                </motion.div>

                <motion.div className="split-img-container-right overflow-hidden md:h-[70dvh] h-[50dvh] md:w-[33.3vw] w-[100vw] flex justify-center place-content-center place-items-center outline relative bg-[#fffbec]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.6 }}
                variants={combinedVariantsYtop} 
                >
                    <video className='absolute object-cover' muted loop autoPlay controls src={reviewthreevid}/>
                    {/* <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1.6 }}
                        variants={combinedVariantsYleft}
                        className="review w-[80%] bg-[#fffbec] absolute bottom-6 rounded-[2em] outline outline-[1px] flex flex-col place-content-center">
                        <h1 className='review-h font-second'>Ralph R.</h1>
                        <p className='review-p'>
                        “The gel has been great everyday in my smoothies since you put me on to it💪🏽💪🏽 I’ve been telling my folks about it since! ⭐️⭐️⭐️⭐️⭐️”
                        </p>
                    </motion.div> */}
                </motion.div>

        </div>

        <div className="split-img-text-bottom w-[100vw] flex flex-col bg-[#fffbec]">
        <div className="text-flavor
    bg-[#fffbec]
        ">
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 2.6 }}
        variants={combinedVariantsYbottom} 
        className="span-flavor
    w-[100vw]
    font-second
    text-center

        ">
        {spans}
        </motion.div>
        </div>
        <div className="second-text-wrap
    w-[100vw]
    h-[20vh]
    bg-[#fffbec]
    flex
    flex-col
    justify-between
        ">
        <p className="sub-flavor
    text-left
    leading-[0.1em]
            ">
            {/* AWAKEN YOUR TASTE BUDS! */}
            </p>
            <div className="calltoa
    md:place-self-end
    place-self-center
    pb-6
    m-6
            ">
                <motion.a 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.6 }}
                    variants={combinedVariantsYbottom} 
                    href='https://bitez-of-love.myshopify.com/collections/all'
                    className='
                bg-[#000]
    p-7
    rounded-[2em]
    font-second
    text-[#fff]
    scale-[0.7]
                '>
                    SEE ALL PRODUCTS
                </motion.a>
            </div>
        </div>
        </div>
    </div>

    <div className="favorites-wrapper w-[100vw] bg-[#fffbec] flex justify-start z-[20] p-1">
        <div className="favorites-scroller h-[60vh] flex bg-[#fffbec]">
            <div className="fav-img-1 w-[15em] md:w-[25em] bg-[#ffeb00] outline flex relative justify-center place-items-start p-5">
                <div className="discover">
                    <h1 className="title-d-1 font-second text-[2em]">
                        MANGO
                    </h1>
                    <p className="title-d-1 font-second">
                        lemonade
                    </p>
                    <a 
                    href='https://bitez-of-love.myshopify.com/products/mango-bitez-wildcrafted-seamoss-lemonade'
                    className="discover-btn-1
                    absolute
                    w-[50%]
                    h-[10%]
                    bg-[#fffbec]
                    bottom-5
                    right-5
                    font-second
                    rounded-[2em]
                    flex
                    place-items-center
                    justify-center
                    outline
                    outline-[1px]
                    ">
                        DISCOVER
                    </a>
                </div>
            </div>

            <div className="fav-img-2
            md:w-[25em]
            w-[15em]
            bg-[#f8d7f9]
            outline
            flex
            relative
            justify-center
            place-items-start
            p-5
            ">
                <div className="discover">
                <h1 className="title-d-2 font-second text-[2em]">
                        BLACK
                        <span className='block md:inline'>SEED</span>
                </h1>
                    <p className="title-d-2 font-second">
                        seamoss
                    </p>
                    <a 
                    href='https://bitez-of-love.myshopify.com/products/bitez-wildcrafted-blackseed-burdock-root-bladderwrack'
                    className="discover-btn-2
                    absolute
                    w-[50%]
                    h-[10%]
                    bg-[#fffbec]
                    bottom-5
                    right-5
                    font-second
                    rounded-[2em]
                    flex
                    place-items-center
                    justify-center
                    outline
                    outline-[1px]
                    ">
                        DISCOVER
                    </a>
                </div>
            </div>

            <div className="fav-img-3
            md:w-[25em]
            w-[15em]
            bg-[#01fea9]
            outline
            flex
            relative
            justify-center
            place-items-start
            p-5
            ">
                <div className="discover">
                <h1 className="title-d-3 font-second text-[2em]">
                        SPIRULINA
                    </h1>
                    <p className="title-d-3 font-second">
                        lemonade
                    </p>
                    <a 
                    href='https://bitez-of-love.myshopify.com/products/spirulina-bitez-wildcrafted-seamoss-lemonade'
                    className="discover-btn-3
                    absolute
                    w-[50%]
                    h-[10%]
                    bg-[#fffbec]
                    bottom-5
                    right-5
                    font-second
                    rounded-[2em]
                    flex
                    place-items-center
                    justify-center
                    outline
                    outline-[1px]
                    ">
                        DISCOVER
                    </a>
                </div>
            </div>
            <div className="fav-img-4
            md:w-[25em]
            w-[15em]
            bg-[#ff0038]
            outline
            flex
            relative
            justify-center
            place-items-start
            p-5
            ">

                <div className="discover">
                <h1 className="title-d-4 font-second text-[2em]">
                        CRAN
                        <span className='block md:inline'>BERRY</span>
                    </h1>
                    <p className="title-d-4 font-second">
                        seamoss
                    </p>
                    <a 
                    href='https://bitez-of-love.myshopify.com/products/bitez-wildkrafted-seamoss-gel-w-strawberry'
                    className="discover-btn-4
                    absolute
                    w-[50%]
                    h-[10%]
                    bg-[#fffbec]
                    bottom-5
                    right-5
                    font-second
                    rounded-[2em]
                    flex
                    place-items-center
                    justify-center
                    outline
                    outline-[1px]
                    ">
                        DISCOVER
                    </a>
                </div>
            </div>

        </div>
    </div>
        </>
    );
}


export default ProductShots;
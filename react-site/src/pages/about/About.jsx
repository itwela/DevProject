import './About.css'
import { motion } from 'framer-motion'


export default function About() {

    const line1 = "Hi, I'm Itwela "
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.05,
            },
        },
    }

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    }

    return (
        <>
            <section className="about-section 
w-[100vw] 
relative 
flex

place-content-center
overflow-x-hidden 
                ">
                <div className="about-container 
absolute
top-[0]
w-[90vw] 
gap-[3vw] 
m-[1em]
p-[1em]

                ">
                    <div className="column-1-about 

flex
basis-52 
lg:place-content-left

"
                    >
                        <p className="the-flex-text 
                font-main  
                font-black 
                text-lightbrown 
                flex
                lg: place-content-start
                leading-none


                "
                            id='about'>
                            ABOUT
                        </p>
                    </div>
                    <div className="column-2-3-container 
    flex 
    flex-col
    wrap
    gap-[8vw]
    mt-[2em]
    ">
                        <motion.div
                            variants={sentence}
                            initial={"hidden"}
                            whileInView={"visible"}
                            transition={{ duration: 3, delay: 10 }}
                            className="column-2-about 
            flex
            basis-32
            lg:w-[50vw]
            lg: place-self-start
            sm: w-[80vw]
                            ">
                            <p>
                                {line1.split("").map((char, index) => {
                                    return (
                                        <motion.span
                                            className="about-1-ABOUT font-main font-bold text-lightbrown text-left text-[4em] leading-tight p-[0em]"
                                            key={char + "-" + index} variants={letter}>
                                            {char}
                                        </motion.span>
                                    )
                                })}
                                <p className="about-1-paragraph font-main text-lightbrown text-left text-[1.2em]">
                                    Firstly, If you made it this far, thank you!
                                    I want to take this time to just tell you a little about me. Im 22 years old, From Atlanta
                                    Ga, <span className='font-black'>I love technolgy, finance, boxing, design;</span> <em>what can I say I'm a man of many passions.</em>
                                    <br></br>
                                    <br></br>
                                    Currently, I'm attending Western Govenors University with a pursuit of a Bachelors Degree in Software
                                    Engineering.
                                </p>
                            </p>
                        </motion.div>
                        <div className="pic
                        h-[10vh]
                        place-self-end
                        w-[30vw]
                        flex
                        absolute
                        h-[29vw]
                        top-[21%]
                            ">
                        </div>
                        <div className="column-3-about 
        flex
        basis-32
        lg:w-[50vw]
        place-content-center
        lg: place-self-start
        sm: w-[80vw]   
                ">
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
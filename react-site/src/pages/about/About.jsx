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
            lg:w-[80vw]
            lg: place-self-center
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
                                    A little about me: Im 22 years old, from Atlanta
                                    Ga, <span className='font-black'>I love technolgy, finance, boxing, design;</span> <em>what can I say I'm a man of many passions.</em>
                                    <br></br>
                                    <br></br>
                                    Currently, I'm attending <a href="">WGU</a> pursuing a Bachelors Degree in Software
                                    Engineering.
                                </p>
                            </p>
                        </motion.div>
                        <div className="pic
                        place-self-end
                        w-[32vw]
                        flex
                        absolute
                        h-[35.5vw]
                        top-[21%]
                            ">
                        </div>
                        <div className="column-3-about 
        flex
        basis-32
        lg:w-[80vw]
        place-content-center
        lg: place-self-center
        sm: w-[80vw]   
                ">
                                    <p className="about-1-paragraph font-main text-lightbrown text-left text-[1.2em]">
                                    Caveman Creative is a way for me to summarize all of my technolgical
                                    endeavors in one place. These span from <em className='font-black'>algorithmic trading </em>to
                                    <em className='font-black'> web development </em>
                                    to even <em className='font-black'>data analysis.</em>
                                    <br></br>
                                    <br></br>
                                    Thank you for stopping by and please dont hesitate to reach out!
                                </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
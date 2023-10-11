import './Projects.css'

export default function ProjectSlider() {
    return (
        <>
            <div className="slider-section relative w-[100vw]">
                <div className="scroller 
top-[20%] 
                    ">
                    {/* <p className="instructions
text-lightbrown 
top-[1%] 
absolute 
p-[1.2em]
font-main
text-[2vh]
flex
w-[100vw]
place-self-center
                    ">
                    Tap on a project to pause and learn more!
                </p>
                    <p className="instructions
text-lightbrown 
bottom-[1%]
absolute 
p-[1.2em]
pr-[2.2em]
font-main
text-[2vh]
flex
w-[100vw]
place-content-end
                    ">
                    Once paused, you can tap me to play again!
                </p> */}
                    <div className="scroller__inner">
                        <div className='project-1 relative' id='box'>
                            <p className='project-header font-main text-lightbrown font-black text-2xl'>Non-Profit<br></br>Landing Page</p>
                            <p className="p-description font-main text-lightbrown mt-[1em]">
                                A fully responsive landing page for a
                                non-profit organization called Clearheart.
                                <br />
                                <br />
                                Used Html, Css and JavaScript.
                                Deployed on Vercel.
                            </p>
                            <a href='https://clearheart.vercel.app/'
                            target="_blank"
                            className='see-more 
absolute
h-[10%]
w-[20%]
right-[5%]
bottom-[5%]
mt-2
flex
place-self-center
text-lightbrown
text-[0.9em]
font-main
place-content-center
place-items-center
                            '>
                            more
                            </a>
                        </div>
                        <div className='project-2 relative' id='box'>
                            <p className='project-header font-main text-lightbrown font-black text-2xl'>MealMaster</p>
                            <p className="p-description font-main text-lightbrown mt-[1em]">
                                An automatic recipe generator catered
                                towards people with dietary restrictions.
                                <br />
                                <br />
                                Used Streamlit, Python and Gpt-3.5.
                                Deployed through Streamlit.
                            </p>
                            <a href='https://mealmaster.streamlit.app/' 
                            target="_blank"
                            className='see-more 
absolute
h-[10%]
w-[20%]
right-[5%]
bottom-[5%]
mt-2
flex
place-self-center
text-lightbrown
text-[0.9em]
font-main
place-content-center
place-items-center
                            '
                            href='https://mealmaster.streamlit.app/'
                            target="_blank">
                            more
                            </a>
                        </div>
                        <div className='project-3 relative' id='box'>
                            <p className='project-header font-main text-lightbrown font-black text-2xl'>Financial Web Scraper<br></br></p>
                            <p className="p-description font-main text-lightbrown mt-[1em]">
                                A application that allows users to get <b>public</b> data
                                from clerk.house.gov with ease and gain insights on the finacials 
                                of government representatives.
                                <br />
                                <br />
                                Used Python and Gpt-3.5.
                            </p>
                            <a href='https://topaz-mink-ddd.notion.site/Web-Scraper-Documentation-Itwela-b9f1da17104d4a228da9e38d587f5926' 
                            target="_blank"
                            className='see-more 
absolute
h-[10%]
w-[20%]
right-[5%]
bottom-[5%]
mt-2
flex
place-self-center
text-lightbrown
text-[0.9em]
font-main
place-content-center
place-items-center
                            '>
                            more
                            </a>
                        </div>
                        <div className='project-4 relative' id='box'>
                            <p className='project-header font-main text-lightbrown font-black text-2xl'>I&I Technologies <br></br> Trading Algorithm</p>
                            <p className="p-description font-main text-lightbrown mt-[1em]">
                                Custom trading indicator + screen detection system 
                                based on my strategies
                                in the market. Identifies trading patterns
                                with over 60% profitability on average.
                                <br />
                                <br />
                                Used <a href=''>Pinescript</a>, <br/> Python
                            </p>
                            <a href='https://topaz-mink-ddd.notion.site/I-I-Technologies-and-The-SFX-Algo-d9b0d3433b654df4954a8e427423bb1e?pvs=4' 
                            target="_blank"
                            className='see-more 
absolute
h-[10%]
w-[20%]
right-[5%]
bottom-[5%]
mt-2
flex
place-self-center
text-lightbrown
text-[0.9em]
font-main
place-content-center
place-items-center
                            '>
                            more
                            </a>
                        </div>
                        <div className='project-5 relative' id='box'>
                            <p className='project-header font-main text-lightbrown font-black text-2xl'>Portfolio Website(s)</p>
                            <p className="p-description font-main text-lightbrown mt-[1em]">
                                Built fully responsive portfolio websites
                                with clear themes, 3d graphics, animations, etc.
                                This website (Caveman Creative) is an example. 
                                <br />
                                <br />
                                Used Html, Css, Javascript, React and
                                much more.
                            </p>
                            <a href='https://itwelaportfolio.vercel.app/' 
                            target="_blank"
                            className='see-more 
absolute
h-[10%]
w-[20%]
right-[5%]
bottom-[5%]
mt-2
flex
place-self-center
text-lightbrown
text-[0.9em]
font-main
place-content-center
place-items-center
                            '>
                            more
                            </a>
                        </div>
                        <div className='project-6 relative' id='box'>
                            <p className='project-header font-main text-lightbrown font-black text-2xl'> SmplClaim </p>
                            <p className="p-description font-main text-lightbrown mt-[1em]">
                            An excel sheet manipulation and cost estimation tool. It showcases my expertise in natural language processing, data manipulation, and user interface development.
                                <br />
                                <br />
                                Used Pandas, Streamlit, Gpt-3.5.
                            </p>
                            <span 
                            target="_blank"
                            className='see-more 
absolute
h-[10%]
w-[20%]
right-[5%]
bottom-[5%]
mt-2
flex
place-self-center
text-lightbrown
text-[0.9em]
font-main
place-content-center
place-items-center
                            '>
                            soon
                            </span>
                        </div>

                        {/* ------------ LOOP */}

                        <div className='project-1 relative' id='box'>
                            <p className='project-header font-main text-lightbrown font-black text-2xl'>Autogen<br></br>Ui Extension</p>
                            <p className="p-description font-main text-lightbrown mt-[1em]">
                                Built a Ui on top of Microsoft's Autogen to make it easier
                                for the average user to use.
                                Also added an ability for it to talk to the user.
                                <br />
                                <br />
                                Used Python and Gpt-3.5.
                            </p>
                            <span href=''
                            // target="_blank"
                            className='see-more 
absolute
h-[10%]
w-[20%]
right-[5%]
bottom-[5%]
mt-2
flex
place-self-center
text-lightbrown
text-[0.9em]
font-main
place-content-center
place-items-center
                            '>
                            soon
                            </span>
                        </div>
                        <div className='project-1 relative' id='box'>
                            <p className='project-header font-main text-lightbrown font-black text-2xl'>Non-Profit<br></br>Landing Page</p>
                            <p className="p-description font-main text-lightbrown mt-[1em]">
                                A fully responsive landing page for a
                                non-profit organization called Clearheart.
                                <br />
                                <br />
                                Used Html, Css and JavaScript.
                                Deployed on Vercel.
                            </p>
                            <a href='https://clearheart.vercel.app/'
                            target="_blank"
                            className='see-more 
absolute
h-[10%]
w-[20%]
right-[5%]
bottom-[5%]
mt-2
flex
place-self-center
text-lightbrown
text-[0.9em]
font-main
place-content-center
place-items-center
                            '>
                            more
                            </a>
                        </div>
                        <div className='project-2 relative' id='box'>
                            <p className='project-header font-main text-lightbrown font-black text-2xl'>MealMaster</p>
                            <p className="p-description font-main text-lightbrown mt-[1em]">
                                An automatic recipe generator catered
                                towards people with dietary restrictions.
                                <br />
                                <br />
                                Used Streamlit, Python and Gpt-3.5.
                                Deployed through Streamlit.
                            </p>
                            <a href='https://mealmaster.streamlit.app/' 
                            target="_blank"
                            className='see-more 
absolute
h-[10%]
w-[20%]
right-[5%]
bottom-[5%]
mt-2
flex
place-self-center
text-lightbrown
text-[0.9em]
font-main
place-content-center
place-items-center
                            '
                            href='https://mealmaster.streamlit.app/'
                            target="_blank">
                            more
                            </a>
                        </div>
                        <div className='project-3 relative' id='box'>
                            <p className='project-header font-main text-lightbrown font-black text-2xl'>Financial Web Scraper<br></br></p>
                            <p className="p-description font-main text-lightbrown mt-[1em]">
                                A application that allows users to get <b>public</b> data
                                from clerk.house.gov with ease and gain insights on the finacials 
                                of government representatives.
                                <br />
                                <br />
                                Used Python and Gpt-3.5.
                            </p>
                            <a href='https://topaz-mink-ddd.notion.site/Web-Scraper-Documentation-Itwela-b9f1da17104d4a228da9e38d587f5926' 
                            target="_blank"
                            className='see-more 
absolute
h-[10%]
w-[20%]
right-[5%]
bottom-[5%]
mt-2
flex
place-self-center
text-lightbrown
text-[0.9em]
font-main
place-content-center
place-items-center
                            '>
                            more
                            </a>
                        </div>
                        <div className='project-4 relative' id='box'>
                            <p className='project-header font-main text-lightbrown font-black text-2xl'>I&I Technologies <br></br> Trading Algorithm</p>
                            <p className="p-description font-main text-lightbrown mt-[1em]">
                                Custom trading indicator + screen detection system 
                                based on my strategies
                                in the market. Identifies trading patterns
                                with over 60% profitability on average.
                                <br />
                                <br />
                                Used <a href=''>Pinescript</a>, <br/> Python
                            </p>
                            <a href='https://topaz-mink-ddd.notion.site/I-I-Technologies-and-The-SFX-Algo-d9b0d3433b654df4954a8e427423bb1e?pvs=4' 
                            target="_blank"
                            className='see-more 
absolute
h-[10%]
w-[20%]
right-[5%]
bottom-[5%]
mt-2
flex
place-self-center
text-lightbrown
text-[0.9em]
font-main
place-content-center
place-items-center
                            '>
                            more
                            </a>
                        </div>
                        <div className='project-5 relative' id='box'>
                            <p className='project-header font-main text-lightbrown font-black text-2xl'>Portfolio Website(s)</p>
                            <p className="p-description font-main text-lightbrown mt-[1em]">
                                Built fully responsive portfolio websites
                                with clear themes, 3d graphics, animations, etc.
                                This website (Caveman Creative) is an example. 
                                <br />
                                <br />
                                Used Html, Css, Javascript, React and
                                much more.
                            </p>
                            <a href='https://itwelaportfolio.vercel.app/' 
                            target="_blank"
                            className='see-more 
absolute
h-[10%]
w-[20%]
right-[5%]
bottom-[5%]
mt-2
flex
place-self-center
text-lightbrown
text-[0.9em]
font-main
place-content-center
place-items-center
                            '>
                            more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import './Projects.css'

export default function ProjectSlider() {
    return (
        <>
            <div className="slider-section relative w-[100vw]">
                <div className="scroller 
top-[20%] 
                    ">
                    <p className="instructions
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
                </p>
                    <div className="scroller__inner">
                        <div className='project-1 relative' id='box'>
                            <p className='project-header font-main text-lightbrown font-black text-2xl'>Non-Profit<br></br>Landing Page</p>
                            <p className="p-description font-main text-lightbrown mt-[1em]">
                                A fully responsive landing page for a
                                non-profit organization called Clearheart.
                                <br />
                                <br />
                                Used <b className='font-black italic'>Html </b>
                                <b className='font-black italic'>Css </b>
                                and
                                <b className='font-black italic'> JavaScript.</b>.
                                Deployed on Vercel.
                            </p>
                            <a className='see-more 
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
                            <a className='see-more 
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
                        <div className='project-3 relative' id='box'>
                            <p className='project-header font-main text-lightbrown font-black text-2xl'>Financial Web Scraper<br></br></p>
                            <p className="p-description font-main text-lightbrown mt-[1em]">
                                A application that allows users to get <b>public</b> data
                                from clerk.house.gov with ease and gain insights on the finacials 
                                of government representatives.
                                <br />
                                <br />
                                Used Python and Gpt-4.
                            </p>
                            <a className='see-more 
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
                            <a className='see-more 
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
                                This website is an example. 
                                <br />
                                <br />
                                Used Html, Css, Javascript, React and
                                much more.
                            </p>
                            <a className='see-more 
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
                            <p className='project-header font-main text-lightbrown font-black text-2xl'> ColorPickerToo </p>
                            <p className="p-description font-main text-lightbrown mt-[1em]">
                                A tool that a allows users to instantly get the
                                hex code of what their mouse is pointed at. I use this in every
                                project when I need colors.
                                <br />
                                <br />
                                Used Python.
                            </p>
                            <a className='see-more 
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

                        {/* ------------ LOOP */}

                        <div className='project-1 relative' id='box'>
                            <p className='project-header font-main text-lightbrown font-black text-2xl'>Non-Profit<br></br>Website Build</p>
                            <p className="p-description font-main text-lightbrown mt-[1em]">
                                Built a fully responsive website for a
                                non-profit called Clearheart.
                                <br />
                                <br />
                                Used <b className='font-black italic'>Html </b>
                                <b className='font-black italic'>Css </b>
                                and
                                <b className='font-black italic'> JavaScript.</b>.
                                Deployed on Vercel.
                            </p>
                                                        <a className='see-more 
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
                                Built a fully responsive website for a
                                non-profit called Clearheart.
                                <br />
                                <br />
                                Used Html Css and Javascript.
                                Deployed on Vercel.
                            </p>
                        </div>
                        <div className='project-3 relative' id='box'>
                            <p className='project-header font-main text-lightbrown font-black text-2xl'>Web Scraper<br></br>(Financial Disclosure<br></br>Reports) </p>
                            <p className="p-description font-main text-lightbrown mt-[1em]">
                                Built a fully responsive website for a
                                non-profit called Clearheart.
                                <br />
                                <br />
                                Used Html Css and Javascript.
                                Deployed on Vercel.
                            </p>
                        </div>
                        <div className='project-4 relative' id='box'>
                            <p className='project-header font-main text-lightbrown font-black text-2xl'>I&I Technologies <br></br> Trading Algorithm</p>
                            <p className="p-description font-main text-lightbrown mt-[1em]">
                                Built a fully responsive website for a
                                non-profit called Clearheart.
                                <br />
                                <br />
                                Used Html Css and Javascript.
                                Deployed on Vercel.
                            </p>

                        </div>
                        <div className='project-5 relative' id='box'>
                            <p className='project-header font-main text-lightbrown font-black text-2xl'>Portfolio Website(s)</p>
                            <p className="p-description font-main text-lightbrown mt-[1em]">
                                Built a fully responsive website for a
                                non-profit called Clearheart.
                                <br />
                                <br />
                                Used Html Css and Javascript.
                                Deployed on Vercel.
                            </p>
                        </div>
                        <div className='project-6 relative' id='box'>
                            <p className='project-header font-main text-lightbrown font-black text-2xl'> ColorPickerToo </p>
                            <p className="p-description font-main text-lightbrown mt-[1em]">
                                Built a fully responsive website for a
                                non-profit called Clearheart.
                                <br />
                                <br />
                                Used Html Css and Javascript.
                                Deployed on Vercel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

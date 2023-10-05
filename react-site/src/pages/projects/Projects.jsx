
import '../../index.css'
import './Projects.css'
import ImagesScroll from './Images.jsx'



function Projects() {

    return (
        <>
            <section className='project-section
relative
flex
place-content-left
h-[180vh]
            '>
                <div className='hero-container' id='projects'>
                    {/* <h1 className="
bold 
absolute
z-10
font-main
text-left
font-black
text-[18vw]
sm:text-[6em]
md:text-[7em]
lg:text-[8em]
leading-[0.75em]
text-darkbrown
text-shadow-custom
tracking-tighter
top-[0]
left-0
  ">
                        PROJECTS
                    </h1> */}
                    <h1 className="
bold 
absolute
font-main
text-left
font-black
text-[18vw]
sm:text-[6em]
md:text-[7em]
lg:text-[8em]
leading-[0.75em]
text-darkbrown
tracking-tighter
bottom-[-1.5%]
right-0
z-10
  ">
                        PORTFOLIO
                    </h1>

                </div>
                <ImagesScroll/>
            </section>
        </>
    )
}

export default Projects


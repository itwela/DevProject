
import '../../index.css'
import './Projects.css'
import ImagesScroll from './Images.jsx'



function Projects() {

    return (
        <>
            <section className='project-section
flex
place-content-center  
relative
            '>
                <div className='hero-container 
m-0
p-8
bg-lightbrown
'
                >
                    <h1 className="
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
                    </h1>
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
bottom-[8%]
right-0
z-10
  ">
                        PROJECTS
                    </h1>

                    <p className="
text-2xl 
font-main
italic
text-lightbrown
text-right
">
                        we make fire
                    </p>

                </div>
                <ImagesScroll/>
            </section>
        </>
    )
}

export default Projects


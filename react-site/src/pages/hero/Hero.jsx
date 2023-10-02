
import '../../index.css'
import './Hero.css'


function Hero() {

    return (
        <>
            <section className='hero-section
flex
place-content-center
            '>
            <div className='hero-container 
m-0
p-8
'
            >
                <h1 className="
font-main
bold 
text-left
font-black
text-[18vw]
sm:text-[6em]
md:text-[7em]
lg:text-[8em]
leading-[0.75em]
text-lightbrown
text-shadow-custom
  ">
                    WE MAKE 
                    <br></br>
                    HAPPEN 
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
            </section>
        </>
    )
}

export default Hero


import './hero.css'
import menu from '../../../public/hamburger.png'

export default function Hero() {

    return (
    <>
    <div className="color
    ">
    <section  className="hero
m-0
p-0
h-[100vh]
relative
z-[2]
flex
    ">


        <div className="container-hero
flex
items-center
justify-between
h-[10vh]
w-[100vw]
pr-[5%]
pl-[50px]
md:pl-[6%]
       ">
        <h1 className="content-h
text-[#e3ddd1]
font-main
md:text-[16.5px]
text-[12px]

        ">           
            <span className='
            '>
           I & I Technoligies
            </span>
            </h1>
        <div className="hamburger
scale-[0.5]
md:hidden
">
                <img 
                src={ menu }
                className=''>
                </img>
            </div>
            <span className="line
        absolute
        w-[80vw]
        m-[0.4em]
        bottom-[-10%]  
        hidden
        lg:w-[95vw]      

">
                    </span>
            </div>
    </section>
    <section className="hero
m-0
p-0
h-[100vh]
relative
flex
">
        <div className="container-hero
absolute
top-[40%]
pl-[5em]
        ">
        <h1 className="content-h


text-white
font-main 

        
        ">
            {/* Meet the
            <br />
            SFX ALGO */}
            <span className='
text-2xl
            '> We automate 
            </span>
            <br/>
            Trading &
            <br />
            Investing.
        </h1>
        </div>
    </section>
    <section className="hero
m-0
p-0
h-[100vh]
relative
flex
place-content-end
">
        <div className="container-hero
absolute
top-[40%]
pr-[5em]
        ">
        <h1 className="content-h


text-white
font-main 
text-right

        
        ">
            {/* Meet the
            <br />
            SFX ALGO */}
            <span className='
text-2xl
            '> Interested?
            </span>
            <br/>
            Contact us.
        </h1>
        </div>
    </section>
    </div>
    </>
    )
  }
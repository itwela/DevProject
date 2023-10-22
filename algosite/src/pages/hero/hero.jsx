import './hero.css'
import Header from '../../components/Header/Header'

export default function Hero() {

    return (
    <>
    <Header/>
    <div className="hero-text-wrapper
absolute
w-[100vw]
md:w-[50vw]
z-[200]
md:h-[10%]
md:top-[30%]
left-0
lg:left-[1%]
flex
place-content-center
    ">
      <div className="hero-text-cont
z-[100]
flex
flex-col
rounded-[1em]
lg:w-[30em]
md:h-[15em]
absolute
top-[8em]
md:top-[30%]
text-[#e3ddd1]
font-main
p-4
md:pl-7
">
        <div className="ht1-cont
lg:w-[80%]
h-[10%]
flex
justify-center
md:justify-start
        ">
          <p className="smalll
md:text-[1em]
          ">
          I & I TECHNOLOGIES PRESENTS
          </p>
        </div>
        <div className="ht1-cont
h-[65%]
mt-[0.5em]
flex
justify-center
md:text-left
text-center
        ">
          <p className="smalll
font-black
text-[2.5em]  
md:text-[3em]  
lg:text-[5em]
leading-[1]
          ">
          THE SFX 
          <br />
          ALGORITHM          
          </p>
        </div>
        
        <div className="ht1-cont
lg:w-[80%]
h-[50%]
lg:mt-[0.4em]
flex
justify-center
md:justify-start
        ">
        <p className="smalll
md:mt-[0.6em]
lg:text-[1.4em]
          ">
          "Trade Smarter, Not Harder"         
          </p>
        </div>
      </div>
    </div>
    <div className="color
w-[100vw]
fixed
h-[100vh]
bg-cover
bg-no-repeat
    ">
        </div>
    <section  className="hero
m-0
p-0
h-[100vh]
relative
z-[200]
flex
    ">
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
md:pl-[5em]
w-[100vw]
flex
justify-center
md:justify-start
md:w-[0]
text-center
md:text-left
        ">
        <h1 className="content-h


text-white
font-main 
text-[2.7em]
md:text-[3.5em]
        
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
top-[25%]
md:top-[75%]
md:pr-[5em]
w-[100vw]
        ">
        <h1 className="content-h


text-white
font-main 
md:text-right
text-center
        
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
    </>
    )
  }
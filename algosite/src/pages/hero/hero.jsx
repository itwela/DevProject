import './hero.css'


export default function Hero() {

    return (
    <>
    <section  className="hero
m-0
p-0
h-[100vh]
relative
flex
place-content-start
    ">
        <div className="container-hero
absolute
text-center
md:top-[5%]
md:text-[6.5px]

left-[5%]
top-[3%]
text-[4px]
        ">
        <h1 className="content-h
md:text-white




text-white
font-main 
        ">
            {/* I & I Technologies */}
            <span className='
            '>
           I & I Technologies
            </span>
        </h1>
        <div className="hamburger">
            <img src=''></img>
        </div>
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
    </>
    )
  }
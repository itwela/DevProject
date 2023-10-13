import './hero.css'

export default function Hero() {

    return (
    <>
        <section className="hero
m-0
p-0
relative
w-[100vw]
h-[100vh]
flex
place-content-start
    ">
        <div className="container-hero
absolute
top-[40%]
pl-[5em]
        ">
        <h1 className="content-h
text-white
        
        ">
            {/* I & I Technologies */}
            Meet the
            <br />
            SFX ALGO
        </h1>
        </div>
    </section>
    <section className="hero
m-0
p-0
relative
w-[100vw]
h-[100vh]
flex
place-content-start
    ">
        <div className="container-hero
absolute
top-[40%]
pl-[8em]
        ">
        <h1 className="content-h
text-white
        
        ">
            {/* Meet the
            <br />
            SFX ALGO */}
        </h1>
        </div>
    </section>
    </>
    )
  }
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Navbar from '../../components/Navbar/Navbar.jsx'
import './Hero.css'


function Hero() {

    return (

        <>
            <Navbar />
            <section>
                <div className='hero-wrapper'>
                    <div className="hero-container">
                        <div className="text-block" id='grid-column'>
                            <h1>Yo</h1>
                            <p className='intro'>
                                Over the past few years, I took up an interest in Software Development.
                                It all started when I got an idea to make a small game in
                                Unity that showed me my love for developing.
                            </p>
                        </div>
                        <div className="picture-block" id='grid-column'>
                            <h1>Pics:</h1>
                            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero
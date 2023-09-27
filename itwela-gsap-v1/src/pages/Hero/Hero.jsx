import React from 'react'
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
                            <h1>Hero</h1>
                        </div>
                        <div className="picture-block" id='grid-column'>
                            <h1>Yo</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero
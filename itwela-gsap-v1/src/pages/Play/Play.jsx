import React, { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import ApExp from '../../ApExp.jsx'
import ReactDOM from 'react-dom/client'
import gsap from 'gsap'
import Navbar from '../../components/Navbar/Navbar.jsx'
import './Play.css'
import img1 from '../../assets/react.svg'
import R3fasset from '../../main.jsx'

function Hero() {

    return (

        <>


            <Navbar />

            <section id='hero-page'>
                <div className='hero-wrapper'>
                    <div className="hero-container">
                        <div className="text-block" id='grid-column'>
                            <h1 className='Title'>Yo</h1>
                            <p className='intro'>
                                Over the past few years, I took up an interest in Software Development.
                                It all started when I got an idea to make a small game in
                                Unity that showed me my love for developing.
                            </p>
                        </div>
                        <div className="picture-block" id='grid-column'>
                            <img src={img1} className='img1'></img>
                            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                        </div>
                    </div>
                </div>
            </section>
            <R3fasset/>

        </>
    );
}

export default Hero
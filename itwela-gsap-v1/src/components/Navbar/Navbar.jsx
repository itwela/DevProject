import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import './Navbar.scss'
import '../Projects/Pjects.jsx'
import torch from '../../../public/cave/torch1.gif'
import logo from '../../../public/icons8-caveman-50.png'; // Import the image
import close from '../../../public/icons8-close-30.png'

function Navbar() {
    const buttonRef = useRef(null);
    const homebuttonRef = useRef(null);
    const exitRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 1.618, ease: "back.out(2)" } });
        tl.paused(true);
        tl.to(".overlay", { clipPath: 'circle(300% at 50% -90%)' });
        tl.to('.menu-container', { opacity: 1, y: '30', stagger: 0.0618 }, '-=1');


        buttonRef.current.addEventListener('click', () => {
            tl.play();
        });
        homebuttonRef.current.addEventListener('click', () => {
            tl.reverse(.7);
        });
        exitRef.current.addEventListener('click', () => {
            tl.reverse(.7);
        });    }, []);

    // -------------------------------
        

    return (
        <>
            <div className="psedo body">
                <div className="nav">
                    <div className="n-cont">

                     <motion.img                            
                        src={torch}
                        className="navbar-logo"
                        id="Itwela-logo" ref={buttonRef} />

                    </div>
                    <div className="overlay">
                        <li className='nav-close' id="close-bt" ref={exitRef}>
                            <img src={close} />
                        </li>
                        <div className="menu">
                            <div className="menu-container">
                                <div className="hello-category">MENU</div>
                                <ul>
                                    <li id="home-nav-bt" ref={homebuttonRef}>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li id="blog-nav-bt">
                                        <Link to="/blog">Life</Link>
                                    </li>
                                    <li id="contact-nav-bt">
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>

                                <div className="social-container">
                                    <div className="social-items">
                                        <a href="https://github.com/itwela/DevProject">Github</a>
                                        <a href="https://www.linkedin.com/in/itwela/">LinkedIn</a>
                                        <a href="">Extras</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Navbar;
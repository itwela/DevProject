import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { Link } from 'react-router-dom'
import './Navbar.scss'
import logo from '../../../public/itwela-smile.png'; // Import the image
import close from '../../../public/icons8-close-30.png'

function Navbar() {
    const buttonRef = useRef(null);
    const homebuttonRef = useRef(null);
    const exitRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({defaults: {duration: 1.618, ease: "back.out(2)"}});

        tl.paused(true);
        tl.to(".overlay", {clipPath: 'circle(300% at 50% -90%)'});
        tl.to('.menu-container', {opacity: 1, y: '30', stagger: 0.0618}, '-=1');

        buttonRef.current.addEventListener('click', () => {
            tl.play();
        });
        homebuttonRef.current.addEventListener('click', () => {
            tl.reverse(.7);
        });
        exitRef.current.addEventListener('click', () => {
            tl.reverse(.7);
        });
    }, []);

    return (
        <>
            <div className="psedo body">
            <div className="-nav">
            <img src={logo} className="navbar-logo" id="Itwela-logo" ref={buttonRef} />
                <div className="overlay">
                    <li className='nav-close' id="close-bt" ref={exitRef}>
                        <img src={close} />
                    </li>
                    <div className="menu">
                        <div className="menu-container">
                            <p className="hello-category">MENU</p>
                            <ul>
                                <li id="home-nav-bt" className="home-nav-bt" ref={homebuttonRef}>
                                    <Link to="/">Home</Link>
                                </li>
                                <li id="blog-nav-bt">
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li id="contact-nav-bt">
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Navbar;
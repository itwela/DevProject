import React from "react";
import { Link } from 'react-router-dom'


function Navbar () {
    return (  
        <div className="navbar">
            <div className="navbar-logo">
                Itwela
            </div>
            <ul className="navbar-menu">
                <li href="/">Home</li> 
                <li href="/">About</li> 
                <li href="/">Contact</li> 
            </ul>
        </div>
    );
}

export default Navbar;
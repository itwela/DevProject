import { useState } from "react"
import { Button } from "@mui/material"
import { motion } from "framer-motion"
import img from "../../assets/nav.png"
import './Items.css'
import resume from '../../assets/ItwelaSoftwareResume.pdf'


const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}


export default function Items() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <nav 
        className="
        nav
        flex
        justify-between
        m-3
        ml-10
        pr-[1vh]
        "
        >
            <motion.ul 
            className="nav-ul flex justify-evenly"
            animate={isOpen ? "closed" : "open"}
            variants={variants}
            >
                <li className="nav-list font-main p-2"
                onClick={() => window.location.replace("/#projects")}
                id="navlinks">
                Portfolio
                </li>
                <li className="nav-list font-main p-2"
                onClick={() => window.location.replace("/#about")}
                id="navlinks">
                About
                </li>
                <li className="nav-list font-main p-2" id="navlinks">
                <a href="" download={resume}>
                    Resume</a>
                </li>

            </motion.ul>
                <div className="nav-list flex relative" id="navlinks"
                onClick={() => setIsOpen(isOpen => !isOpen)}>
                <p className="itwela 
font-main 
font-black 
text-lightbrown 
absolute
right-[10%]
justify-self-center
place-self-center
align-content-center
text-[0.7em]
                ">
                Caveman <span className="ibomu">Creative</span></p>
            </div>
        </nav>
        </>
    )
}
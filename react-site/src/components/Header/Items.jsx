import { useState } from "react"
import { Button } from "@mui/material"
import { motion } from "framer-motion"
import img from "../../assets/nav.png"



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
        ">
            <motion.ul 
            className="nav-ul flex justify-evenly"
            animate={isOpen ? "closed" : "open"}
            variants={variants}
            >
                <li className="nav-list text-lightbrown font-main p-2">
                About
                </li>
                <li className="nav-list text-lightbrown font-main p-2">
                Projects
                </li>
                <li className="nav-list text-lightbrown font-main p-2">
                Projects
                </li>

            </motion.ul>
                <div className="img-wrapper"
                onClick={() => setIsOpen(isOpen => !isOpen)}>
                <img src={img} className="nav-photo pt-2 pr-4"></img>
            </div>
        </nav>
        </>
    )
}
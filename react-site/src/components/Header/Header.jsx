import { motion } from "framer-motion"
import { createTheme } from "@mui/material"
import { useState } from "react"
import './Header.css'
import Items from "./Items.jsx"

// colors --------------








//  ===================


const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <header className="header-wrapper
fixed
w-[100vw]
top-0
left-0
            ">
            <div className="header-cont
flex-row
absolute
w-[100%]
top-0
left-0
z-1
                ">
                <motion.nav
                    animate={isOpen ? "closed" : "open"}
                    variants={variants}>
                    <Items />
                </motion.nav>
            </div>
            </header>
        </>
    )
}


import {  useTransform, useScroll, motion } from "framer-motion"
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
    const fadeIn = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
        exit: { opacity: 0 } // define exit animation
      }
    const slideInYtop = {
    enterytop: { y: [-100, 0, 0]  },
    exitytop: { y: [0, 1000] },
    }
    const combinedVariantsYtop = {
        hidden: { ...fadeIn.hidden, ...slideInYtop.enterytop },
        show: { ...fadeIn.show, ...slideInYtop.enterytop },
        exit: { ...fadeIn.exit, ...slideInYtop.exitytop }
        }

    return (
        <>
        <motion.header
        initial='hidden'
        animate='show'
        variants={combinedVariantsYtop}
        exit={'exit'}
        transition={{ duration: 3.61 }} 
        className="header-wrapper
fixed
w-[100vw]
top-0
left-0
z-10
            ">
            <div className="header-cont
flex-row
fixed
w-[100%]
top-0
left-0
                "
                id="primary-header">
                <motion.nav
                    animate={isOpen ? "closed" : "open"}
                    variants={variants}>
                    <Items />
                </motion.nav>
            </div>
            </motion.header>
        </>
    )
}


import logo from '../../assets/bollogo.png'
import menu from '../../assets/menu.png'
import closeButton from '../../assets/close.png'
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import './header.css';  // Remove the duplicate import statement here
import { IoMdMenu } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideInYtop = {
  enterYtop: { y: [-100, 0, 0] },
  exitYtop: { y: [0, 1000] },
};

const combinedVariantsYtop = {
  hidden: { ...fadeIn.hidden, ...slideInYtop.enterYtop },
  visible: { ...fadeIn.visible, ...slideInYtop.enterYtop },
  exit: { ...fadeIn.exit, ...slideInYtop.exitYtop },
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="mobile flex md:hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.6 }}
          variants={combinedVariantsYtop}
          className="header-box z-[10000] fixed w-full h-max flex justify-between p-5 place-items-center place-content-center bg-transparent outline-none" 
        >
        <img src={logo} className="bg-[#fffbec] p-2 rounded-full logo-img w-[90px] h-[90px] left-0 md:scale-[1.5]" alt=""/>
        
        <div onClick={toggleMenu} className={`hamburger rounded-full bg-[#fffbec] p-5  z-[10000]   `}>    
          <IoMdMenu/>
        </div>
        </motion.div>


        {/* Menu content */}
        {menuOpen && (
          <div className="w-[50vw] right-0 h-[100vh] bg-[#fffbec] fixed z-[1000] menu-content font-second font-[300] text-[1.5em] flex flex-col gap-5 place-items-end pt-[20%] pr-[5%]">
            {/* Your menu items go here */}
            <div onClick={toggleMenu}><a href="#">HOME</a></div>
            <div onClick={toggleMenu}><a href="https://bitez-of-love.myshopify.com/collections/all">SHOP</a></div>
            <div onClick={toggleMenu}><a href="https://bitez-of-love.myshopify.com/pages/contact">CONTACT</a></div>
            <a href="#findus"><div onClick={toggleMenu}>FIND US</div></a>
            <div onClick={toggleMenu}><a href="https://bitez-of-love.myshopify.com/pages/faqs">FAQ</a></div>
            {/* Add more menu items as needed */}
          </div>
        )}

      </div>

{/* MOBILE HEADER END ----------------------------- */}
      
      
      {/* NOT mobile header - regular header. */}
      <div className="hidden md:flex computer">
        <div
          className="header-wrapper-big w-max fixed z-[900] md:flex justify-around place-items-center p-5 text-[#000] text-[0.7em] gap-4 font-second font-[900] right-5 top-5 hidden"
        >
          <a id="a-tag" className="" href="#">
            HOME
          </a>
          <a id="a-tag" className="" href="https://bitez-of-love.myshopify.com/collections/all">
            SHOP
          </a>
          <a id="a-tag" className="" href="https://bitez-of-love.myshopify.com/pages/contact">
            CONTACT
          </a>
          <a id="a-tag" className="flex gap-1" href="#findus">
            FIND <span>US</span>
          </a>
          <a id="a-tag" className="" href="https://bitez-of-love.myshopify.com/pages/faqs">
            FAQ'S
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;

import logo from '../../assets/bollogo.png'
import menu from '../../assets/menu.png'
import closeButton from '../../assets/close.png'
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import './header.css';  // Remove the duplicate import statement here

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
      <div className="mobile">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.6 }}
          variants={combinedVariantsYtop}
          className="header-box md:w-[9em] w-[7em] md:h-[9em] h-[7em] fixed flex place-content-center place-items-center z-[900] md:ml-[2em] ml-[0.4em] md:mt-[1.8em] mt-[0.4em] font-second tracking-[0.15em] font-[900]"
        >
          <img
            src={logo}
            className="logo-img w-[90px] h-[70px] left-0 md:scale-[1.5]"
            alt=""
          />
        </motion.div>
        <div
            className={`hamburger bg-[#fffbec] p-5 fixed z-[10000] right-0 top-0 md:scale-[1.5] flex flex-col place-items-center gap-3  w-[50%] h-[60%]  md:hidden ${
                menuOpen ? '' : 'rounded-[13em] w-[60px] h-[10px] flex place-content-center right-8 top-7 fixed '
            }`}
        >
          <img
            src={menuOpen ? closeButton : menu}
            className={`w-[30px] h-[20px] ${menuOpen ? 'close-button' : ''}`}
            alt=""
            onClick={toggleMenu}
          />
          {/* Menu content */}
          {menuOpen && (
            <div className="menu-content font-second font-[300] mt-[20%] text-[1.5em] flex flex-col gap-5">
              {/* Your menu items go here */}
              <div onClick={toggleMenu}><a href="https://www.bitezoflove.com/">HOME</a></div>
              <div onClick={toggleMenu}><a href="https://bitez-of-love.myshopify.com/collections/all">SHOP</a></div>
              <div onClick={toggleMenu}><a href="https://bitez-of-love.myshopify.com/pages/contact">CONTACT</a></div>
              <div onClick={toggleMenu}><a href="https://bitez-of-love.myshopify.com/pages/faqs">FAQ</a></div>
              {/* Add more menu items as needed */}
            </div>
          )}
        </div>
      </div>
      {/* NOT mobile header - regular header. */}
      <div className="computer">
        <div
          className="header-wrapper-big md:w-[30em] fixed z-[900] md:flex justify-around place-items-center p-5 text-[#000] text-[0.7em] gap-4 font-second font-[900] right-5 top-5 hidden"
        >
            <a id="a-tag" className="" href="https://www.bitezoflove.com/">
            HOME
            </a>
            <a
            id="a-tag"
            className=""
            href="https://bitez-of-love.myshopify.com/collections/all"
            >
            SHOP
            </a>
            <a
            id="a-tag"
            className=""
            href="https://bitez-of-love.myshopify.com/pages/contact"
            >
            CONTACT
            </a>
            <a
            id="a-tag"
            className=""
            href="https://bitez-of-love.myshopify.com/pages/faqs"
            >
            FAQ'S
            </a>
        </div>
      </div>
    </>
  );
}

export default Header;

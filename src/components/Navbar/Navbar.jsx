import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const [isActiveLink, setActiveLink] = useState('hero');
    const [isScrolled, setIsScrolled] = useState(false)

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);

        if(element) {
            const marginTop = 100;
            const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
            window.scrollTo({top: scrollToY, behavior:"smooth"});
        }
    }


  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <img className='logo' src='./assets/images/logo.png' alt=''/>

            <ul>
                <li>
                    <a className='menu-item' onClick={() => scrollToSection('hero-container-id')}>Home</a>
                </li>
                <li>
                    <a className='menu-item' onClick={() => scrollToSection('skills-container-id')}>Skills</a>
                </li>
                <li>
                    <a className='menu-item' onClick={() => scrollToSection('projects-container-id')}>Projects</a>
                </li>
                <li>
                    <a className='menu-item' onClick={() => scrollToSection('contact-container-id')}>Contace Me</a>
                </li>
            </ul>

            <button className="menu-btn" onClick={toggleMenu}>
                <span class={"material-symbols-outlined"}
                style={{fontSize:"1.8rem"}}
                > {openMenu ? "X":"|||"} </span>
            </button>

        </div>
    </nav>
    </>
   
  )
}

export default Navbar

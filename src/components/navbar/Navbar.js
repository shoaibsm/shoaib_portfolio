import React, { useEffect, useRef, useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-scroll'
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsNavOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    function toggler() {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <div className='Navbar'>
            <div className="Navbar__container" ref={navRef}>
                <div className="Navbar__brandSection">
                    <div className="Navbar__brandName">
                        <Link to="introduction" smooth={true} duration={500}>
                            <h2 className='Navbar__nameText'><span>Shoaib</span> Mohammed</h2>
                        </Link>
                    </div>
                </div>

                {window.innerWidth <= 576 ? (<div className={isNavOpen ? 'navigation-section' : 'navigation-section-close'}>
                    <nav className="navigation-container">
                        <ul className='Navbar__navList'>
                            <li className="Navbar__navItems"><Link to="about" smooth={true} duration={500}>About Me</Link></li>
                            <li className="Navbar__navItems"><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                            <li className="Navbar__navItems"><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
                            <li className="Navbar__navItems"><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                            <li className="Navbar__navItems"><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                        </ul>
                    </nav>
                    <div className="Navbar__btn--browse">
                        <p className='btn-tex'>Browse CV</p>
                    </div>
                </div>) : (<div className={'navigation-section'}>
                    <nav className="navigation-container">
                        <ul className='Navbar__navList'>
                            <li className="Navbar__navItems"><Link to="about" smooth={true} duration={500}>About Me</Link></li>
                            <li className="Navbar__navItems"><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                            <li className="Navbar__navItems"><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
                            <li className="Navbar__navItems"><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                            <li className="Navbar__navItems"><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                        </ul>
                    </nav>
                    <div className="Navbar__btn--browse">
                        <a href="https://shoaib-sm-resume.onrender.com/" target="_blank" rel="noopener noreferrer">
                            <p className='btn-text'>Browse CV</p>
                        </a>

                    </div>
                </div>)}

                <div className="toggler" onClick={toggler}>
                    <RxHamburgerMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar
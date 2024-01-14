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
        <nav className='Navbar'>
            <div className="Navbar__container" ref={navRef}>
                <div className="Navbar__brandSection">
                    <div className="Navbar__brandBox">
                        <Link to="introduction" smooth={true} duration={500}>
                            <h2 className='name'><span>Shoaib</span> Mohammed</h2>
                        </Link>
                    </div>
                </div>

                {window.innerWidth <= 576 ? (<div className={isNavOpen ? 'Navbar__navigationSection--open' : 'Navbar__navigationSection--close'}>
                    <div className="navigation-container">
                        <ul>
                            <li><Link to="about" smooth={true} duration={500}>About Me</Link></li>
                            <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                            <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
                            <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="cv-btn">
                        <p className='btn-tex'>Download CV</p>
                    </div>
                </div>) : (<div className={'Navbar__navigationSection--open'}>
                    <div className="Navbar__navigationContainer">
                        <ul className='Navbar__list'>
                            <li className='Navbar__item'><Link to="about" smooth={true} duration={500}>About Me</Link></li>
                            <li className='Navbar__item'><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                            <li className='Navbar__item'><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
                            <li className='Navbar__item'><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                            <li className='Navbar__item'><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="Navbar__btn--browse">
                        <a className="Navbar__btn--Link" href="https://shoaib-sm-resume.onrender.com/" target="_blank" rel="noopener noreferrer">
                            <p className='Navbar__btnText'>Browse CV</p>
                        </a>
                    </div>
                </div>)}

                <div className="toggler" onClick={toggler}>
                    <RxHamburgerMenu />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
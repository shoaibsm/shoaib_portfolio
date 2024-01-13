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
            <div className="container" ref={navRef}>
                <div className="brand-section">
                    <div className="brand-name">
                        <Link to="introduction" smooth={true} duration={500}>
                            <h2 className='name'><span>Shoaib</span> Mohammed</h2>
                        </Link>
                    </div>
                </div>

                {window.innerWidth <= 576 ? (<div className={isNavOpen ? 'navigation-section' : 'navigation-section-close'}>
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
                </div>) : (<div className={'navigation-section'}>
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
                        <a href="https://shoaib-sm-resume.onrender.com/" target="_blank" rel="noopener noreferrer">
                            <p className='btn-text'>Download CV</p>
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
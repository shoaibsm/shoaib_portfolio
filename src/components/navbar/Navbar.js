import React from 'react'
import './Navbar.scss'
import { Link } from 'react-scroll'
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
    return (
        <div className='Navbar'>
            <div className="container">
                <div className="brand-section">
                    <div className="brand-name">
                        <Link to="introduction" smooth={true} duration={500}>
                            <h2 className='my-name'><span>Shoaib</span> Mohammed</h2>
                        </Link>
                    </div>
                </div>
                <div className="navigation-section">
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
                    <div className="hamburg">
                        <RxHamburgerMenu />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
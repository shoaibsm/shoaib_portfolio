import React from 'react'
import './ContactInfo.scss'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { MdEmail } from 'react-icons/md';
import { FaFile } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from 'react-scroll';

function ContactInfo() {
    return (
        <section className='ContactInfo'>
            <div className="ContactInfo__container">
                <nav className="mainNavigation">
                    <ul className="mainNavigation__list">
                        <li className="mainNavigation__item"><Link to="introduction" smooth={true} duration={500}><p>Introduction</p></Link></li>
                        <li className="mainNavigation__item"><Link to="about" smooth={true} duration={500}><p>About Me</p></Link></li>
                        <li className="mainNavigation__item"><Link to="skills" smooth={true} duration={500}><p>Skills</p></Link></li>
                        <li className="mainNavigation__item"><Link to="experience" smooth={true} duration={500}><p>Experience</p></Link></li>
                        <li className="mainNavigation__item"><Link to="projects" smooth={true} duration={500}><p>Projects</p></Link></li>
                    </ul>
                </nav>
                <div className="socialConnect">
                    <nav className="footerNavigation">
                        <ul className="footerNavigation__list">
                            <li className='footerNavigation__item'>
                                <a href="tel:+917057866962" className="footerNavigation__link">
                                    <div className="icon">
                                        <BsFillTelephoneFill />
                                    </div>
                                    <p>+91 7057866962</p>
                                </a>
                            </li>
                            <li className='footerNavigation__item'>
                                <a href="https://www.google.com/maps/place/Malegaon, Nashik 423203" target="_blank" rel="noopener noreferrer" className="footerNavigation__link">
                                    <div className="icon">
                                        <ImLocation />
                                    </div>
                                    <p>Malegaon, Nashik 423203</p>
                                </a>
                            </li>
                            <li className='footerNavigation__item'>
                                <a href="mailto:shoaib.sm6655@gmail.com" className="footerNavigation__link">
                                    <div className="icon">
                                        <MdEmail />
                                    </div>
                                    <p>shoaib.sm6655@gmail.com</p>
                                </a>
                            </li>
                            <li className='footerNavigation__item'>
                                <a href="https://shoaib-sm-resume.onrender.com/" target="_blank" rel="noopener noreferrer" className="footerNavigation__link">
                                    <div className="icon">
                                        <FaFile />
                                    </div>
                                    <p>Shoaib_Mohammed_Resume</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <section className="innerSocialConnect">
                        <div className="socialConnect__aboutMe">
                            <Link to="about" smooth={true} duration={500}><h4 className='socialConnect__aboutMe__headingText'>
                                About Me </h4>
                                <p className='socialConnect__aboutMe__text'>I am a passionate MERN (MongoDB, Express.js, React, Node.js) stack developer with a keen eye for detail and a love for creating seamless and dynamic web applications.</p>
                            </Link>
                        </div>
                        <div className="socialConnect__socialMedia">
                            <ul className="socialConnect__mediaList">
                                <li className="socialConnect__mediaItem">
                                    <a href="https://www.linkedin.com/in/shoaib-mohammed95/" target="_blank" rel="noopener noreferrer" className="socialConnect__mediaLinks">
                                        <IoLogoLinkedin className='icon' />
                                    </a>
                                </li>
                                <li className="socialConnect__mediaItem">
                                    <a href="https://github.com/shoaibsm" target="_blank" rel="noopener noreferrer" className="socialConnect__mediaLinks">
                                        <FaGithub className='icon' />
                                    </a>
                                </li>
                                <li className="socialConnect__mediaItem">
                                    <a href="https://www.facebook.com/shoaib.mohammed.71271" target="_blank" rel="noopener noreferrer" className="socialConnect__mediaLinks">
                                        <FaFacebook className='icon' />
                                    </a>
                                </li>
                                <li className="socialConnect__mediaItem">
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="socialConnect__mediaLinks">
                                        <FaSquareInstagram className='icon' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo
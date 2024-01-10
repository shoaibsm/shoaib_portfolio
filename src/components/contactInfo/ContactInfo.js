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
        <div className='ContactInfo'>
            <div className="contactInfo-wrap">
                <div className="navigation">
                    <div className="nav-links">
                        <ul>
                            <li><Link to="introduction" smooth={true} duration={500}><p>Introduction</p></Link></li>
                            <li><Link to="about" smooth={true} duration={500}><p>About Me</p></Link></li>
                            <li><Link to="skills" smooth={true} duration={500}><p>Skills</p></Link></li>
                            <li><Link to="experience" smooth={true} duration={500}><p>Experience</p></Link></li>
                            <li><Link to="projects" smooth={true} duration={500}><p>Projects</p></Link></li>
                            <li><Link to="contact" smooth={true} duration={500}><p>Contact</p></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-section">
                    <div className="contact-section">
                        <div className="contactInfo">
                            <ul >
                                <li className='flex'>
                                    <a href="tel:+917057866962">
                                        <div className="icon">
                                            <BsFillTelephoneFill />
                                        </div>
                                        <p>+91 7057866962</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.google.com/maps/place/Malegaon, Nashik 423203" target="_blank" rel="noopener noreferrer">
                                        <div className="icon">
                                            <ImLocation />
                                        </div>
                                        <p>Malegaon, Nashik 423203</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:shoaib.sm6655@gmail.com">
                                        <div className="icon">
                                            <MdEmail />
                                        </div>
                                        <p>shoaib.sm6655@gmail.com</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://shoaib-sm-resume.onrender.com/" target="_blank" rel="noopener noreferrer">
                                        <div className="icon">
                                            <FaFile />
                                        </div>
                                        <p>Shoaib_Mohammed_Resume</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="social-connect">
                            <div className="about-me">
                                <Link to="about" smooth={true} duration={500}><h4 className='about-me-heading'>
                                    About Me </h4>
                                    <p className='about-me-text'>I am a passionate MERN (MongoDB, Express.js, React, Node.js) stack developer with a keen eye for detail and a love for creating seamless and dynamic web applications.</p>
                                </Link>
                            </div>
                            <div className="social-media">
                                <ul>
                                    <li>
                                        <a href="https://www.linkedin.com/in/shoaib-mohammed95/" target="_blank" rel="noopener noreferrer">
                                            <IoLogoLinkedin className='icon' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/shoaibsm" target="_blank" rel="noopener noreferrer">
                                            <FaGithub className='icon' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/shoaib.mohammed.71271" target="_blank" rel="noopener noreferrer">
                                            <FaFacebook className='icon' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                            <FaSquareInstagram className='icon' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
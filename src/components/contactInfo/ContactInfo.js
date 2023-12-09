import React from 'react'
import './ContactInfo.scss'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import profileImg from '../../assets/shoaib_img_2.jpg'
import { Link } from 'react-scroll';

function ContactInfo() {
    return (
        <div className='ContactInfo'>
            <div className="navigation">
                <div className="nav-links">
                    <ul>
                        <li><Link to="introduction" smooth={true} duration={500}>Introduction</Link></li>
                        <li><Link to="about" smooth={true} duration={500}>About Me</Link></li>
                        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                        <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
                        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-section">
                <div className="brand-section">
                    <div className="profile-img-container">
                        <div className="profile-img">
                            <img src={profileImg} alt="Shoaib Mohammed" />
                        </div>
                    </div>
                    <div className="brand-name">
                        <Link to="introduction" smooth={true} duration={500}><h2 className='name'>Shoaib Mohammed</h2></Link>

                        <p className='role'>MERN Stack Developer</p>
                    </div>
                </div>

                <div className="contact-section">
                    <div className="address-section">
                        <div className="address">
                            <div className="icon flex"><FaLocationDot /></div>
                            <p>Malegaon, Nashik 423203</p>
                        </div>
                        <div className="phone-number">
                            <div className="icon flex"><FaPhone /></div>
                            <p>+91 7057866962</p>
                        </div>
                        <div className="email">
                            <div className="icon flex"><MdEmail /></div>
                            <p>shoaib.sm6655@gmail.com</p>
                        </div>
                    </div>
                    <div className="social-connect">
                        <div className="about-me">
                            <Link to="about" smooth={true} duration={500}><h4 className='about-me-heading'>
                                About Me </h4>
                                <p className='about-me-text'>I am a passionate MERN (MongoDB, Express.js, React, Node.js) stack developer with a keen eye for detail and a love for creating seamless and dynamic web applications. </p>
                            </Link>
                        </div>
                        <div className="social-media">
                            <ul>
                                <li >
                                    <div className="icon-box">
                                        <IoLogoLinkedin className='icon' />
                                    </div>
                                </li>
                                <li >
                                    <div className="icon-box">
                                        <FaGithub className='icon' />
                                    </div>
                                </li>
                                <li >
                                    <div className="icon-box">
                                        <FaFacebook className='icon' />
                                    </div>
                                </li>
                                <li >
                                    <div className="icon-box">
                                        <FaSquareInstagram className='icon' />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
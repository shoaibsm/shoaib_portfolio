import React from 'react'
import './Introduction.scss'
import profileImg from '../../assets/shoaib_img_2.jpg'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function Introduction() {
    return (
        <div className='Introduction'>
            <div className="my-details">
                <p className="greeting">Hello, I'm </p>
                <h1 className="name">Shoaib Mohammed</h1>
                <p className="role">MERN Stack Developer</p>
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
            <div className="my-photo">
                <img src={profileImg} alt="Shoaib Mohammed" />
            </div>
        </div>
    )
}

export default Introduction
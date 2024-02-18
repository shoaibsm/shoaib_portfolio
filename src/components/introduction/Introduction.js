import React from 'react'
import './Introduction.scss'
import profileImg from '../../assets/shoaib_02.jpg'
import myProfileImg from '../../assets/myProfileImg.jpg'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { StyledIntroduction } from '../../styles/GlobalStyles';

function Introduction({ isDarkMode }) {
    return (

        <StyledIntroduction isDarkMode={isDarkMode}>
            <div className='Introduction'>
                <div className="Introduction__myDetails">
                    <p className="Introduction__greeting">Hello, I'm </p>
                    <h1 className="Introduction__myName">Shoaib Mohammed</h1>
                    <p className="Introduction__role">MERN Stack Developer</p>
                    <nav className="socialMediaNav">
                        <ul className='socialMediaNav__list'>
                            <li className='socialMediaNav__item'>
                                <a href="https://www.linkedin.com/in/shoaib-mohammed95/" target="_blank" rel="noopener noreferrer">
                                    <IoLogoLinkedin className='icon' />
                                </a>
                            </li>
                            <li className='socialMediaNav__item'>
                                <a href="https://github.com/shoaibsm" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className='icon' />
                                </a>
                            </li>
                            <li className='socialMediaNav__item'>
                                <a href="https://www.facebook.com/shoaib.mohammed.71271" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className='icon' />
                                </a>
                            </li>
                            <li className='socialMediaNav__item'>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                    <FaSquareInstagram className='icon' />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="Introduction__profileImgBox">
                    <img className='Introduction__profileImg' src={myProfileImg} alt="Shoaib Mohammed" />
                </div>
            </div>
        </StyledIntroduction>
    )
}

export default Introduction
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
                        <li><IoLogoLinkedin className='icon' /></li>
                        <li><FaGithub className='icon' /></li>
                        <li><FaFacebook className='icon' /></li>
                        <li><FaSquareInstagram className='icon' /></li>
                        {/* To Do - add pintrst twitter youtube*/}
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
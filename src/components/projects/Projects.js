import React from 'react'
import './Projects.scss'
import projectImg from '../../assets/project.jpg'
import authImg from '../../assets/auth.png'
import { Link } from 'react-router-dom'
import { IoIosLaptop } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { StyledProjects } from '../../styles/GlobalStyles';

function Projects({ isDarkMode }) {

    return (
        <StyledProjects isDarkMode={isDarkMode}>
            <div className='Projects'>
                <h2 className='Projects__headingText'>Projects</h2>
                <div className="Projects__container">
                    <div className="Projects__content">
                        <div className="Projects__imgContainer">
                            <img className='Projects__img' src={authImg} alt="Project" />
                        </div>
                        <div className="Projects__titleBox">
                            <h4 className='Projects__titleText'>User Authentication Project</h4>
                        </div>
                        <div className="Projects__desc">
                            <p className="Projects__descText">- React.js</p>
                            <p className="Projects__descText">- Node.js (for backend API )</p>
                            <p className="Projects__descText">- Express.js (for backend API )</p>
                            <p className="Projects__descText">- JSON Web Tokens (JWT)</p>
                            <p className="Projects__descText">-  Axios (for API requests)</p>

                        </div>
                        <div className="Projects__navigation">
                            <div className="Projects__btn--open btn-primary">
                                <div className="Projects__iconBox">
                                    <IoIosLaptop className='icon' />
                                </div>
                                <Link className='Projects__link'><p className='Projects__btnText'>Website</p></Link>
                            </div>
                            <div className="Projects__btn--open btn-primary">
                                <div className="Projects__iconBox">
                                    <FaGithub className='icon' />
                                </div>
                                <Link className='Projects__link'><p className='Projects__btnText'>  Git Code</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="Projects__content">
                        <div className="Projects__imgContainer">
                            <img className='Projects__img' src={projectImg} alt="Project" />
                        </div>
                        <div className="Projects__titleBox">
                            <h4 className='Projects__titleText'>Sample Project</h4>
                        </div>
                        <div className="Projects__desc">
                            <p className="Projects__descText">Lorem ipsum dolor sit amet</p>
                            <p className="Projects__descText">Lorem ipsum dolor sit amet</p>
                            <p className="Projects__descText">Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="Projects__navigation">
                            <div className="Projects__btn--open btn-primary">
                                <div className="Projects__iconBox">
                                    <IoIosLaptop className='icon' />
                                </div>
                                <Link className='Projects__link'><p className='Projects__btnText'>Website</p></Link>
                            </div>
                            <div className="Projects__btn--open btn-primary">
                                <div className="Projects__iconBox">
                                    <FaGithub className='icon' />
                                </div>
                                <Link className='Projects__link'><p className='Projects__btnText'>  Git Code</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="Projects__content">
                        <div className="Projects__imgContainer">
                            <img className='Projects__img' src={projectImg} alt="Project" />
                        </div>
                        <div className="Projects__titleBox">
                            <h4 className='Projects__titleText'>Sample Project</h4>
                        </div>
                        <div className="Projects__desc">
                            <p className="Projects__descText">Lorem ipsum dolor sit amet</p>
                            <p className="Projects__descText">Lorem ipsum dolor sit amet</p>
                            <p className="Projects__descText">Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="Projects__navigation">
                            <div className="Projects__btn--open btn-primary">
                                <div className="Projects__iconBox">
                                    <IoIosLaptop className='icon' />
                                </div>
                                <Link className='Projects__link'><p className='Projects__btnText'>Website</p></Link>
                            </div>
                            <div className="Projects__btn--open btn-primary">
                                <div className="Projects__iconBox">
                                    <FaGithub className='icon' />
                                </div>
                                <Link className='Projects__link'><p className='Projects__btnText'>  Git Code</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="Projects__content">
                        <div className="Projects__imgContainer">
                            <img className='Projects__img' src={projectImg} alt="Project" />
                        </div>
                        <div className="Projects__titleBox">
                            <h4 className='Projects__titleText'>Sample Project</h4>
                        </div>
                        <div className="Projects__desc">
                            <p className="Projects__descText">Lorem ipsum dolor sit amet</p>
                            <p className="Projects__descText">Lorem ipsum dolor sit amet</p>
                            <p className="Projects__descText">Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="Projects__navigation">
                            <div className="Projects__btn--open btn-primary">
                                <div className="Projects__iconBox">
                                    <IoIosLaptop className='icon' />
                                </div>
                                <Link className='Projects__link'><p className='Projects__btnText'>Website</p></Link>
                            </div>
                            <div className="Projects__btn--open btn-primary">
                                <div className="Projects__iconBox">
                                    <FaGithub className='icon' />
                                </div>
                                <Link className='Projects__link'><p className='Projects__btnText'>  Git Code</p></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </StyledProjects>
    )
}

export default Projects
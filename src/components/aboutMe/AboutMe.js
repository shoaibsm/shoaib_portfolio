import React from 'react'
import './AboutMe.scss'
import profileImg from '../../assets/shoaib_img_1.jpg'
import { StyledAboutMe } from '../../styles/GlobalStyles'

function AboutMe({ isDarkMode }) {
    return (

        <StyledAboutMe isDarkMode={isDarkMode}>
            <section className='AboutMe'>
                <h2 className='AboutMe__headingText'>About Me</h2>
                <div className="AboutMe__content">
                    <div className="profile-img">
                        <img src={profileImg} alt="Shoaib Mohammed" />
                    </div>
                    <div className="AboutMe__details">
                        <p className='AboutMe__text'>
                            I'm a dedicated and passionate MERN Stack Developer with a strong foundation in building dynamic and scalable web applications. My journey in the world of programming started with a curiosity to solve real-world problems through technology, and it has since evolved into a full-fledged commitment to creating seamless, user-friendly, and innovative solutions.
                        </p>
                        <p className='AboutMe__text'>
                            With expertise in MongoDB, Express.js, React.js, and Node.js, I thrive on turning ideas into reality. I have a keen eye for detail and a problem-solving mindset that enables me to tackle complex challenges in the world of web development. Whether it's crafting robust APIs, designing interactive user interfaces, or optimizing backend processes, I am always up for the next coding adventure.
                        </p>
                        <p className='AboutMe__text'>
                            Beyond coding, I am a lifelong learner who stays updated with the latest technologies and trends in the ever-evolving tech landscape. I am enthusiastic about collaborating with like-minded professionals, contributing to open-source projects, and continuously refining my skills to deliver cutting-edge solutions.
                        </p>
                    </div>
                </div>
            </section>
        </StyledAboutMe>
    )
}

export default AboutMe
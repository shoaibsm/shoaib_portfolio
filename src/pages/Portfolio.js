import React from 'react'
import './Portfolio.scss'
import Introduction from '../components/introduction/Introduction'
import Skills from '../components/skills/Skills'
import Experience from '../components/experience/Experience'
import Projects from '../components/projects/Projects'
import ContactInfo from '../components/contactInfo/ContactInfo'
import AboutMe from '../components/aboutMe/AboutMe'
import { Element } from 'react-scroll'
import { ToggleButton } from '../styles/GlobalStyles'

function Portfolio({ isDarkMode, toggleDarkMode }) {

    return (
        <div className='Portfolio'>
            <Element name="introduction"><Introduction isDarkMode={isDarkMode} /></Element>
            <Element name="about"><AboutMe isDarkMode={isDarkMode} /></Element>
            <Element name="skills"><Skills isDarkMode={isDarkMode} /></Element>
            <Element name="experience"><Experience isDarkMode={isDarkMode} /></Element>
            <Element name="projects"><Projects isDarkMode={isDarkMode} /></Element>
            <Element name='contact'><ContactInfo /></Element>

            <ToggleButton isDarkMode={isDarkMode} onClick={toggleDarkMode} className='toggle__btn--them'>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </ToggleButton>
        </div>
    )
}

export default Portfolio
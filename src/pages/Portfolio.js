import React from 'react'
import './Portfolio.scss'
import Introduction from '../components/introduction/Introduction'
import Skills from '../components/skills/Skills'
import Experience from '../components/experience/Experience'
import Projects from '../components/projects/Projects'
import ContactInfo from '../components/contactInfo/ContactInfo'
import AboutMe from '../components/aboutMe/AboutMe'
import { Element } from 'react-scroll'

function Portfolio() {
    return (
        <div className='Portfolio'>
            <Element name="introduction"><Introduction /></Element>
            <Element name="about"><AboutMe /></Element>
            <Element name="skills"><Skills /></Element>
            <Element name="experience"><Experience /></Element>
            <Element name="projects"><Projects /></Element>
            <Element name='contact'><ContactInfo /></Element>
        </div>
    )
}

export default Portfolio
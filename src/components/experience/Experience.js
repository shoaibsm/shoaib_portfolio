import React from 'react'
import './Experience.scss'
import { FaBuilding } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { StyledExperience } from '../../styles/GlobalStyles';

function Experience({ isDarkMode }) {
    return (
        <StyledExperience isDarkMode={isDarkMode}>
            <div className='Experience'>
                <h2 className='Experience__headingText'>Experience</h2>
                <div className='Experience__container'>
                    <div className="Experience__companyBox">
                        <div className="Experience__companyTitle">
                            <div className="Experience__companyIcon">
                                <FaBuilding className='icon' />
                            </div>
                            <h3 className='Experience__companyName'>Cablesmith</h3>
                        </div>
                        <div className='Experience__jobTitle'>
                            <div className="Experience__jobTitleIcon">
                                <BsFillBriefcaseFill className='icon' />
                            </div>
                            <p className='Experience__jobProfile'>Software Engineer | Jan 2022 - Present</p>
                        </div>
                        <p className='Experience__jobSummary'>
                            As a Full Stack Developer at Company Name, I played a key role in building robust and scalable web applications using the MERN stack.
                        </p>
                        <p className='Experience__jobDescHeading'>My responsibilities included:</p>
                        <ul className='Experience__jobDesc'>
                            <li>Collaborating with cross-functional teams to gather and define project requirements.</li>
                            <li>Designing and implementing RESTful APIs using Node.js and Express.js for seamless communication between the frontend and backend.</li>
                            <li>Developing dynamic and responsive user interfaces using React.js, ensuring an optimal user experience across devices.</li>
                            <li>Integrating MongoDB databases to store and manage application data efficiently.</li>
                            <li>Implementing authentication and authorization mechanisms to enhance the security of the applications.</li>
                            <li>Optimizing application performance and addressing any scalability issues.</li>
                            <li>Conducting code reviews and providing constructive feedback to maintain code quality and standards.</li>
                        </ul>
                        <p className='Experience__bottomSummary'>
                            Through these experiences, I honed my skills in MERN stack technologies and contributed to the successful delivery of high-quality software solutions.
                        </p>
                    </div>
                    <hr className='horizontal-rule' />
                    <div className="Experience__companyBox">
                        <div className="Experience__companyTitle">
                            <div className="Experience__companyIcon">
                                <FaBuilding className='icon' />
                            </div>
                            <h3 className='Experience__companyName'>Micreatel</h3>
                        </div>
                        <div className='Experience__jobTitle'>
                            <div className="Experience__jobTitleIcon">
                                <BsFillBriefcaseFill className='icon' />
                            </div>
                            <p className='Experience__jobProfile'>Network Design | Sep 2017 - Dec 2021</p>
                        </div>
                        <p className='Experience__jobSummary'>
                            As a Network Design Engineer at Micratel Solutions, I played a crucial role as an IBS Engineer, leading the effort to optimize wireless communication systems across diverse structures.
                        </p>
                        <p className='Experience__bottomSummary'>
                            Using my hands-on experience with iBwave Design software, I carefully planned and implemented in-building solutions. Skilled in deploying distributed antenna systems (DAS), small cells, and repeaters, I contributed to the precise placement of equipment and the effective optimization of coverage. By using iBwave's simulation tools, I ensured reliable network performance and seamless connectivity. This position not only showcased my expertise in telecommunications but also perfectly aligned with Micratel Solutions' dedication to delivering strong solutions in in-building wireless network design.
                        </p>
                    </div>
                    <hr className='horizontal-rule' />
                    <div className="Experience__companyBox">
                        <div className="Experience__companyTitle">
                            <div className="Experience__companyIcon">
                                <FaBuilding className='icon' />
                            </div>
                            <h3 className='Experience__companyName'>Vedang Cellular Services</h3>
                        </div>
                        <div className='Experience__jobTitle'>
                            <div className="Experience__jobTitleIcon">
                                <BsFillBriefcaseFill className='icon' />
                            </div>
                            <p className='Experience__jobProfile'>IBS Engineer | Aug 2015 - Aug 2017</p>
                        </div>
                        <p className='Experience__jobSummary'>
                            As an IBS Engineer at Vedang Cellular Services, I played a pivotal role in optimizing and enhancing wireless communication systems within diverse structures.
                        </p>
                        <p className='Experience__bottomSummary'>
                            In-Building Solutions (IBS) Engineer with a background in telecommunications, specializing in designing and implementing wireless communication systems within various structures. Experienced in deploying distributed antenna systems (DAS), small cells, and repeaters to optimize coverage and capacity. Proven ability to troubleshoot and maintain in-building networks, ensuring seamless integration with outdoor cellular systems. Adept at meeting connectivity demands in diverse environments.
                        </p>
                    </div>
                </div>
            </div>
        </StyledExperience>
    )
}

export default Experience
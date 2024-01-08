import React from 'react'
import './Experience.scss'
import { FaBuilding } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";

function Experience() {
    return (
        <div className='Experience'>
            <h2 className='experience-heading'>Experience</h2>
            <div className='experience-container'>
                <div className="company">
                    <div className="company-title">
                        <div className="company-icon">
                            <FaBuilding className='icon' />
                        </div>
                        <h3 className='company-name'>Cablesmith</h3>
                    </div>

                    <div className='job-title'>
                        <div className="job-title-icon">
                            <BsFillBriefcaseFill className='icon' />
                        </div>
                        <p className='job-profile'>Software Engineer | Jan 2022 - Present</p>
                    </div>
                    <p className='job-summary'>
                        As a Full Stack Developer at Company Name, I played a key role in building robust and scalable web applications using the MERN stack.
                    </p>
                    <p className='job-desc-heading'>My responsibilities included:</p>
                    <ul className='job-desc'>
                        <li>Collaborating with cross-functional teams to gather and define project requirements.</li>
                        <li>Designing and implementing RESTful APIs using Node.js and Express.js for seamless communication between the frontend and backend.</li>
                        <li>Developing dynamic and responsive user interfaces using React.js, ensuring an optimal user experience across devices.</li>
                        <li>Integrating MongoDB databases to store and manage application data efficiently.</li>
                        <li>Implementing authentication and authorization mechanisms to enhance the security of the applications.</li>
                        <li>Optimizing application performance and addressing any scalability issues.</li>
                        <li>Conducting code reviews and providing constructive feedback to maintain code quality and standards.</li>
                    </ul>
                    <p className='bottom-summary'>
                        Through these experiences, I honed my skills in MERN stack technologies and contributed to the successful delivery of high-quality software solutions.
                    </p>
                </div>
                <hr className='horizontal-roll' />
                <div className="company">
                    <div className="company-title">
                        <div className="company-icon">
                            <FaBuilding className='icon' />
                        </div>
                        <h3 className='company-name'>Micreatel</h3>
                    </div>
                    <div className='job-title'>
                        <div className="job-title-icon">
                            <BsFillBriefcaseFill className='icon' />
                        </div>
                        <p className='job-profile'>Network Design | Sep 2017 - Dec 2021</p>
                    </div>
                    <p className='job-summary'>
                        As a Network Design Engineer at Micratel Solutions, I played a crucial role as an IBS Engineer, leading the effort to optimize wireless communication systems across diverse structures.
                    </p>
                    <p className='bottom-summary'>
                        Using my hands-on experience with iBwave Design software, I carefully planned and implemented in-building solutions. Skilled in deploying distributed antenna systems (DAS), small cells, and repeaters, I contributed to the precise placement of equipment and the effective optimization of coverage. By using iBwave's simulation tools, I ensured reliable network performance and seamless connectivity. This position not only showcased my expertise in telecommunications but also perfectly aligned with Micratel Solutions' dedication to delivering strong solutions in in-building wireless network design.
                    </p>
                </div>
                <hr className='horizontal-roll' />
                <div className="company">
                    <div className="company-title">
                        <div className="company-icon">
                            <FaBuilding className='icon' />
                        </div>
                        <h3 className='company-name'>Vedang Cellular Services</h3>
                    </div>
                    <div className='job-title'>
                        <div className="job-title-icon">
                            <BsFillBriefcaseFill className='icon' />
                        </div>
                        <p className='job-profile'>IBS Engineer | Aug 2015 - Aug 2017</p>
                    </div>
                    <p className='job-summary'>
                        As an IBS Engineer at Vedang Cellular Services, I played a pivotal role in optimizing and enhancing wireless communication systems within diverse structures.
                    </p>
                    <p className='bottom-summary'>
                        In-Building Solutions (IBS) Engineer with a background in telecommunications, specializing in designing and implementing wireless communication systems within various structures. Experienced in deploying distributed antenna systems (DAS), small cells, and repeaters to optimize coverage and capacity. Proven ability to troubleshoot and maintain in-building networks, ensuring seamless integration with outdoor cellular systems. Adept at meeting connectivity demands in diverse environments.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Experience
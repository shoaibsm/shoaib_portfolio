import React from 'react'
import './Projects.scss'
import authImg from '../../assets/auth.png'
import crud from '../../assets/crud.png'
import crypto from '../../assets/crypto.png'
import npmPkg from '../../assets/npm.png'
import fetch_dom from '../../assets/fetch and dom.png'
import pdf_download_app from '../../assets/pdf_download_app.png'
import fiber_network_design from '../../assets/fiber_network_design.png'
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
                            <img className='Projects__img' src={fiber_network_design} alt="PDF Download Project" />
                        </div>
                        <div className="Projects__titleBox">
                            <h4 className='Projects__titleText'>Fiber Network Design</h4>
                        </div>
                        <div className="Projects__desc">
                            <p className="Projects__descText">- Designed fiber network paths using Google Maps API</p>
                            <p className="Projects__descText">- Implemented interactive polylines and markers</p>
                            <p className="Projects__descText">- Real-time distance calculation and visualization</p>
                            <p className="Projects__descText">- Integrated with Redux for state management</p>
                            <p className="Projects__descText">- Enhanced user experience with dynamic map updates</p>
                        </div>
                        <div className="Projects__navigation">
                            <a href="https://network-app-client.onrender.com" target="_blank" rel="noopener noreferrer" className="Projects__btn--open btn-primary">
                                <div className="Projects__iconBox">
                                    <IoIosLaptop className='icon' />
                                </div>
                                <p className='Projects__btnText'>Website</p>
                            </a>
                            <a href="https://github.com/shoaibsm/fiber_network_design.git" target="_blank" rel="noopener noreferrer" className="Projects__btn--open btn-primary">
                                <div className="Projects__iconBox">
                                    <FaGithub className='icon' />
                                </div>
                                <p className='Projects__btnText'>Git Code</p>
                            </a>
                        </div>
                    </div>
                    <div className="Projects__content">
                        <div className="Projects__imgContainer">
                            <img className='Projects__img' src={pdf_download_app} alt="PDF Download Project" />
                        </div>
                        <div className="Projects__titleBox">
                            <h4 className='Projects__titleText'>PDF Download Application</h4>
                        </div>
                        <div className="Projects__desc">
                            <p className="Projects__descText">- Implemented PDF download functionality from Google Drive</p>
                            <p className="Projects__descText">- Developed user-friendly interface with React</p>
                            <p className="Projects__descText">- Integrated backend using Express and MongoDB</p>
                            <p className="Projects__descText">- Enabled email tracking and Excel export</p>
                            <p className="Projects__descText">- Ensured seamless navigation and download experience</p>
                        </div>
                        <div className="Projects__navigation">
                            <a href="https://smpdfdownload.netlify.app/" target="_blank" rel="noopener noreferrer" className="Projects__btn--open btn-primary">
                                <div className="Projects__iconBox">
                                    <IoIosLaptop className='icon' />
                                </div>
                                <p className='Projects__btnText'>Website</p>
                            </a>
                            <a href="https://github.com/shoaibsm/cablesmith_pdf_downlaod.git" target="_blank" rel="noopener noreferrer" className="Projects__btn--open btn-primary">
                                <div className="Projects__iconBox">
                                    <FaGithub className='icon' />
                                </div>
                                <p className='Projects__btnText'>Git Code</p>
                            </a>
                        </div>
                    </div>
                    <div className="Projects__content">
                        <div className="Projects__imgContainer">
                            <img className='Projects__img' src={authImg} alt="Authentication" />
                        </div>
                        <div className="Projects__titleBox">
                            <h4 className='Projects__titleText'>User Authentication Project</h4>
                        </div>
                        <div className="Projects__desc">
                            <p className="Projects__descText">- User auth for accessToekn & refeshToken</p>
                            <p className="Projects__descText">- Frontend developed using React.js</p>
                            <p className="Projects__descText">- Node.js (for backend API )</p>
                            <p className="Projects__descText">- Express.js (for backend API )</p>
                            <p className="Projects__descText">- JSON Web Tokens (JWT)</p>
                            <p className="Projects__descText">-  Axios (for API requests)</p>
                        </div>
                        <div className="Projects__navigation">
                            <a href="https://auth-client-05os.onrender.com/" target="_blank" rel="noopener noreferrer" className="Projects__btn--open btn-primary">
                                <div className="Projects__iconBox">
                                    <IoIosLaptop className='icon' />
                                </div>
                                <p className='Projects__btnText'>Website</p>
                            </a>
                            <a href="https://github.com/shoaibsm/auth_project" target="_blank" rel="noopener noreferrer" className="Projects__btn--open btn-primary">
                                <div className="Projects__iconBox">
                                    <FaGithub className='icon' />
                                </div>
                                <p className='Projects__btnText'>Git Code</p>
                            </a>
                        </div>
                    </div>
                    <div className="Projects__content">
                        <div className="Projects__imgContainer">
                            <img className='Projects__img' src={crud} alt="CRUD" />
                        </div>
                        <div className="Projects__titleBox">
                            <h4 className='Projects__titleText'>CRUD Operation</h4>
                        </div>
                        <div className="Projects__desc">
                            <p className="Projects__descText">- Create, Read, Update, Delete (CRUD) operations</p>
                            <p className="Projects__descText">- Frontend developed using React.js</p>
                            <p className="Projects__descText">- Node.js (for backend API )</p>
                            <p className="Projects__descText">- Express.js (for backend API )</p>
                            <p className="Projects__descText">-  Axios (for API requests)</p>
                        </div>
                        <div className="Projects__navigation">
                            <a href="https://createnote-crud-client.onrender.com/" target="_blank" rel="noopener noreferrer" className="Projects__btn--open btn-primary">
                                <div className="Projects__iconBox">
                                    <IoIosLaptop className='icon' />
                                </div>
                                <p className='Projects__btnText'>Website</p>
                            </a>
                            <a href="https://github.com/shoaibsm/curd_project" target="_blank" rel="noopener noreferrer" className="Projects__btn--open btn-primary">
                                <div className="Projects__iconBox">
                                    <FaGithub className='icon' />
                                </div>
                                <p className='Projects__btnText'>Git Code</p>
                            </a>
                        </div>
                    </div>
                    <div className="Projects__content">
                        <div className="Projects__imgContainer">
                            <img className='Projects__img' src={crypto} alt="Crypto Project" />
                        </div>
                        <div className="Projects__titleBox">
                            <h4 className='Projects__titleText'>Crypto Converter (Select & Option)</h4>
                        </div>
                        <div className="Projects__desc">
                            <p className="Projects__descText">- Implement dynamic dropdown menus</p>
                            <p className="Projects__descText"> - Implement the conversion logic using JavaScript</p>
                            <p className="Projects__descText">- Responsive Design for small and large screen</p>
                            <p className="Projects__descText">- API calls made using the Fetch method</p>
                            <p className="Projects__descText">- Real-time fetching of cryptocurrency exchange rates</p>
                        </div>
                        <div className="Projects__navigation">
                            <a href="https://crypto-converter-select-option.onrender.com/" target="_blank" rel="noopener noreferrer" className="Projects__btn--open btn-primary">
                                <div className="Projects__iconBox">
                                    <IoIosLaptop className='icon' />
                                </div>
                                <p className='Projects__btnText'>Website</p>
                            </a>
                            <a href="https://github.com/shoaibsm/crypto-converter_select-option" target="_blank" rel="noopener noreferrer" className="Projects__btn--open btn-primary">
                                <div className="Projects__iconBox">
                                    <FaGithub className='icon' />
                                </div>
                                <p className='Projects__btnText'>Git Code</p>
                            </a>
                        </div>
                    </div>
                    <div className="Projects__content">
                        <div className="Projects__imgContainer">
                            <img className='Projects__img' src={npmPkg} alt="npm package" />
                        </div>
                        <div className="Projects__titleBox">
                            <h4 className='Projects__titleText'>NPM Package</h4>
                        </div>
                        <div className="Projects__desc">
                            <p className="Projects__descText">- Developed and published an npm package for retrieving country information</p>
                            <p className="Projects__descText">- Integrated with external APIs</p>
                            <p className="Projects__descText">- Designed the npm package with a modular and reusable structure</p>
                            <p className="Projects__descText">- Created comprehensive documentation and usage guides</p>
                        </div>
                        <div className="Projects__navigation">
                            <a href="https://get-country-pkg-demo.onrender.com/" target="_blank" rel="noopener noreferrer" className="Projects__btn--open btn-primary">
                                <div className="Projects__iconBox">
                                    <IoIosLaptop className='icon' />
                                </div>
                                <p className='Projects__btnText'>Website</p>
                            </a>
                            <a href="https://github.com/shoaibsm/sm-country-info-pkg" target="_blank" rel="noopener noreferrer" className="Projects__btn--open btn-primary">
                                <div className="Projects__iconBox">
                                    <FaGithub className='icon' />
                                </div>
                                <p className='Projects__btnText'>Git Code</p>
                            </a>
                        </div>
                    </div>
                    <div className="Projects__content">
                        <div className="Projects__imgContainer">
                            <img className='Projects__img' src={fetch_dom} alt="npm package" />
                        </div>
                        <div className="Projects__titleBox">
                            <h4 className='Projects__titleText'>Fetch and DOM</h4>
                        </div>
                        <div className="Projects__desc">
                            <p className="Projects__descText">- Utilized the Fetch API in JavaScript to asynchronously retrieve data</p>
                            <p className="Projects__descText">- Implemented dynamic DOM manipulation techniques to create and display HTML elements</p>
                            <p className="Projects__descText">- Created structured HTML elements such as divs, images, headings, paragraphs, and ratings to present the fetched product data</p>
                        </div>
                        <div className="Projects__navigation">
                            <a href="https://fetch-and-dom.onrender.com/" target="_blank" rel="noopener noreferrer" className="Projects__btn--open btn-primary">
                                <div className="Projects__iconBox">
                                    <IoIosLaptop className='icon' />
                                </div>
                                <p className='Projects__btnText'>Website</p>
                            </a>
                            <a href="https://github.com/shoaibsm/fetch_and_dom" target="_blank" rel="noopener noreferrer" className="Projects__btn--open btn-primary">
                                <div className="Projects__iconBox">
                                    <FaGithub className='icon' />
                                </div>
                                <p className='Projects__btnText'>Git Code</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </StyledProjects>
    )
}

export default Projects
import { IoIosMenu } from "react-icons/io"
import { useState, useEffect, useRef } from 'react'
import { CiSearch } from "react-icons/ci"
import { Button } from '@mui/material'
import "../src/index.css";
import { IoIosArrowRoundForward, IoIosArrowRoundDown } from "react-icons/io"
import Doctor from '../src/assets/Doctor.gif'
import Image2 from '../src/assets/image2.gif'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image3 from '../src/assets/AllinOne.gif'
import SplitType from 'split-type'

export default function mainPage() {
    const [displayNav, setDisplayNav] = useState(false)
    const [page, setPage] = useState(0)
    function handleDisplay() {
        setDisplayNav(prevState => !prevState)
        // const n = document.getElementById("nav");
        // if(n.classList.contains("hideClass")){
        //     n.classList.remove("hideClass")
        // }else {
        //     n.classList.add("hideClass")
        // }
        // console.log(n.classList)
    }

    gsap.registerPlugin(ScrollToPlugin)
    
    function handleGotoPage2(){
        gsap.to(window, {duration: 1,
            scrollTo:{y:".page2", offsetY:70}
        })
    }

    function handleGotoPage3(){
        gsap.to(window, {duration: 1,
            scrollTo:{y:".page3", offsetY:70}
        })

        gsap.to("#all", {
            scrollTo:{
                trigger:'#all',
                toggleActions: 'restart pause resume none'
            },
            scrollTrigger:{
                trigger:'#all',
                toggleActions: 'restart pause resume none'
            },
            y:100,
            stagger:0.05,
            delay:0.2,
            duration: 1,
        })
    }

    return (
        <div className='main-page-outer'>
            {displayNav && <div className='nav-outer' id="nav">
                <div className='nav-bar'>
                    <div className='nav-bar-inner'>
                        <div className='nav-indicator'>
                        </div>
                        <div className='nav-elements'>
                            <div><a href="">Home</a></div>
                            <div><a href="/login">Log In</a></div>
                            <div><a href="/signup">Sign Up</a></div>
                        </div>
                    </div>
                </div>
            </div>}
            <div className="canvas">
                <div className='menu-ribbon-div'>
                    <div className='menu-icon-div'>
                        <IoIosMenu style={{ color: 'white', fontSize: '1.5rem' }} onClick={handleDisplay} />
                        <div style={{ fontSize: '1rem', color:"white"}}>Menu</div>
                    </div>
                    <div className='search-icon'>
                        <CiSearch style={{ color: 'white', fontSize:'1.2rem'}} />
                    </div>
                </div>
                {/* <div>
                    <div className='home-outer-div'>
                        <div className='home-detail'>
                            <div style={{ color: 'white', letterSpacing: '3px', fontSize: '2rem' }}>Purpose of BioShift</div>
                        </div>
                    </div>
                </div> */}
                <div className='page1'>
                    {/* <div className='content'>
                        <div>
                            <h2 style={{margin: 10, fontSize: "13px", fontFamily: "sans-serif", letterSpacing:'2px', width:'fit-content'}}>PURPOSE OF MYDNA</h2>
                            <h1>Detailed Diagonastic of your body </h1>
                            <h6 style={{ margin: 10, fontFamily: "serif", font: "icon", width:'20rem'}}>Health is the most important thing . So don't put it of later. Think about your future</h6>    
                        </div>
                        <div className='img1-div'>
                            <img src={Image1} alt="" />
                        </div>
                    </div> */}
                    <div className='hero-section-outer'>
                        <div className='hero-section'>
                            <div className='hero-section-header'>
                                <div>Automate,</div>
                                <div>Record,</div>
                                <div>Analyze Medical</div>
                                <div>Consultations</div>
                            </div>
                            <div className='hero-section-img'>
                                <img src={Doctor} alt="" />
                            </div>
                        </div>
                        <div>
                            <Button variant="outlined" id='how-it-works' onClick={handleGotoPage2}>How it Works <IoIosArrowRoundDown id='right-arrow' /></Button>
                        </div>
                    </div>
                </div>
                <div className='page2-outer'>
                    <div className='page2-inter'>
                        <div className='page2'>
                            <div>
                                <div className='page2-content'>
                                    <div>
                                        <h2 className='page2-h2'>How it Works</h2>
                                    </div>
                                    <div>
                                        We automatically transcribe and analyze every doctor-patient interaction for better
                                        documentation and care.
                                    </div>
                                    <div>
                                        The transcribed text is analyzed for key medical insights and recommendations.
                                    </div>
                                    <div>
                                        All transcriptions and reports are securely stored and easily accessible.
                                    </div>
                                </div>
                            </div>
                            <div className='page2-img'>
                                <img src={Image2} alt="" />
                            </div>
                        </div>
                        <div className='right-icon-page2'>
                            <button className='down-icon-button' onClick={handleGotoPage3}><IoIosArrowRoundDown id='right-arrow-page2' /></button>
                        </div>
                    </div>
                </div>
                <div className='page3-outer'>
                        <div className='page3-inter'>
                            <div className='page3'>
                                <div>
                                    <div className='page3-content'>
                                        <div className='outline-text'>
                                            <h2>All your Patient Data in One Place</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='page3-img'>
                                    <img src={Image3} alt="" />
                                </div>
                            {/* <div className="page3-content">
                                <div className='page3-text'>Track, store, and review medical records and reports at any time.</div>
                            </div> */}
                            </div>
                            <div className='page3-part2'>
                                <div className='points'>
                                    <li>Track</li>
                                    <li>Store</li>
                                    <li>Review</li>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
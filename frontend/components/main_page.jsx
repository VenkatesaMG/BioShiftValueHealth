import { IoIosMenu } from "react-icons/io"
import { useState } from 'react'
import { CiSearch } from "react-icons/ci"
import { Button } from '@mui/material'
import "../src/index.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import Doctor from '../src/assets/Doctor.gif'

export default function mainPage() {
    const [displayNav, setDisplayNav] = useState(false)
    function handleDisplay() {
        setDisplayNav(prevState => !prevState)
        const n = document.getElementById("nav");
        if(n.classList.contains("hideClass")){
            n.classList.remove("hideClass")
        }else {
            n.classList.add("hideClass")
        }
        console.log(n.classList)
    }
    return (
        <div className='main-page-outer'>
            <div className='nav-outer' id="nav">
                {<div className='nav-bar'>
                    <div className='nav-bar-inner'>
                        <div className='nav-indicator'>
                        </div>
                        <div className='nav-elements'>
                            <div><a href="">Home</a></div>
                            <div><a href="/login">Log In</a></div>
                            <div><a href="/signup">Sign Up</a></div>
                            <div><a href="">Services</a></div>
                        </div>
                    </div>
                </div>}
            </div>
            <div className="canvas">
                <div className='menu-ribbon-div'>
                    <div className='menu-icon-div'>
                        <IoIosMenu style={{ color: 'white', fontSize: '1.5rem' }} onClick={handleDisplay} />
                        <div style={{ fontSize: '0.8rem' }}>Menu</div>
                    </div>
                    <div className='search-icon'>
                        <CiSearch style={{ color: 'white' }} />
                    </div>
                </div>
                {/* <div>
                    <div className='home-outer-div'>
                        <div className='home-detail'>
                            <div style={{ color: 'white', letterSpacing: '3px', fontSize: '2rem' }}>Purpose of BioShift</div>
                        </div>
                    </div>
                </div> */}
                <div className='right'>
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
                            {/* <div className='hero-section-img'>
                                <img src={Doctor} alt="" />
                            </div> */}
                        </div>
                        <div>
                            <Button variant="outlined" id='how-it-works'>How it Works <IoIosArrowRoundForward id='right-arrow' /></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
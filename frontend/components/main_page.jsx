import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { IoIosMenu } from "react-icons/io"
import { useState } from 'react'
import { CiSearch } from "react-icons/ci"
export default function mainPage(){
    const [displayNav, setDisplayNav] = useState(true)
    function handleDisplay(){
        setDisplayNav(prevState => !prevState)
    }
    return(
        <div className='main-page-outer'>
            <div className='nav-outer'>
                <div className='nav-bar'>
                    {displayNav && <div className='nav-bar-inner'>
                        <div className='nav-indicator'>
                        </div>
                        <div className='nav-elements'>
                            <div>Home</div>
                            <div>Log In</div>
                            <div>Sign Up</div>
                            <div>Services</div>
                        </div>
                    </div>}
                </div>
            </div>
            <div className="canvas">
                <div className='menu-ribbon-div'>
                    <div className='menu-icon-div'>
                        <IoIosMenu style={{color:'white', fontSize:'1.5rem'}} onClick={handleDisplay}/>
                        <div style={{fontSize:'0.8rem'}}>Menu</div>
                    </div>
                    <div className='search-icon'>
                        <CiSearch style={{color:'white'}} />
                    </div>
                </div>
                <div>
                    <div className='home-outer-div'>
                        {/* <div className='home-detail'>
                            <div style={{textTransform:'uppercase', color:'white'}}>Purpose of BioShift</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
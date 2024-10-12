import patientImg from '../src/assets/patient_img1.jpg'
import Toggle from './toggle'
import ToggleText from './toggle_text'
import Record from './record'
import AccountMenu from './menu'
export default function client_info(props){
    return(
        <div className='client-info-outer'>
            <div className='user-menu-outer'>
                <div className='user-menu-bar'>
                    <div style={{margin:'0.5rem'}}><AccountMenu /></div>
                </div>
            </div>
            <div className='client-info-page'>
                <div className='client-left-div'>
                    <div className='patient-outer-div'>
                        <div className='patient-img'>
                            <img src={patientImg} alt="" />
                        </div>
                        <div className='patient-details'>
                            <div className='patient-details-div'>
                                <div className='label-div'>Name:</div>
                                <div className='detail-fill'>Kevin</div>
                            </div>
                            <div className='patient-details-div'>
                                <div className='label-div'>Gender:</div>
                                <div className='detail-fill'>Male</div>
                            </div>
                            <div className='patient-details-div'>
                                <div className='label-div'>Age:</div>
                                <div className='detail-fill'>30</div>
                            </div>
                            <div className='patient-details-div'>
                                <div className='label-div'>Address:</div>
                                <div className='detail-fill'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='client-right-div'>
                    <div className='top-right-div'>
                        <div>
                            <ToggleText 
                                handleToggle = {props.handleToggle}
                            />
                        </div>
                    </div>
                    <div style={{marginTop:'0rem'}}>
                        {props.toggleState == 1 && <Record />}
                    </div>
                </div>
            </div>
        </div>
    )
}
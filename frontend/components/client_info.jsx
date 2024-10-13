import patientImg from '../src/assets/patient_img1.jpg'
import ToggleText from './toggle_text'
import Record from './record'
import AccountMenu from './account_menu'
import UserMenu from './user_menu'
import PatientTimeLine from './timeline'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import HomeIcon from '@mui/icons-material/Home';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';

export default function client_info(props){
    const icons = [<HomeIcon />, <DescriptionOutlinedIcon />, <FolderOpenOutlinedIcon />, <BiotechOutlinedIcon />]
    const labels = ['Overview', 'Notes', 'Documents', 'Labs']
    return(
        <div className='client-info-outer'>
            <div className='user-menu-outer'>
                <div className='user-menu-bar'>
                    <div>
                        <UserMenu 
                            menuIcons = {icons}
                            menuLabels = {labels}
                        />
                    </div>
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
                        </div>
                    </div>
                </div>
                <div className='client-right-div'>
                    <div className='top-right-div'>
                        <div>
                            <ToggleText 
                                handleToggle = {props.handleToggleState}
                            />
                        </div>
                    </div>
                    <div style={{marginTop:'0rem'}}>
                        {props.toggleState == 1 && <Record />}
                        {props.toggleState == 0 && <PatientTimeLine />}
                    </div>
                </div>
            </div>
        </div>
    )
}
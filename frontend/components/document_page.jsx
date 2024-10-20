import UserMenu from './user_menu';
import AccountMenu from './account_menu';
import Folder from './folder';
import Type from './document_select';
import File from './file';
export default function document(props){
    return(
        <div>
            <div>
                <div className='user-menu-outer'>
                    <div className='user-menu-bar'>
                        <div>
                        <UserMenu
                            menuIcons = {props.icons}
                            menuLabels = {props.labels}
                            listItem = {props.listItem}
                            handleChangeList = {props.handleChangeList} 
                        /></div>
                        <div style={{margin:'0.5rem'}}><AccountMenu /></div>
                    </div>
                </div>
            </div>
            <div className='folder-canvas'>
                <div>
                    <div className='document-title'>
                        <div style={{fontSize:'1.5rem'}}>My Drive</div>
                    </div>
                    <div>
                        <div><Type /></div>
                    </div>
                </div>
                <div>
                    <div className='folder-section'>
                        <div style={{fontSize:'0.8rem', fontWeight:'500'}}>Folders</div>
                        <div className='folder-components'>
                            <div><Folder /></div>
                            <div><Folder /></div>
                        </div>
                    </div>
                    <div className='folder-section'>
                        <div style={{fontSize:'0.8rem', fontWeight:'500'}}>Files</div>
                        <div className='file-components'>
                            <div><File /></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
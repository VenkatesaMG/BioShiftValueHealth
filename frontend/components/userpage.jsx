import AccountMenu from './menu'
import Search from './search'
import { useTypewriter } from 'react-simple-typewriter'

export default function userpage(){
    const [ text ] = useTypewriter({
        words: ['Hi George'],
        loop: 1,
        typeSpeed: 80,
        deleteSpeed: 80,
    });
    
    return(
        <div className='user-div'>
            <div className='user-menu-outer'>
                <div className='user-menu-bar'>
                    <div style={{margin:'0.5rem'}}><AccountMenu /></div>
                </div>
            </div>
            <div>
                <div>
                    <div className='components-outer-div'>
                        <div className='type-text'>{text}</div>
                        {/* <img src="src/assets/George.jpeg" alt="" /> */}
                        <Search/>
                    </div>
                </div>
            </div>
        </div>
    )
}
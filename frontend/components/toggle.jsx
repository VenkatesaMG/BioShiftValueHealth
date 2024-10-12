
export default function toggle(props){
    return(
        <div>
            <button className={`toggle-btn ${props.toggleState ? 'toggled' : ''}`} onClick={props.handleToggle}>
                <div className='thumb'></div>
            </button>
        </div>
    )
}
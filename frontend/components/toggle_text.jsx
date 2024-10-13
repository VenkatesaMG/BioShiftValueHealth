import React, { useState } from 'react';

function ToggleButton(props) {
    const [position, setPosition] = useState('left');

    const leftClick = () => {
        setPosition('left')
        props.handleToggle(1)
    };

    const rightClick = () => {
        setPosition('right')
        props.handleToggle(0)
    };

    
    return (
        <div className="form-box">
            <div className="button-box">
                <div
                    id="btn"
                    style={{
                        left: position === 'left' ? '0' : '10rem',
                        right: position === 'right' ? '0' : 'auto',
                    }}
                ></div>
                <button type="button" className={`toggle-btn ${position == 'left' ? 'toggle-color' : ''}`} onClick={leftClick}>
                    Patient History
                </button>
                <button type="button" className={`toggle-btn ${position == 'right' ? 'toggle-color' : ''}`} onClick={rightClick}>
                    Diagnose Patient
                </button>
            </div>
        </div>
    );
}

export default ToggleButton;

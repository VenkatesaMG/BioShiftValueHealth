import { useState } from 'react'
import { Checkbox, FormControlLabel, Button} from '@mui/material';
export default function signup(){
    return(
        <div className='signup-comp'>
            <div className='signup-form-div'>
                <div className='signup-right-div'>
                    <div className='signup-header'><h1>Create an account</h1></div>
                    <div className='signup-link'>Already have an account?<a href="/login">Log in</a></div>
                    <div>
                        <form action="">
                            <div className='signup-input'>
                                <input type="text" placeholder='First Name'/>
                                <input type="text" placeholder='Last Name'/>
                            </div>
                            <div className='email-input-div'>
                                <input type="email" placeholder='Email'/>
                            </div>
                            <div className='password-input-div'>
                                <input type="password" placeholder='Enter your password'/>
                            </div>
                            <div className='signup-checkbox-div'>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            sx={{
                                                color: 'white',
                                                '&.Mui-checked': {
                                                color: 'white',
                                                },
                                                '& .MuiSvgIcon-root': {
                                                borderRadius: '4px',
                                                },
                                            }}
                                        />
                                    }
                                    label= {
                                        <>I agree to the {' '}
                                            <a href="#" style={{ color:'#c7bee2', textDecoration: 'underline' }}>
                                            Terms & Conditions</a>
                                        </>
                                    }
                                />
                            </div>
                            <div>
                                <Button variant="contained" id='signup-button'>Create Account</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
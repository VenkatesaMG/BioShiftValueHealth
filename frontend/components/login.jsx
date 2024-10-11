import { useState } from 'react'
import { Checkbox, FormControlLabel, Button} from '@mui/material';
export default function login(){
    return(
        <div className='login-comp'>
            <div className='login-form-div'>
                <div className='login-right-div'>
                    <div className='login-header'><h1>Create an account</h1></div>
                    <div className='login-link'>Already have an account?<a href="">Log in</a></div>
                    <div>
                        <form action="">
                            <div className='login-input'>
                                <input type="text" placeholder='First Name'/>
                                <input type="text" placeholder='Last Name'/>
                            </div>
                            <div className='email-input-div'>
                                <input type="text" placeholder='Email'/>
                            </div>
                            <div className='password-input-div'>
                                <input type="password" placeholder='Enter your password'/>
                            </div>
                            <div className='login-checkbox-div'>
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
                                <Button variant="contained" id='create-account-button'>Create Account</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
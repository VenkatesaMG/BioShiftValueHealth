import {Button} from '@mui/material';
export default function login(){
    return(
        <div className='login-comp'>
                <div className='login-right-div'>
                    <div className='login-header'><h1>Welcome Back!</h1></div>
                        <form action="">
                            <div className='login-form-div'>
                                <div className='login-input-div'>
                                    <input type="email" placeholder='Username'/>
                                </div>
                                <div className='login-input-div'>
                                    <input type="password" placeholder='Enter your password'/>
                                </div>
                                <div className='forget-pass-div'><a href="">Forget Password?</a></div>
                                <div>
                                    <Button variant="contained" id='login-button'>Sign In</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        )
}
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStethoscope} from '@fortawesome/free-solid-svg-icons';
import {faCubes} from '@fortawesome/free-solid-svg-icons'; 
 
function Medical() {
    return (
        <div className='container'>
           <div className='left'>
                  <div className='heading'>
                    <h2 style={{color:"white",fontFamily:"sans-serif"}}><FontAwesomeIcon icon={faStethoscope}size="2rem"/>  MEDICAL</h2>
        </div>
            <div className='items'>
                    <h5 style={{margin:10}}><a href='/home' target='blank'>INTRO </a></h5> 
                    <h5 style={{margin:10}}><a href='' target='blank'>EXPERTISE</a></h5>
                        <h5 style={{margin:10}}><a href='' target='blank'>TECHNOLOGY </a></h5>
                        <h5 style={{margin:10}}><a href='' target=''>SERVICES</a></h5>
                        <h5 style={{margin:10}}><a href='' target=''>CONTACTS</a></h5> </div>  
                     
            </div>
            <div className='right'>
                <h2 style={{color:"black",fontFamily:"sans-serif",paddingLeft:"60px",paddingTop:"20px"}}><FontAwesomeIcon icon={faCubes} /> MENU </h2>
                <div className='content'>
                    <h2 style={{margin:10,fontSize:"20px",fontFamily:"sans-serif"}}>PURPOSE OF MYDNA</h2>
                    <h1 style={{margin:10,paddingTop:"30px",fontFamily:"serif"}}>Detailed Diagonastic</h1>
                <h1 style={{margin:10,fontFamily:"serif"}}>of your body </h1>
                <h6 style={{margin:10,paddingTop:"45px",fontFamily:"serif",font:"icon"}}>Health is the most important thing . So don't put  </h6>
                <h6 style={{margin:10,fontFamily:"serif",font:"icon"}}>it of later. Think about your future</h6>   
                </div>
            </div>
        </div>
    );
}

export default Medical;
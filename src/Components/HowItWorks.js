import React, { useState } from 'react';
import '../styles/howitworks.css';
import arrow from '../assets/arrow.png';
import { useNavigate } from 'react-router-dom';


const HowItWorks = () => {

    const navigate = useNavigate();
    return(<div className='howitworks'>

        <div className='howitworks-left'>
        <h1 style={{fontWeight:'bold' , fontSize:'2.5rem',color:'black'}}>How It Works</h1>
         <p style={{color:'black'}}>Ordering from Technology Auto Parts is simple and efficient. Follow these easy steps to get the parts you need, when you need them.</p>
         <button className="contact-button" style={{width:'140px' ,height:'45px' ,backgroundColor:'#1378CA',color:'white', fontWeight:'bold'}} onClick={() => navigate('/Contact')}>
                Learn More
                <  img src={arrow}  style={{width:'15px' , height:'15px'}}></img>
              </button>
        </div>
        <div className='howitworks-right'>

        </div>

    </div>);


}

export default HowItWorks;
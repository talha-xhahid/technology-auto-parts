import React from 'react';
import '../styles/presence.css';
import presence from '../assets/presence.png';
import arrow from "../assets/arrow.png";
import addressIcon from "../assets/addressIcon.png";
import { useNavigate } from 'react-router-dom';


const Presence= () => {
    const navigate = useNavigate();

    return(<div className='presence' style={{}}> 
    <h4 className="" style={{ color: "#000000", textAlign: "center" }}>
        Our | <span className="highlight">Presence</span> 
        </h4>
    <div className='presence-container'>
        <div className='presence-left'>
         <h1 style={{fontWeight:'bold' , fontSize:'2.5rem'}}>Serving Repair Shops &
         Mobile Mechanics</h1>
         <p>With a strong network and reliable delivery, Technology Auto Parts is the trusted supplier for auto professionals throughout the state.</p>
         <button className="contact-button" style={{width:'140px' ,height:'45px'}} onClick={() => navigate('/AboutUs')}>
                Learn More
                <  img src={arrow}  style={{width:'15px' , height:'15px'}}></img>
              </button>
        <div className='presence-address1'>
        <p style={{fontWeight:'bold' , display:'flex' ,alignItems:'center' ,marginTop:'3.5rem'}}>
              <img src={addressIcon}  style={{marginRight:'0.8rem'}} alt="Address" />   USA &nbsp; <span className="highlight"> Technology Auto Parts</span>
            </p>
        <p style={{color:'grey',fontSize:'0.8rem'}}>3101 Technology Drive STE 101, Plano, TX 75074, United States</p>
        <p><span style={{fontWeight:'bold'}}>Email us:</span> <u> mhadi@technologyautoparts.com</u></p>
        </div>
        </div>
        

        

    </div>
    
    
    
    </div>);


}

export default Presence;
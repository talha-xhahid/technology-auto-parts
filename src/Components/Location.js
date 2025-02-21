import React from 'react';
import '../styles/contactus.css';


const Location= () => {


    return(<div className='location' style={{padding:'2rem'}}> 
    <h1 style={{fontSize:'2rem',fontWeight:'bolder',marginBottom:'1rem'}}>Our Location</h1>
    <iframe style={{border:'0',borderRadius:'10px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.6484842147593!2d-96.67372669999999!3d33.01304179999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19a1d1d0c807%3A0x5b7524d0c190fb2d!2sTechnology%20Auto%20Parts!5e0!3m2!1sen!2s!4v1740175143131!5m2!1sen!2s" width="100%" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
    
    </div>);


}

export default Location;
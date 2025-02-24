import React from 'react';
import '../styles/benefits.css';
import arrow from "../assets/arrow.png";
import b1 from '../assets/v1.png';
import b2 from '../assets/v2.png';
import b3 from '../assets/v3.png';
import b4 from '../assets/v4.png';



const Benefits= () => {


    return(

<div className='benefits' style={{}}> 
    
    <div className='benefits-container'>
        <div className='benefits-left'>
        <h4 className="" style={{ color: "#000000", textAlign: "left" }}>
        Why Choose | <span className="highlight">Technology Auto Parts</span> 
        </h4>
         <h1 style={{fontWeight:'bold' , fontSize:'2.5rem'}}>Committed to Quality, Service, and Reliability</h1>
         <p>Lorem ipsum dolor sit amet consectetur. Egestas nec massa at in pellentesque nibh mi lacus aliquet. Hac elementum nunc enim luctus. Nisl fermentum rhoncus et nibh dictum sit. Fringilla rhoncus massa mollis feugiat felis eu rhoncus odio. A blandit et fusce augue porttitor arcu in vitae ac. Scelerisque rhoncus laoreet turpis egestas id augue venenatis.</p>
         <button className="contact-button" style={{width:'150px' ,height:'45px'}} onClick={() => window.open('/OrderNow')}>
         Order Now
                <  img src={arrow}  style={{width:'15px' , height:'15px'}}></img>
              </button>
        
        </div>
        <div className='benefits-right'>
        <div className='benefits-image'>
        <div className='benefits-row'>
            <div className='benefits-left'>
            <div
                  style={{
                    backgroundColor: "#ffffff",
                    border:"1px solid #E7E7E7",
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem",
                    justifyContent: "start",
                    borderRadius: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                    overflow: "hidden",
                    color:"#000000",
                    flexDirection: "column",
                    textAlign: "left",
                    
                  }}
                  className="product-card"
                >
                  <div style={{ width: "100%", overflow: "hidden" }}>
                    <h1 style={{ textAlign: "right", fontWeight: "600" }}>
                      
                    </h1>
                    <img
                      src={b1}
                      style={{
                        objectFit: "cover",
                        width: "50px",
                        height: "50px",
                        textAlign: "left",
                        
                      }}
                    ></img>
                  </div>
                  <div style={{ height: "130px" }} className='cardheight'>
                    <h3 className="product-name" style={{ width: "100%", marginTop: "1rem" , lineHeight: "1.2rem",marginBottom:"0.5rem", wordWrap: "break-word",whiteSpace: "normal"}}>
                    Exclusive B2B Service
                    </h3>
                    
                    <p className="product-content"
                      style={{
                        width: "100%",
                        fontSize: "0.8rem",
                        paddingBottom: "0.9rem",
                        marginBottom: "0.3rem",
                       
                      }
                    }

                    >
                      We cater exclusively to repair shops and mobile mechanics, ensuring specialized support and products tailored for professionals.
                    </p>
                  </div>
                </div>
            </div>
            <div className='benefits-right'>
            <div
                  style={{
                    backgroundColor: "#ffffff",
                    border:"1px solid #E7E7E7",
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem",
                    justifyContent: "start",
                    borderRadius: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                    overflow: "hidden",
                    color:"#000000",
                    flexDirection: "column",
                    textAlign: "left",
                    
                  }}
                  className="product-card"
                >
                  <div style={{ width: "100%", overflow: "hidden" }}>
                    <h1 style={{ textAlign: "right", fontWeight: "600" }}>
                      
                    </h1>
                    <img
                      src={b2}
                      style={{
                        objectFit: "cover",
                        width: "50px",
                        height: "50px",
                        textAlign: "left",
                        
                      }}
                    ></img>
                  </div>
                  <div style={{ height: "130px" }} className='cardheight'>
                    <h3 className="product-name" style={{ width: "100%", marginTop: "1rem" , lineHeight: "1.2rem",marginBottom:"0.5rem", wordWrap: "break-word",whiteSpace: "normal"}}>
                    Wide Range of Quality Parts
                    </h3>
                    <p className="product-content"
                      style={{
                        width: "100%",
                        fontSize: "0.8rem",
                        paddingBottom: "0.9rem",
                        marginBottom: "0.3rem",
                       
                      }
                    }

                    >
                      Our inventory includes top-notch electrical, suspension, cooling parts, and lubricants for both domestic and foreign vehicles.
                    </p>
                  </div>
                  
                </div>
                
            </div>
        </div>
        
        <div className='benefits-row'>
            <div className='benefits-left'>
            <div
                  style={{
                    backgroundColor: "#ffffff",
                    border:"1px solid #E7E7E7",
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem",
                    justifyContent: "start",
                    borderRadius: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                    overflow: "hidden",
                    color:"#000000",
                    flexDirection: "column",
                    textAlign: "left",
                    
                  }}
                  className="product-card"
                >
                  <div style={{ width: "100%", overflow: "hidden" }}>
                    <h1 style={{ textAlign: "right", fontWeight: "600" }}>
                      
                    </h1>
                    <img
                      src={b3}
                      style={{
                        objectFit: "cover",
                        width: "50px",
                        height: "50px",
                        textAlign: "left",
                        
                      }}
                    ></img>
                  </div>
                  <div style={{ height: "130px" }} className='cardheight'>
                    <h3 className="product-name" style={{ width: "100%", marginTop: "1rem" , lineHeight: "1.2rem",marginBottom:"0.5rem", wordWrap: "break-word",whiteSpace: "normal"}}>
                    Fast & Reliable Shipping
                    </h3>
                    <p className="product-content"
                      style={{
                        width: "100%",
                        fontSize: "0.8rem",
                        paddingBottom: "0.9rem",
                        marginBottom: "0.3rem",
                       
                      }
                    }

                    >
                      We understand the urgency of repairs, offering quick delivery to keep your business moving.
                    </p>
                  </div>
                </div>
            </div>
            <div className='benefits-right'>
            <div
                  style={{
                    backgroundColor: "#ffffff",
                    border:"1px solid #E7E7E7",
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem",
                    justifyContent: "start",
                    borderRadius: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                    overflow: "hidden",
                    color:"#000000",
                    flexDirection: "column",
                    textAlign: "left",
                    
                  }}
                  className="product-card"
                >
                  <div style={{ width: "100%", overflow: "hidden" }}>
                    <h1 style={{ textAlign: "right", fontWeight: "600" }}>
                      
                    </h1>
                    <img
                      src={b4}
                      style={{
                        objectFit: "cover",
                        width: "50px",
                        height: "50px",
                        textAlign: "left",
                        
                      }}
                    ></img>
                  </div>
                  <div style={{ height: "130px" }} className='cardheight'>
                    <h3 className="product-name" style={{ width: "100%", marginTop: "1rem" , lineHeight: "1.2rem",marginBottom:"0.5rem", wordWrap: "break-word",whiteSpace: "normal"}}>
                    Expert Support
                    </h3>
                    <p className="product-content"
                      style={{
                        width: "100%",
                        fontSize: "0.8rem",
                        paddingBottom: "0.9rem",
                        marginBottom: "0.3rem",
                       
                      }
                    }

                    >
                      Our team is knowledgeable and ready to assist with part selection and technical questions.
                    </p>
                  </div>
                  
                </div>
                
            </div>
        </div>


        
        
        </div>
        </div>

        

    </div>
    
    
    
    </div>
    
    
    
    
    );


}

export default Benefits;
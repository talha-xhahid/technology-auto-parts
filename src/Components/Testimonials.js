import React from "react";
import "../../src/styles/testimonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";

import bar from "../assets/bar.png";
import { useNavigate } from 'react-router-dom';

const Testimonials = () => {
  const navigate = useNavigate();
  const sliderSettings = {
    dotsClass: "slick-dots testimonials-custom-dots",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cards = [
    {
      name: "Mike David",
      company: "Needed a random little part that I could not find anywhere and Cris knew exactly what I was talking about. Told me to just head over and they will take care of me. I showed up and they could tell I was there for the part since I probably looked frustrated but they got me exactly what I needed. They were very cool and reasonable with the price and they saved the day. Thank you guys!!.",
      image:client1,
    },
    {
      name: "John Kames",
      company: "“I highly recommend Nijman Driving School for anyone looking to obtain their driver's license. My instructor was patient and knowledgeable, and the lessons were tailored to my individual needs. Thanks to Nijman Driving School, I passed my driving test on the first try and now feel confident and safe on the road.”",
      image: client2,
    },
    {
        name: "Mike David",
        company: "Needed a random little part that I could not find anywhere and Cris knew exactly what I was talking about. Told me to just head over and they will take care of me. I showed up and they could tell I was there for the part since I probably looked frustrated but they got me exactly what I needed. They were very cool and reasonable with the price and they saved the day. Thank you guys!!.",
        image:client1,
      },
      {
        name: "John Kames",
        company: "“I highly recommend Nijman Driving School for anyone looking to obtain their driver's license. My instructor was patient and knowledgeable, and the lessons were tailored to my individual needs. Thanks to Nijman Driving School, I passed my driving test on the first try and now feel confident and safe on the road.”",
        image: client2,
      },
  ];

  return (
    <div
      id="featuredproducts"
      className="testimonial mt-5 pb-5 "
      style={{ height: "auto" }}
    >
      <div className="testimonials-inner pt-4">
        <p
          className="mx-3"
          style={{ color: "#000000", textAlign: "center" ,marginBottom:'2rem', fontWeight:'bold', fontSize:'2.5rem'}}
        >
          What Our Clients Say
        </p>
        <img src={bar} style={{marginLeft:'-30px'}}></img>
        

        <div style={{ maxWidth: "90%", margin: "auto" ,marginTop:'2rem' }}>
          <Slider {...sliderSettings}>
            {cards.map((card) => (
              <div key={card.id} style={{ padding: "10px" }}>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #E7E7E7",
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem",
                    justifyContent: "start",
                    borderRadius: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                    
                    color: "#000000",
                    flexDirection: "row",
                    textAlign: "left",
                    maxWidth:'70%',
                    margin:'auto',
                    gap:'20px'
                    
                  }}
                  className="featureproduct-card testimonial-card"
                >
                  
                  <div style={{ width: "100%"  }} className="testimonials-img-container">
                    
                    <img
                      src={card.image}
                      style={{
                        
                       objectFit:'cover',
                        
                        objectPosition:"center center",
                        
                        
                        
                      }}
                      className="testimonials-img"
                    ></img>
                  </div>
                  <div style={{ minHeight: "100px" }} className="testimonials-content">
                    <h3
                      className="featureproduct-name"
                      style={{
                        width: "100%",
                        marginTop: "1rem",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {card.name}
                    </h3>
                    <p
                      className="featureproduct-content"
                      style={{
                        width: "100%",
                        fontSize: "0.8rem",
                        color:'white',
                        marginBottom: "0.3rem",
                      }}
                    >
                      {card.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

import React, { useState } from 'react';
import WebsiteLayout from './WebsiteLayout';
import AboutUsHeroSlider from './Components/AboutUsHeroSlider';
import WhyChooseUs from './Components/WhyChooseUs';
import WhatWeOffer from './Components/WhatWeOffer';
import BecomePartner from './Components/BecomePartner';
import AboutTexas from './Components/AboutTexas';
import MeetLeader from './Components/Leader';


const AboutUs = () => {


    return(<>
    <WebsiteLayout>
    <AboutUsHeroSlider/>
    <AboutTexas/>
    <WhyChooseUs/>
    <MeetLeader/>
    <WhatWeOffer/>
    <BecomePartner/>
    </WebsiteLayout>
    </>);


}

export default AboutUs;
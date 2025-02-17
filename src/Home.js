import React, { useState } from 'react';
import WebsiteLayout from './WebsiteLayout';
import HomeHeroSlider from './Components/HomeHeroSlider';
import OrderNowProducts from './Components/OrderNowProducts';
import Benefits from './Components/Benefits';
import AboutTexas from './Components/AboutTexas';
import Presence from './Components/Presence';
import BecomePartner from './Components/BecomePartner';
import HowItWorks from './Components/HowItWorks';

const Home = () => {


    return(<>
    <WebsiteLayout>
    <HomeHeroSlider/>
    <AboutTexas/>
    <Benefits/>
    <HowItWorks/>
    <OrderNowProducts/>
    <Presence/>
    <BecomePartner/>
    </WebsiteLayout>
    </>);


}

export default Home;
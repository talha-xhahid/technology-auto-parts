import React, { useState } from 'react';
import WebsiteLayout from './WebsiteLayout';
import OrderNowHeroSlider from './Components/OrderNowHeroSlider';
import HowItWorks from './Components/HowItWorks';
import TechnologyBenefits from './Components/TechnologyBenefits';
import FAQ from './Components/FAQ';
import FeatureProducts from './Components/FeaturedProducts';


const OrderNow = () => {


    return(<>
    <WebsiteLayout>
    <OrderNowHeroSlider/>
    <TechnologyBenefits/>
    <HowItWorks/>
    <FeatureProducts/>
    <FAQ/>
    </WebsiteLayout>
    </>);


}

export default OrderNow;
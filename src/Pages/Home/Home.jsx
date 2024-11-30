import React from 'react';
import FoodCard from '../../Card/FoodCard';
import FullDetailsFoodCard from '../../Card/FullDetailsFoodCard';
import { Helmet } from 'react-helmet';
import AboutSection from './Component/AboutSection';
import BannerSection from './Component/BannerSection';
import CommentSection from './Component/CommentSection';
import FoodShowSection from './Component/FoodShowSection';
const Home = () => {
    return (
        <div className='px-5 xl:px-0 max-w-[1140px] mx-auto'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>EcoUnity | Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <BannerSection></BannerSection>
            <AboutSection></AboutSection>
            <CommentSection></CommentSection>
            <FoodShowSection></FoodShowSection>
        </div>
    );
};

export default Home;
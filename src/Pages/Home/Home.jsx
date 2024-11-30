import React from 'react';
import FoodCard from '../../Card/FoodCard';
import FullDetailsFoodCard from '../../Card/FullDetailsFoodCard';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>EcoUnity | Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
    );
};

export default Home;
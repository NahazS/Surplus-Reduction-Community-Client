import React from 'react';
import Carousel from 'react-elastic-carousel';
import Banner from '../../../AllSlider/Banner';
const BannerSection = () => {
    const items = [
        {id: 1, imgLink: 'https://i.ibb.co.com/FbzD3b4/banner1.webp'},
        {id: 2, imgLink: 'https://i.ibb.co.com/G3vF80k/banner2.jpg'},
        {id: 3, imgLink: 'https://i.ibb.co.com/Zc3fx7D/banner3.jpg'},
        {id: 4, imgLink: 'https://i.ibb.co.com/Jq3ty3N/banner4.jpg'},
        {id: 5, imgLink: 'https://i.ibb.co.com/FbzD3b4/banner1.webp'}
    ]
    return (
        <div className='mt-[50px]'>
            <Carousel enableAutoPlay autoPlaySpeed={1500} showArrows={false}>
                {items.map((item) => (
                    <Banner key={item.id} imgLink={item.imgLink} />
                ))}
            </Carousel>
        </div>
    );
};

export default BannerSection;
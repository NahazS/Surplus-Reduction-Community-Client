import React from 'react';
import FoodCard from '../../../Card/FoodCard';
import { Link, useLoaderData } from 'react-router-dom';

const FoodShowSection = () => {
    const allFood = useLoaderData()
    const slicedFood = allFood.length > 5 ? allFood.slice(0, 5) : allFood;
    return (
        <div className='px-5 xl:px-0 max-w-[1140px] mx-auto mt-[100px] flex flex-col items-center gap-y-5'>
            <h1 className="text-primary text-[40px] font-bold mb-[30px] text-center">Featured Foods</h1>
            <div className='mt-[30px] place-items-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mx-auto'>
                {
                    slicedFood.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
            <Link to={'/availableFood'}><button className='btn btn-primary mt-10 px-[100px]'>See more</button></Link>
        </div>
    );
};

export default FoodShowSection;
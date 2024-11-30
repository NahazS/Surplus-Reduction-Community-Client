import React, { useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodCard from '../../Card/FoodCard';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet';

const AvailableFoods = () => {
    const allFood = useLoaderData()
    const [showFood, setShowFood] = useState(allFood)
    const searchRef = useRef(null)
    const sortRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        const search = searchRef.current.value
        console.log(search)
        if(search)
        {
            fetch(`http://localhost:3000/availableFood?foodName=${search}`)
            .then(res => res.json())
            .then(data => setShowFood(data))
        } else{
            setShowFood(allFood)
        }
    }
    if(!showFood){
        return <Loading></Loading>
    }
    const handleSort = () => {
        const sortType = sortRef.current.value
        let sort = []
        if(sortType === "Expire Date")
        {
            sort = [...showFood].sort((food1,food2) => new Date(food1.expDate) - new Date(food2.expDate))
        }
        else {
            sort = [...showFood].sort((food1,food2) => new Date(food1.addedTime) - new Date(food2.addedTime))
        }
        setShowFood(sort)
    }
    return (
        <div className='min-h-screen px-5 xl:px-0 max-w-[1140px] mx-auto mb-[148px]'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>EcoUnity | AvailableFood</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='text-center bg-[#f3f7fc] shadow-lg w-full h-fit md:h-[200px] flex flex-col items-center justify-center rounded-[16px] mt-[30px]'>
                <h1 className="text-[#575d90] text-[40px] font-bold">Search for Food</h1>
                <div className='flex flex-col gap-y-2 md:flex-row shadow-md w-full md:w-1/2'>
                    <div className='w-full md:w-[150px] p-4 md:p-0'>
                        <select onChange={handleSort} ref={sortRef} className="select bg-white rounded-r-none w-full border-none focus:outline-none">
                          <option disabled selected>Sort</option>
                          <option>Added first</option>
                          <option>Expire Date</option>
                        </select>
                    </div>
                    <hr />
                    {/* for bigger device */}
                    <div className='w-[600px] hidden md:flex'>
                        <input ref={searchRef} name='name' type="text" placeholder="Name" className="input input-bordered bg-white border-none w-full rounded-none focus:outline-none" required
                        />
                    </div>
                    <button onClick={handleSubmit} className='hidden md:flex btn btn-primary rounded-l-none'>Search</button>

                    {/* for small device */}
                    <div className='flex md:hidden p-4 w-full'>
                        <div className='w-full'>
                            <input ref={searchRef} name='name' type="text" placeholder="Name" className="input input-bordered bg-white border-none w-full rounded-none focus:outline-none" required
                            />
                        </div>
                        <button onClick={handleSubmit} className='btn btn-primary rounded-l-none'>Search</button>
                    </div>
                </div>
            </div>
            <div className='mt-[30px] place-items-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mx-auto'>
                {
                    showFood.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;
import React, { useEffect, useRef, useState } from 'react';
import FoodCard from '../../Card/FoodCard';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet';

const AvailableFoods = () => {

    // pagination 
    const [allFood, setAllFood] = useState([])
    const [showFood, setShowFood] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const limit = 6

    const fetchData = async (page = 1) => {
        const res = await fetch(`https://food-sharing-community-server-theta.vercel.app/availableFood?page=${page}&limit=${limit}`);
        const data = await res.json();
        setAllFood(data.data);
        setShowFood(data.data);
        console.log(data)
        setCurrentPage(data.currentPage);
        setTotalPages(data.totalPages);
    };
    useEffect(()=> {
        fetchData(currentPage)
    },[currentPage])

    const handlePageChange = (page) => {
        if(page >= 1 && page <= totalPages)
        {
            setCurrentPage(page)
        }
    }


    const searchRef = useRef(null)
    const handleSearch = async (e) => {
        e.preventDefault()
        const search = searchRef.current.value
        if(search)
        {
            const res = await fetch(`https://food-sharing-community-server-theta.vercel.app/availableFood?foodName=${search}`)
            const data = await res.json()
            setShowFood(data)
            console.log(data)
        } else{
            setShowFood(allFood)
        }
    }
    const sortRef = useRef()
    const handleSort = () => {
        const sortType = sortRef.current.value
        let sorted = []
        if(sortType === "Expire Date")
        {
            sorted = [...showFood].sort((food1,food2) => new Date(food1.expDate) - new Date(food2.expDate))
        }
        else {
            sorted = [...showFood].sort((food1,food2) => new Date(food1.addedTime) - new Date(food2.addedTime))
        }
        setShowFood(sorted)
    }
    if(!allFood || allFood.length === 0){
        return <Loading></Loading>
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
                    <button onClick={handleSearch} className='hidden md:flex btn btn-primary rounded-l-none'>Search</button>

                    {/* for small device */}
                    {/* <div className='flex md:hidden p-4 w-full'>
                        <div className='w-full'>
                            <input ref={searchRef} name='name' type="text" placeholder="Name" className="input input-bordered bg-white border-none w-full rounded-none focus:outline-none" required
                            />
                        </div>
                        <button onClick={handleSearch} className='btn btn-primary rounded-l-none'>Search</button>
                    </div> */}
                </div>
            </div>
            <div className='mt-[30px] place-items-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mx-auto'>
                {
                    showFood.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
            <div className="flex justify-center mt-5 gap-2">
                <button className="btn" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                {[...Array(totalPages)].map((_, index) => (
                    <button key={index} className={`btn ${currentPage === index + 1 ? 'btn-primary' : ''}`} onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                    </button>
                ))}
                <button className="btn" disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            </div>
        </div>
    );
};

export default AvailableFoods;
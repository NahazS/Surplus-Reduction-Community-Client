import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import RequestCard from '../../Card/RequestCard';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const MyFoodRequest = () => {
    const {user} = useContext(AuthContext)
    const [error, setError] = useState(null);
    const [requestFood, setRequestFood] = useState(null)
    useEffect(() => {
        window.scrollTo(0, 0);
        fetch(`https://food-sharing-community-server-theta.vercel.app/requestFood?requestUserEmail=${user.email}`, {credentials: 'include'})
        .then(res => res.json())
        .then(data => {
            if(data.length > 0)
            {
                setRequestFood(data)
            } else{
                setRequestFood([])
            }
        })
        .catch(err => {
            console.log(err)
            setError(err.message)
        })
    },[])
    if(error){
        return <Error></Error>
    }
    if (!requestFood) {
        return <Loading></Loading>; 
    }
    return (
        <div className='px-5 xl:px-0 max-w-[1140px] mx-auto mb-[148px] min-h-screen'>
            <Helmet>
              <meta charSet="utf-8" />
              <title>EcoUnity | My Food Request</title>
              <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='text-center bg-[#f3f7fc] shadow-lg w-full md:h-[200px] flex flex-col items-center justify-center rounded-[16px] mt-[30px]'>
                <h1 className="text-[#575d90] text-[40px] font-bold">My Food Request</h1>
            </div>
            <div className=''>
                <div className="overflow-x-auto">
                    <table className='w-full'>
                        {/* head */}
                        <thead className="table mt-[130px] w-full flex justify-between">
                        <tr className='flex justify-between'>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                requestFood.map(food => <RequestCard key={food._id} food={food}></RequestCard>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={`text-center ${requestFood.length > 0 ? 'hidden' : 'flex flex-col'}`}>
                <p className='text-xl mb-4'>There are currently no items available on the Food Request page. Feel free to add some if you’d like to Request!</p>
                <Link to={'/availableFood'}><button className='btn btn-primary'>Request Food</button></Link>
            </div>
        </div>
    );
};

export default MyFoodRequest;
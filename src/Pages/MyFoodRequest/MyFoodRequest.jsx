import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import RequestCard from '../../Card/RequestCard';

const MyFoodRequest = () => {
    const {user} = useContext(AuthContext)
    const [requestFood, setRequestFood] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/requestFood?requestUserEmail=${user.email}`)
        .then(res => res.json())
        .then(data => setRequestFood(data))
    },[])
    return (
        <div>
            <div className='px-5 xl:px-0 max-w-[1140px] mx-auto'>
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
        </div>
    );
};

export default MyFoodRequest;
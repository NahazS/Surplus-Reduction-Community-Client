import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import UpdateMyFoodCard from '../../Card/UpdateMyFoodCard';

const MyFood = () => {
    const {user} = useContext(AuthContext)
    const [addedFood, setAddedFood] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/availableFood?donatorEmail=${user.email}`)
        .then(res => res.json())
        .then(data => setAddedFood(data))
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
                                addedFood.map(food => <UpdateMyFoodCard key={food._id} food={food}></UpdateMyFoodCard>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyFood;
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import UpdateMyFoodCard from '../../Card/UpdateMyFoodCard';
import axios from 'axios';
import Loading from '../Loading/Loading';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const MyFood = () => {
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const [error, setError] = useState(null);
    const [addedFood, setAddedFood] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:3000/availableFood?donatorEmail=${user.email}`)
        .then(res => res.json())
        .then(data => {
            if(data.length > 0)
            {
                setAddedFood(data)
            } else{
                setAddedFood([])
            }
        })
        .catch(err => {
            console.log(err.message)
            setError(err.message)
        })
    },[])
    if(error)
    {
        return <Error></Error>
    }
    if(!addedFood)
    {
        return <Loading></Loading>
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            background: "#ebf0f8",
            confirmButtonColor: "#404680",
            cancelButtonColor: "#575d90",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axios.delete(`http://localhost:3000/availableFood/${id}`)
              .then(res => {
                if(res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    window.location.reload();

                }
              })
            }
          });
    }
    return (
        <div>
            <Helmet>
              <meta charSet="utf-8" />
              <title>EcoUnity | My Food</title>
              <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
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
                                addedFood.map(food => <UpdateMyFoodCard key={food._id} food={food} handleDelete={handleDelete}></UpdateMyFoodCard>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyFood;
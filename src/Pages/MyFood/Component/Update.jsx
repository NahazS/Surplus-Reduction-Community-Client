import React, { useContext } from "react";
import axios from "axios";
import moment from 'moment';
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
const Update = () => {
    const food = useLoaderData()
    const navigate = useNavigate()
    const {_id,donatorName, donatorEmail, donatorPhoto, foodName, foodImage, quantity, location, expDate, status, notes, addedTime} = food
    console.log(_id)
    const handleSubmit = (e) => {
        e.preventDefault()
        const foodName = e.target.foodName.value
        const foodImage = e.target.foodImage.value
        const quantity = e.target.quantity.value
        const location = e.target.location.value
        const expDate  = e.target.expDate.value
        const status = e.target.status.value
        const notes = e.target.notes.value
        const addedTime = moment().format('L,LTS')
        axios.put(`http://localhost:3000/availableFood/${_id}`,{
          foodName,
          foodImage,
          quantity,
          location,
          expDate,
          status,
          notes,
          addedTime
        })
        .then(res => {
            if(res.data.modifiedCount)
            {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    background: "#ffffff",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate('/myFood')
            }
        })
    }
    return (
        <div>
            <div className="hero-content mx-auto pl-0">
                <div className="card bg-[#f2f7fd] w-full sm:w-[711px] h-[700px] px-[30px] py-[15px] md:py-[35px] md:px-[65px] shrink-0 rounded-xl text-center overflow-auto">
                    <h1 className="text-primary text-[40px] font-bold mb-[30px]">Update Food</h1>
                    <form onSubmit={handleSubmit}>
                      <div className="form-control flex flex-col sm:flex-row gap-4">
                        <div className='w-full sm:w-1/2'>
                          <label className="label"><span className="label-text text-[#4d4d4d]">Name</span></label>
                          <input name='name' type="text" placeholder="Donator Name" className="input input-bordered bg-white border-none shadow-md w-full" required defaultValue={donatorName} disabled
                          />
                        </div>
                        <div className='w-full sm:w-1/2'>
                          <label className="label"><span className="label-text text-[#4d4d4d]">Email</span></label>
                          <input name='email' type="email" placeholder="Donator Email" className="input input-bordered bg-white border-none shadow-md w-full" required defaultValue={donatorEmail} disabled
                          />
                        </div>
                      </div>
                      <div className="form-control">
                        <label className="label"><span className="label-text text-[#4d4d4d]">Photo</span></label>
                        <input name='photo' type='text' placeholder="Donator photo url" className="input input-bordered bg-white border-none shadow-md" required defaultValue={donatorPhoto} disabled
                        />
                      </div>
                      <p className='text-primary my-[30px]'>--------------- Food Details ---------------</p>
                      <div className="form-control flex flex-col sm:flex-row gap-4">
                        <div className='w-full sm:w-1/2'>
                          <label className="label"><span className="label-text text-[#4d4d4d]">Food Name</span></label>
                          <input name='foodName'    type="text" placeholder="Food Name" className="input input-bordered bg-white border-none shadow-md w-full" required defaultValue={foodName}
                          />
                        </div>
                        <div className='w-full sm:w-1/2'>
                          <label className="label"><span className="label-text text-[#4d4d4d]">Food Image</span></label>
                          <input name='foodImage'    type="text" placeholder="Food Image" className="input input-bordered bg-white border-none shadow-md w-full" required defaultValue={foodImage}
                          />
                        </div>
                      </div>
                      <div className="form-control flex flex-col sm:flex-row gap-4">
                        <div className='w-full sm:w-1/2'>
                          <label className="label"><span className="label-text text-[#4d4d4d]">Quantity</span></label>
                          <input name='quantity'    type="text" placeholder="Food Quantity" className="input input-bordered bg-white border-none shadow-md w-full" required defaultValue={quantity}
                          />
                        </div>
                        <div className='w-full sm:w-1/2'>
                          <label className="label"><span className="label-text text-[#4d4d4d]">Pickup Location</span></label>
                          <input name='location'    type="text" placeholder="Pickup Location" className="input input-bordered bg-white border-none shadow-md w-full" required defaultValue={location}
                          />
                        </div>
                      </div>
                      <div className="form-control flex flex-col sm:flex-row gap-4">
                        <div className='w-full sm:w-1/2'>
                          <label className="label"><span className="label-text text-[#4d4d4d]">Expired Date</span></label>
                          <input name='expDate'    type="date" placeholder="Expired Date/Time" className="input input-bordered bg-white border-none shadow-md w-full" required defaultValue={expDate}
                          />
                        </div>
                        <div className='w-full sm:w-1/2'>
                          <label className="label"><span className="label-text text-[#4d4d4d]">Food Status</span></label>
                          <select name='status' type="text"    className="input input-bordered bg-white border-none shadow-md w-full" defaultValue={'available'} required>
                              <option selected>available</option>
                              <option>Not available</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-control">
                        <label className="label"><span className="label-text text-[#4d4d4d]">Additional Notes</span></label>
                        <textarea name='notes'    type='text' placeholder="Write some additional notes if you want" className="input input-bordered bg-white border-none shadow-md pt-[10px] min-h-[100px] max-h-[200px]" defaultValue={notes}
                        />
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn bg-primary text-white hover:text-black">Update</button>
                      </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;
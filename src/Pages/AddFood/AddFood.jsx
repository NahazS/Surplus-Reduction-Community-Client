import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import moment from 'moment';

const AddFood = () => {
    const {user, loading} = useContext(AuthContext)
    const [foodName, setFoodName] = useState('Food Name')
    const [foodImage, setFoodImage] = useState('/foodPhotoUpload.png')
    const [quantity, setQuantity] = useState('1-2')
    const [location, setLocation] = useState('Pickup Location')
    const [expDate, setExpDate] = useState('Expired Date/Time')
    const [status, setStatus] = useState('available')
    const [notes, setNotes] = useState('')
    const handleInputChange = (e) => {
        const {name, value} = e.target
        if(name === "foodName" ) setFoodName(value)
        if(name === "foodImage" ) setFoodImage(value)
        if(name === "quantity" ) setQuantity(value)
        if(name === "location" ) setLocation(value)
        if(name === "expDate" ) setExpDate(value)
        if(name === "notes" ) setNotes(value)
        if(name === "status" ) setStatus(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/availableFood', {
            donatorName:user.displayName, donatorEmail:user.email, donatorPhoto:user.photoURL, foodName, foodImage, quantity, location, expDate, status, notes, addedTime:moment().format()
        })
        e.target.reset()
    }
    return (
        <div>
            <div className="min-h-screen px-5 xl:px-0 max-w-[1140px] mx-auto mb-[148px] flex flex-col xl:flex-row justify-between items-start">
                <div className="hero-content mx-auto pl-0">
                    <div className="card bg-[#f2f7fd] bg-opacity-60  w-full sm:w-[711px] h-fit px-[30px] py-[15px] md:py-[35px] md:px-[65px] shrink-0 rounded-xl text-center">
                      <h1 className="text-primary text-[40px] font-bold mb-[30px]">Add Food</h1>
                      <form onSubmit={handleSubmit}>
                        <div className="form-control flex flex-col sm:flex-row gap-4">
                          <div className='w-full sm:w-1/2'>
                            <label className="label"><span className="label-text text-[#4d4d4d]">Name</span></label>
                            <input name='name' type="text" placeholder="Donator Name" className="input input-bordered bg-white border-none shadow-md w-full" required defaultValue={user.displayName} disabled
                            />
                          </div>
                          <div className='w-full sm:w-1/2'>
                            <label className="label"><span className="label-text text-[#4d4d4d]">Email</span></label>
                            <input name='email' type="email" placeholder="Donator Email" className="input input-bordered bg-white border-none shadow-md w-full" required defaultValue={user.email} disabled
                            />
                          </div>
                        </div>
                        <div className="form-control">
                          <label className="label"><span className="label-text text-[#4d4d4d]">Photo</span></label>
                          <input name='photo' type='text' placeholder="Donator photo url" className="input input-bordered bg-white border-none shadow-md" required defaultValue={user.photoURL} disabled
                          />
                        </div>
                        <p className='text-primary my-[30px]'>--------------- Food Details ---------------</p>
                        <div className="form-control flex flex-col sm:flex-row gap-4">
                          <div className='w-full sm:w-1/2'>
                            <label className="label"><span className="label-text text-[#4d4d4d]">Food Name</span></label>
                            <input name='foodName' onInput={handleInputChange} type="text" placeholder="Food Name" className="input input-bordered bg-white border-none shadow-md w-full" required
                            />
                          </div>
                          <div className='w-full sm:w-1/2'>
                            <label className="label"><span className="label-text text-[#4d4d4d]">Food Image</span></label>
                            <input name='foodImage' onInput={handleInputChange} type="text" placeholder="Food Image" className="input input-bordered bg-white border-none shadow-md w-full" required
                            />
                          </div>
                        </div>
                        <div className="form-control flex flex-col sm:flex-row gap-4">
                          <div className='w-full sm:w-1/2'>
                            <label className="label"><span className="label-text text-[#4d4d4d]">Quantity</span></label>
                            <input name='quantity' onInput={handleInputChange} type="text" placeholder="Food Quantity" className="input input-bordered bg-white border-none shadow-md w-full" required
                            />
                          </div>
                          <div className='w-full sm:w-1/2'>
                            <label className="label"><span className="label-text text-[#4d4d4d]">Pickup Location</span></label>
                            <input name='location' onInput={handleInputChange} type="text" placeholder="Pickup Location" className="input input-bordered bg-white border-none shadow-md w-full" required
                            />
                          </div>
                        </div>
                        <div className="form-control flex flex-col sm:flex-row gap-4">
                          <div className='w-full sm:w-1/2'>
                            <label className="label"><span className="label-text text-[#4d4d4d]">Expired Date</span></label>
                            <input name='expDate' onInput={handleInputChange} type="date" placeholder="Expired Date/Time" className="input input-bordered bg-white border-none shadow-md w-full" required
                            />
                          </div>
                          <div className='w-full sm:w-1/2'>
                            <label className="label"><span className="label-text text-[#4d4d4d]">Food Status</span></label>
                            <select name='status' type="text" onInput={handleInputChange} className="input input-bordered bg-white border-none shadow-md w-full" defaultValue={'available'} required>
                                <option selected>available</option>
                                <option>Not available</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-control">
                          <label className="label"><span className="label-text text-[#4d4d4d]">Additional Notes</span></label>
                          <textarea name='notes' onInput={handleInputChange} type='text' placeholder="Write some additional notes if you want" className="input input-bordered bg-white border-none shadow-md pt-[10px] min-h-[100px] max-h-[200px]"
                          />
                        </div>
                        <div className="form-control mt-6">
                          <button className="btn bg-primary text-white hover:text-black">Sign Up</button>
                        </div>
                      </form>
                    </div>
                </div>
                <div className='pt-[50px] max-w-[350px] mx-auto'>
                <h1 className="text-primary text-[40px] font-bold text-center">Preview post</h1>
                <p className='text-black text-opacity-50 text-lg text-center mb-[30px]'>Your post will be displayed like this.</p>
                    <div className="min-w-[350px] h-fit mx-auto rounded-xl shadow-md bg-[#f2f7fd] p-6 border border-gray-200">
                      <div className="relative overflow-hidden rounded-lg h-48 mb-4">
                        <img className="w-full h-full object-cover" src={foodImage}  alt="Food Image" />
                        <span className="absolute top-2 left-2 bg-[#404680] text-white font-medium px-3 py-1 rounded-full text-xs shadow-md">{status}</span>
                      </div>

                      <div>
                        <h2 className="text-2xl font-bold text-[#404680] mb-2">{foodName}</h2>

                        <div className="flex items-center mb-3">
                          <img className="w-12 h-12 rounded-full border-2 border-[#404680]" src={user.photoURL} alt="Donator" />
                          <div className="ml-4">
                            <p className="text-sm text-[#404680] font-semibold">{user.displayName}</p>
                            <p className="text-sm text-gray-500">{location}</p>
                          </div>
                        </div>

                        <div className="text-sm text-[#404680] space-y-1 mb-4">
                          <p><span className="font-semibold">Serves:</span> {quantity} people</p>
                          <p><span className="font-semibold">Expires:</span> {expDate}</p>
                          <p className='max-w-[300px] overflow-hidden'><span className="font-semibold">Notes:</span>{notes}</p>
                        </div>

                        <div className="text-center">
                          <button className="w-full bg-[#404680] hover:bg-[#323464] text-white font-medium py-2 px-4 rounded-lg shadow-md transition">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFood;
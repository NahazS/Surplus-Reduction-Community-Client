import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const FoodCard = ({food}) => {
    const {foodName, foodImage, quantity, location, expDate, status, notes, donatorName, donatorPhoto, _id} = food
    return (
        <div className='group overflow-hidden cursor-pointer'>
        <div className="w-[270px] h-[500px] sm:w-[350px] mx-auto rounded-xl shadow-md bg-[#f2f7fd] p-6 border border-gray-200">
          <div className="relative overflow-hidden rounded-lg h-48 mb-4">
            <img className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110" src={foodImage} alt="Food Image" />
            <span className="absolute top-2 left-2 bg-[#404680] text-white font-medium px-3 py-1 rounded-full text-xs shadow-md">{status}</span>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#404680] mb-2">{foodName}</h2>

            <div className="flex items-center mb-3">
              <img className="w-12 h-12 rounded-full border-2 border-[#404680]" src={donatorPhoto} alt="Donator" />
              <div className="ml-4">
                <p className="text-sm text-[#404680] font-semibold">{donatorName}</p>
                <p className="text-sm text-gray-500">{location}</p>
              </div>
            </div>

            <div className="text-sm text-[#404680] space-y-1 mb-4">
              <p><span className="font-semibold">Serves:</span> {quantity} people</p>
              <p><span className="font-semibold">Expires:</span>{expDate}</p>
              <p><span className="font-semibold">Notes:</span>{notes}</p>
            </div>

            <div className="text-center">
              <Link to={`/availableFood/${_id}`}><button disabled={status !== 'available'} className="w-full bg-[#404680] hover:bg-[#323464] text-white font-medium py-2 px-4 rounded-lg shadow-md transition">
                View Details
              </button></Link>
            </div>
          </div>
        </div>
    </div>
    );
};

export default FoodCard;
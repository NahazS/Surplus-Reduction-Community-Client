import React from "react";

const UpdateMyFoodCard = ({food}) => {
  const {donatorName, donatorEmail, donatorPhoto, foodName, foodImage, quantity, location, expDate, status, notes, addedTime} = food
  return (
    <div>
      <tr className="bg-[#f3f7fc] bg-opacity-50 flex flex-col sm:flex-row justify-between mb-[28px] items-center px-4 py-4 h-fit w-full rounded-lg shadow-md hover:shadow-lg">
        <th className="">
          <div className="avatar">
            <div className="w-20 md:w-24 lg:w-32 rounded">
              <img src={foodImage} 
              />
            </div>
          </div>
        </th>
        <td>
            <div className="flex flex-col text-center sm:text-left">
                <h1 className="text-xl text-[#444] font-semibold">Foot Details</h1>
                <p className="flex flex-col sm:flex-row">Food Name: <span>{foodName}</span></p>
                <p className="flex flex-col sm:flex-row">Exp Date:  <span>{expDate}</span></p>
                <p className="flex flex-col sm:flex-row">Pickup location:  <span>{location}</span></p>
            </div>
        </td>
        <td>
            <div className="flex flex-col text-center sm:text-left">
                <h1 className="text-xl text-[#444] font-semibold">Donator Details </h1>
                <p className="flex flex-col sm:flex-row">Name: <span>{donatorName}</span></p>
                <p className="flex flex-col sm:flex-row">Email: <span>{donatorEmail}</span></p>
                <p className="flex flex-col sm:flex-row">Added Time: <span>{addedTime}</span></p>
            </div>
        </td>
        <td>
          <button className="btn bg-primary text-white hover:text-black">Update</button>
          <button className="btn bg-primary text-white hover:text-black">Delete</button>
        </td>
      </tr>
    </div>
  );
};

export default UpdateMyFoodCard.jsx;
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import moment from 'moment';
import axios from 'axios';
import { motion, useScroll } from "framer-motion";
import SignIn from '../Pages/Login/SignIn';
import Swal from 'sweetalert2'
const FullDetailsFoodCard = () => {
    const [disableRequest, setDisableRequest] = useState(false)
    const {id} = useParams()
    const navigate = useNavigate()
    const { scrollYProgress } = useScroll();
    const item = useLoaderData()
    const {user} = useContext(AuthContext)
    const {donatorName, donatorEmail, foodName, foodImage, quantity, location, expDate, status} = item
    useEffect(() => {
      window.scrollTo(0, 0);
      if (user.email === donatorEmail) {
          setDisableRequest(true);
      }
    }, [user.email, donatorEmail]);
    const handleRequest = (e) => {
        e.preventDefault()
        const notes = e.target.notes.value
        const requestDate = e.target.requestDate.value
        axios.post('https://food-sharing-community-server-theta.vercel.app/requestFood',{
            donatorName,donatorEmail,foodName,foodImage,quantity,location,expDate,requestUserName:user.displayName, requestUserEmail:user.email, requestNote:notes, requestDate
        })
        .then(res => {
            if(res.status)
            {
                axios.delete(`https://food-sharing-community-server-theta.vercel.app/availableFood/${id}`)
                .then(res => {
                    console.log(res)
                    if(res.data.deletedCount > 0)
                    {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Add Food Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/myFoodRequest')
                    }
                })
            }
        })
    }
    if(!user)
    {
        return(
            <SignIn></SignIn>
        )
    }
    return (
        <div className="group overflow-hidden cursor-pointer w-full md:w-[650px] px-5 md:px-0 mx-auto my-[100px]">
          <div className="rounded-xl shadow-md bg-[#f2f7fd] p-6 border border-gray-200 ">
            <div className="relative overflow-hidden h-48 mb-4 flex justify-center">
              <img
                className="w-[100%] h-full object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-110"
                src={foodImage}
                alt="Food Image"
              />
              <span className={`absolute top-2 left-2 ${status === 'available' ? 'bg-[#404680]' : 'bg-red-500'} text-white font-medium px-3 py-1 rounded-full text-xs shadow-md`}>
                {status}
              </span>
            </div>

            <div className="flex flex-row sm:gap-6 items-center justify-between">
              <div className="p-6 border-b border-gray-200 text-left w-1/2">
                  <h2 className="text-[20px] sm:text-[24px] font-bold text-[#404680] mb-4">Donor Information</h2>
                  <div className="text-lg text-[#404680] space-y-2 mb-4">
                    <p className='flex flex-col sm:flex-row'><span className="font-semibold">Donar Name:</span> {donatorName}</p>
                    <p className='flex flex-col'><span className="font-semibold">Food Pickup Location:</span> {location} servings</p>
                  </div>
              </div>

              <div className="flex-1 w-1/2">
                <h2 className="text-[20px] sm:text-[24px] font-bold text-[#404680] mb-4">Food Details</h2>
                <div className="text-lg text-[#404680] space-y-2 mb-4">
                  <p className='flex flex-col sm:flex-row'><span className="font-semibold">Food Name:</span> {foodName}</p>
                  <p className='flex flex-col sm:flex-row'><span className="font-semibold">Serves:</span> {quantity} servings</p>
                  <p className='flex flex-col sm:flex-row'><span className="font-semibold">Expires:</span> {expDate}</p>
                </div>
              </div>
            </div>
            <button disabled={status !== "available"} className="w-full bg-[#404680] hover:bg-[#323464] text-white font-medium py-2 px-4 rounded-lg shadow-md transition" onClick={()=>document.getElementById('my_modal_2').showModal()}>{status === "available" ? 'Request Food' : 'Not Available' }</button>
            <dialog id="my_modal_2" className="modal" onClick={(e) => { if (e.target === document.getElementById('my_modal_2')) document.getElementById('my_modal_2').close() }}>
            <div className="hero-content mx-auto">
                    <div className="card bg-[#f2f7fd] w-full sm:w-[711px] h-[700px] overflow-scroll px-[30px] py-[15px] md:py-[35px] md:px-[65px] shrink-0 rounded-xl text-center">
                      <motion.div  className="progress-bar"  style={{ scaleX: scrollYProgress }}/>
                      <h1 className="text-primary text-[40px] font-bold mb-[10px]">Request Food</h1>
                      <form onSubmit={handleRequest}>
                        <p className='text-primary my-[10px]'>--------------- Food Details ---------------</p>
                        <div className="form-control flex flex-col sm:flex-row gap-4">
                          <div className='w-full sm:w-1/2'>
                            <label className="label"><span className="label-text text-[#4d4d4d]">Food Name</span></label>
                            <input name='foodName'   type="text" className="input input-bordered bg-white border-none shadow-md w-full" required defaultValue={foodName} disabled
                            />
                          </div>
                          <div className='w-full sm:w-1/2'>
                            <label className="label"><span className="label-text text-[#4d4d4d]">Food Image</span></label>
                            <input name='foodImage'   type="text" className="input input-bordered bg-white border-none shadow-md w-full" required defaultValue={foodImage} disabled
                            />
                          </div>
                        </div>
                        <div className="form-control flex flex-col sm:flex-row gap-4">
                          <div className='w-full sm:w-1/2'>
                            <label className="label"><span className="label-text text-[#4d4d4d]">Expired Date</span></label>
                            <input name='expDate'   type="date" className="input input-bordered bg-white border-none shadow-md w-full" required defaultValue={expDate} disabled
                            />
                          </div>
                          <div className='w-full sm:w-1/2'>
                            <label className="label"><span className="label-text text-[#4d4d4d]">Pickup Location</span></label>
                            <input name='location'   type="text" className="input input-bordered bg-white border-none shadow-md w-full" required defaultValue={location} disabled
                            />
                          </div>
                        </div>
                        <p className='text-primary my-[10px]'>--------------- Donar Details ---------------</p>
                        <div className="form-control flex flex-col sm:flex-row gap-4">
                          <div className='w-full sm:w-1/2'>
                            <label className="label"><span className="label-text text-[#4d4d4d]">Donar Name</span></label>
                            <input name='donarName'   type="text" className="input input-bordered bg-white border-none shadow-md w-full" required defaultValue={donatorName} disabled
                            />
                          </div>
                          <div className='w-full sm:w-1/2'>
                            <label className="label"><span className="label-text text-[#4d4d4d]">Donar Email</span></label>
                            <input name='donarEmail'   type="email"  className="input input-bordered bg-white border-none shadow-md w-full" required defaultValue={donatorEmail} disabled
                            />
                          </div>
                        </div>
                        <p className='text-primary my-[10px]'>--------------- Your Details ---------------</p>
                        <div className="form-control flex flex-col sm:flex-row gap-4">
                          <div className='w-full sm:w-1/2'>
                            <label className="label"><span className="label-text text-[#4d4d4d]">Your Email</span></label>
                            <input name='userEmail'   type="email" className="input input-bordered bg-white border-none shadow-md w-full" required defaultValue={user ? user.email : ''} disabled
                            />
                          </div>
                          <div className='w-full sm:w-1/2'>
                            <label className="label"><span className="label-text text-[#4d4d4d]">Request Date</span></label>
                            <input name='requestDate'   type="text" className="input input-bordered bg-white border-none shadow-md w-full" required defaultValue={moment().format('L,LTS')} disabled
                            />
                          </div>
                        </div>
                        <div className="form-control">
                          <label className="label"><span className="label-text text-[#4d4d4d]">Additional Notes</span></label>
                          <textarea name='notes'   type='text' placeholder="Write some additional notes if you want" className="input input-bordered bg-white border-none shadow-md pt-[10px] min-h-[100px] max-h-[200px]"
                          />
                        </div>
                        <div className="form-control mt-6">
                          <button disabled={disableRequest} className="btn bg-primary text-white hover:text-black">Place Request</button>
                        </div>
                      </form>
                    </div>
                </div>
            </dialog>
          </div>
        </div>
    );
};

export default FullDetailsFoodCard;
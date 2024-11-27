import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEyeOff, FiEye } from "react-icons/fi";
import { FaGoogle, FaGithub } from "react-icons/fa";
const SignIn = () => {
    const handleSubmit = () => {}
    const [showPassword, setShowPassword] = useState(true)
    const handlePasswordToggle = e => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }
    return (
        <div className="min-h-screen px-5 xl:px-0 max-w-[1140px] mx-auto mb-[148px]">
          <div className="hero-content mx-auto">
            <div className="card bg-[#f2f7fd]  w-full sm:w-[511px] h-fit px-[30px] py-[15px] md:py-[35px] md:px-[65px] shrink-0 rounded-xl text-center">
              <h1 className="text-primary text-[40px] font-bold mb-[50px]">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label"><span className="label-text text-[#4d4d4d]">Email</span></label>
                  <input name="email" type="email" placeholder="email" className="input input-bordered bg-white border-none shadow-md"
                  />
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text text-[#4d4d4d]">Password</span></label>
                  <div className="relative flex">
                    <input type={showPassword ? 'password' : 'text'} name="password" placeholder="Password" className="input input-bordered bg-white border-none w-full shadow-md"
                    />
                    <button onClick={handlePasswordToggle} className={`absolute right-2 top-1/2 translate-y-[-50%]`}>{showPassword ? <FiEyeOff /> : <FiEye />}</button>
                  </div>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className={`btn bg-primary text-white hover:text-black `}>Login</button>
                  {/* <button onClick={handleSignOut} className={`btn bg-[#FF3811] text-white hover:text-black ${user ? 'flex' : 'hidden'}`}>SignOut</button> */}
                </div>
              </form>
              <p className="text-[18px] text-[#4d4d4d] font-medium text-center mt-[30px]">Or Sign In with</p>
              <div className="flex gap-4 justify-center mt-[30px]">
                <button  className="btn btn-circle border-none bg-white">
                    <FaGoogle className='w-2/3 h-2/3 text-primary'></FaGoogle>
                </button>
                <button className="btn btn-circle border-none bg-white">
                    <FaGithub className='w-2/3 h-2/3 text-primary'></FaGithub>
                </button>
              </div>
              <p className="text-[18px] text-[#737373] mt-[50px]">Have an account?<Link to={'/signUp'} className="text-primary font-semibold"> Sign Up</Link></p>
            </div>
          </div>
        </div>
    );
};

export default SignIn;
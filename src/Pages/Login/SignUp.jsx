import React, { useContext } from 'react';
import { FiEyeOff, FiEye } from "react-icons/fi";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../../Firebase/firebase.config';
import { Helmet } from 'react-helmet';
const SignUp = () => {
    const {user, setUser, signUpUser, signInGoogle, signInGithub,loading} = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const photo = e.target.photo.value
        signUpUser(email, password)
        .then(result => {
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo
            })
            .then(() => {
                setUser(result.user)
                const redirectTo = location.state?.from || '/';
                navigate(redirectTo)
            })
            .catch(()=> {
                console.log("problem in update user")
            })
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    const handleGoogleSignIn = (e) => {
        e.preventDefault()
        signInGoogle()
        .then(result => {
            setUser(result.user)
            const redirectTo = location.state?.from || '/';
            navigate(redirectTo)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    const handleGithubSignIn = (e) => {
        e.preventDefault()
        signInGithub()
        .then(result => {
            setUser(result.user)
            const redirectTo = location.state?.from || '/';
            navigate(redirectTo)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return ( loading ? <img className='flex mx-auto' src="/loading.gif" alt="" /> :

            <div className="min-h-screen px-5 xl:px-0 max-w-[1140px] mx-auto">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>EcoUnity | Sign Up</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <div className="hero-content mx-auto">
                    <div className="card bg-[#f2f7fd]  w-full sm:w-[511px] h-fit px-[30px] py-[15px] md:py-[35px] md:px-[65px] shrink-0 rounded-xl text-center">
                      <h1 className="text-primary text-[40px] font-bold mb-[30px]">Sign Up</h1>
                      <form onSubmit={handleSubmit}>
                        <div className="form-control flex flex-col sm:flex-row gap-4">
                          <div className='w-full sm:w-1/2'>
                            <label className="label"><span className="label-text text-[#4d4d4d]">Name</span></label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered bg-white border-none shadow-md w-full" required
                            />
                          </div>
                          <div className='w-full sm:w-1/2'>
                            <label className="label"><span className="label-text text-[#4d4d4d]">Email</span></label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered bg-white border-none shadow-md w-full" required
                            />
                          </div>
                        </div>
                        <div className="form-control">
                          <label className="label"><span className="label-text text-[#4d4d4d]">Password</span></label>
                          <input name='password' type="password" placeholder="password" className="input input-bordered bg-white border-none shadow-md" required
                          />
                        </div>
                        <div className="form-control">
                          <label className="label"><span className="label-text text-[#4d4d4d]">Photo</span></label>
                          <input name='photo' type='text' placeholder="photo url" className="input input-bordered bg-white border-none shadow-md" required
                          />
                        </div>
                        <div className="form-control mt-6">
                          <button disabled={user} className="btn bg-primary text-white hover:text-black">Sign Up</button>
                        </div>
                      </form>
                      <p className="text-[18px] text-[#4d4d4d] font-medium text-center mt-[30px]">Or Sign Up with</p>
                      <div className="flex gap-4 justify-center mt-[30px]">
                        <button onClick={handleGoogleSignIn}  className="btn btn-circle border-none bg-white">
                            <FaGoogle className='w-2/3 h-2/3 text-primary'></FaGoogle>
                        </button>
                        <button onClick={handleGithubSignIn} className="btn btn-circle border-none bg-white">
                            <FaGithub className='w-2/3 h-2/3 text-primary'></FaGithub>
                        </button>
                      </div>
                      <p className="text-[18px] text-[#737373] mt-[20px]">Have an account?<Link to={'/SignIn'} className="text-primary font-semibold"> Sign In</Link></p>
                    </div>
                </div>
            </div>
    );
};

export default SignUp;
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading,currentSlide} = useContext(AuthContext)
    const imageNum = currentSlide + 1
    if(loading){
        return <img className='flex mx-auto' src="/loading.gif" alt="" />
    }
    else if(user){
        return children
    } else{ 
    return <Navigate to={'/signIn'}></Navigate>
    }
};

export default PrivateRoute;
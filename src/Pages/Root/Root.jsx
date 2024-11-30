import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Layout/Navbar';
import Footer from '../../Layout/Footer';
import { AuthContext } from '../../Provider/AuthProvider';
import Loading from './loading.json'
import Lottie from 'lottie-react';

const Root = () => {
    const {loading} = useContext(AuthContext)
    return ( loading ? <Lottie className='w-screen h-screen' animationData={Loading} /> :
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
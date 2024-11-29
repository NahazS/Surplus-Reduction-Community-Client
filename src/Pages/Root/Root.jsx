import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Layout/Navbar';
import Footer from '../../Layout/Footer';
import FloatingBox from '../../Card/FloatingBox';
import { AuthContext } from '../../Provider/AuthProvider';

const Root = () => {
    const {loading} = useContext(AuthContext)
    return ( loading ? <img className='flex mx-auto' src="/loading.gif" alt="" /> :
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <FloatingBox></FloatingBox>
            <Footer></Footer>
        </div>
    );
};

export default Root;
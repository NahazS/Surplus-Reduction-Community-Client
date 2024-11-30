import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Layout/Navbar';
import Footer from '../../Layout/Footer';
import { AuthContext } from '../../Provider/AuthProvider';
import Loading from '../Loading/Loading';

const Root = () => {
    const {loading} = useContext(AuthContext)
    return ( loading ? <Loading></Loading> :
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
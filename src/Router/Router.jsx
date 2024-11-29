import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import AvailableFoods from '../Pages/AvailableFoods/AvailableFoods';
import AddFood from '../Pages/AddFood/AddFood';
import MyFood from '../Pages/MyFood/MyFood';
import MyFoodRequest from '../Pages/MyFoodRequest/MyFoodRequest';
import SignIn from '../Pages/Login/SignIn';
import SignUp from '../Pages/Login/SignUp';
import axios from 'axios';
import PrivateRoute from './PrivateRoute';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/availableFood',
                element: <AvailableFoods></AvailableFoods>,
                loader: () => fetch('http://localhost:3000/availableFood')
            },
            {
                path: '/addFood',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: '/myFoods',
                element: <PrivateRoute><MyFood></MyFood></PrivateRoute>
            },
            {
                path: '/myFoodRequest',
                element: <PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default Router
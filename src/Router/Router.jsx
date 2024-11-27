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
                path: '/availableFoods',
                element: <AvailableFoods></AvailableFoods>
            },
            {
                path: '/addFood',
                element: <AddFood></AddFood>
            },
            {
                path: '/myFoods',
                element: <MyFood></MyFood>
            },
            {
                path: '/myFoodRequest',
                element: <MyFoodRequest></MyFoodRequest>
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
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
import FullDetailsFoodCard from '../Card/FullDetailsFoodCard';
import Update from '../Pages/MyFood/Component/Update';
import Error from '../Pages/Error/Error';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://food-sharing-community-server-theta.vercel.app/availableFood'),
                errorElement: <Error></Error>
            },
            {
                path: '/availableFood',
                element: <AvailableFoods></AvailableFoods>,
                loader: () => fetch('https://food-sharing-community-server-theta.vercel.app/availableFood'),
                errorElement: <Error></Error>
            },
            {
                path: '/availableFood/:id',
                element: <FullDetailsFoodCard></FullDetailsFoodCard>,
                loader: ({params}) => fetch(`https://food-sharing-community-server-theta.vercel.app/availableFood/${params.id}`),
                errorElement: <Error></Error>
            },
            {
                path: '/addFood',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>,
                errorElement: <Error></Error>
            },
            {
                path: '/myFood',
                element: <PrivateRoute><MyFood></MyFood></PrivateRoute>,
                errorElement: <Error></Error>
            },
            {
                path: '/myFood/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({params}) => fetch(`https://food-sharing-community-server-theta.vercel.app/availableFood/${params.id}`),
                errorElement: <Error></Error>
            },
            {
                path: '/myFoodRequest',
                element: <PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>,
                errorElement: <Error></Error>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>,
                errorElement: <Error></Error>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>,
                errorElement: <Error></Error>
            }
        ]
    }
])

export default Router
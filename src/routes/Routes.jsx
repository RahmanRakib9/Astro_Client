import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout"
import SignUp from '../userAuthentication/SignUp/SignUp';
import SignIn from '../userAuthentication/SignIn/SignIn';

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
    },
    {
        path: "/register",
        element: <SignUp></SignUp>
    },
    {
        path: "/login",
        element: <SignIn></SignIn>
    }
])

export default router;
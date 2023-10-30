import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout"
import SignUp from '../userAuthentication/SignUp/SignUp';

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
    },
    {
        path: "/register",
        element: <SignUp></SignUp>
    }
])

export default router;
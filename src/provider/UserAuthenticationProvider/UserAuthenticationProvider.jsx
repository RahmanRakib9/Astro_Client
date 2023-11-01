import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../../firebase/firebase.init';
import handlePasswordSignUp from '../handlePasswordSignUp/handlePasswordSignUp';
import handlePasswordSignIn from '../handlePasswordSignIn/handlePasswordSignIn';

export const UserAuthenticationContext = createContext(null);
export const auth = getAuth(app);


const UserAuthenticationProvider = ({ children }) => {

    const userAuthenticationInfo = {

        handlePasswordSignUp,
        handlePasswordSignIn
    }
    return (
        <UserAuthenticationContext.Provider value={userAuthenticationInfo}>
            {children}
        </UserAuthenticationContext.Provider>
    );
};

export default UserAuthenticationProvider;
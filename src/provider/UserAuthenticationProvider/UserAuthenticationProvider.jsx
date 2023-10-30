import React, { createContext } from 'react';

export const UserAuthenticationContext = createContext(null);

const UserAuthenticationProvider = ({ children }) => {
    const userAuthenticationInfo = {}
    return (
        <UserAuthenticationContext.Provider value={userAuthenticationInfo}>
            {children}
        </UserAuthenticationContext.Provider>
    );
};

export default UserAuthenticationProvider;
import React from 'react';
import { auth } from '../UserAuthenticationProvider/UserAuthenticationProvider';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const handlePasswordSignUp = (userEmail, userPassword) => {
    return createUserWithEmailAndPassword(auth, userEmail, userPassword)
};

export default handlePasswordSignUp;
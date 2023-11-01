import React from 'react';
import { auth } from '../UserAuthenticationProvider/UserAuthenticationProvider';
import { signInWithEmailAndPassword } from 'firebase/auth';

const handlePasswordSignIn = (userEmail, userPassword) => {
    return signInWithEmailAndPassword(auth, userEmail, userPassword);
};

export default handlePasswordSignIn;
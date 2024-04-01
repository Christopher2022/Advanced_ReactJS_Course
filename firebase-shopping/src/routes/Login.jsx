import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const auth = getAuth();
auth.languageCode = 'it';

const provider = new GoogleAuthProvider();

const Login = () => {
    const hazLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                console.log('token', token)
                console.log('user' , user)
                
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    return (
        <div>
            <h1 className='text-xl font-semibold text-sky-700'>Bienvenid@ a Login</h1>
            <p className='text-sm'> Haz clic en el siguiente botón para hacer login </p>
            <button onClick={hazLogin}>Login</button>
        </div>
    )
}

export default Login

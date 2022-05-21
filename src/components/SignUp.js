import React from 'react';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { HotelContext } from '../Context'

export default function SignUp() {
    const {userName,mobileNumber,email,password,signUp,handleSignUpChange} = useContext(HotelContext);
    return (
        <div class="contact">
        <div class="container">
            <h1>Sign Up</h1>
            <form onSubmit={signUp}>
                <div class="label">User Name<span>*</span></div>
                <div class="text-field"><input type="text"  name = "userName" value={userName} onChange={handleSignUpChange}/></div>            
                <div class="label">Email<span>*</span></div>
                <div class="text-field"><input type="email"  name = "email"  value={email} onChange={handleSignUpChange}/></div>
                <div class="label">Password<span>*</span></div>
                <div class="text-field"><input type="password"  name = "password"  value={password} onChange={handleSignUpChange}/></div>
                <div class="label">Mobile Number<span>*</span></div>
                <div class="text-field"><input type="text"  name = "mobileNumber" value={mobileNumber} onChange={handleSignUpChange}/></div>
                <div class="submit"><button type="submit">Regist</button></div>
            </form>
            <div class="registration">
                <span>you Have Account? </span>
                <Link to="/login">Go Back To Login Page</Link>
            </div>
        </div>
    </div>
    );
}

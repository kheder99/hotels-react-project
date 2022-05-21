import React from 'react';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { HotelContext } from '../Context'

export default function Login() {
    const {handleLoginChange,login,email,password} = useContext(HotelContext);
    return (
        <div className="contact">
            <div className="container">
                <h1>Sign In</h1>
                <form onSubmit={login} >
                    <div className="label">Email<span>*</span></div>
                    <div className="text-field"><input type="email"  value={email} onChange={handleLoginChange}/></div>
                    <div className="label">Password<span>*</span></div>
                    <div className="text-field"><input type="password"  value={password} onChange={handleLoginChange}/></div>
                    <div className="submit"><button type="submit" >Sign In</button></div>
                </form>
                <div className="registration">
                    <span>New Here? </span>
                    <Link to="/signUp">Register For New Account</Link>
                </div>
            </div>
        </div>
    );
}

import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useContext } from "react";
import { HotelContext } from "../Context";
import GoToTop from "./GoToTop";

export default function Login() {
  const {
    handleLoginChange,
    login,
    email,
    password,
    loginPending,
    loginError,
  } = useContext(HotelContext);
  console.log(loginPending);
  return (
    <div className="contact">
      {/* {loginError !== "" ? window.alert(`${loginError}`) : null} */}
      <div className="container">
        <div className="login-header">
          <h1 className="title">Welcome Back</h1>
          <p>Sign in with your email and password</p>
        </div>
        <form onSubmit={login}>
          {/* <div className="label">
            Email<span>*</span>
          </div>
          <div className="text-field">
            <input type="email" value={email} onChange={handleLoginChange} />
          </div> */}
          <div className="input">
            <span className="title-field">Email</span>
            <input type="email" value={email} onChange={handleLoginChange} />
            <span className="icon">
              <MdOutlineMail />
            </span>
          </div>
          {/* <div className="label">
            Password<span>*</span>
          </div>
          <div className="text-field">
            <input
              type="password"
              value={password}
              onChange={handleLoginChange}
            />
          </div> */}
          <div className="input">
            <span className="title-field">Password</span>
            <input
              type="password"
              value={password}
              onChange={handleLoginChange}
            />
            <span className="icon">
              <RiLockPasswordLine />
            </span>
          </div>
          <div className="errorMessage">{loginError}</div>
          {loginPending !== true ? (
            <button type="submit">Sign In</button>
          ) : (
            <button type="submit" className="disabled" disabled>
              Sign In
            </button>
          )}
        </form>
        {/* <div className="registration">
          <span>New Here? </span>
          <Link to="/signUp">Register For New Account</Link>
        </div> */}
        <div className="go-to-sign-up">
          <p>Don't have an account?</p>
          <Link to="/signUp">Sign Up</Link>
        </div>
      </div>
      <GoToTop />
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HotelContext } from "../Context";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaAddressBook } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

import GoToTop from "../components/GoToTop";

export default function SignUp() {
  const {
    userName,
    mobileNumber,
    email,
    password,
    signUp,
    handleSignUpChange,
    signUpPending,
    signUpError,
  } = useContext(HotelContext);
  console.log(signUpPending);
  return (
    <div class="contact">
      <div class="container">
        <div className="sign-up-header">
          <h1 className="title">Register Account</h1>
          <p>Complete your details.</p>
        </div>
        <form onSubmit={signUp}>
          {/* <div class="label">
            User Name<span>*</span>
          </div>
          <div class="text-field">
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={handleSignUpChange}
            />
          </div> */}
          <div className="input">
            <span className="title-field">User Name</span>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={handleSignUpChange}
            />
            <span className="icon">
              <FaAddressBook />
            </span>
          </div>
          {/* <div class="label">
            Email<span>*</span>
          </div>
          <div class="text-field">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleSignUpChange}
            />
          </div> */}
          <div className="input">
            <span className="title-field">Email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleSignUpChange}
            />
            <span className="icon">
              <MdOutlineMail />
            </span>
          </div>
          {/* <div class="label">
            Password<span>*</span>
          </div>
          <div class="text-field">
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleSignUpChange}
            />
          </div> */}
          <div className="input">
            <span className="title-field">Password</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleSignUpChange}
            />
            <span className="icon">
              <RiLockPasswordLine />
            </span>
          </div>
          {/* <div class="label">
            Mobile Number<span>*</span>
          </div>
          <div class="text-field">
            <input
              type="text"
              name="mobileNumber"
              value={mobileNumber}
              onChange={handleSignUpChange}
            />
          </div> */}
          <div className="input">
            <span className="title-field">Mobile Number</span>
            <input
              type="text"
              name="mobileNumber"
              value={mobileNumber}
              onChange={handleSignUpChange}
            />
            <span className="icon">
              <FaMobileAlt />
            </span>
          </div>
          <div className="errorMessage">{signUpError}</div>

          {/* <button type="submit">Create</button> */}
          {signUpPending !== true ? (
            <button type="submit">Create</button>
          ) : (
            <button type="submit" className="disabled" disabled>
              Create
            </button>
          )}
        </form>
        {/* <div class="registration">
          <span>you Have Account? </span>
          <Link to="/login">Go Back To Login Page</Link>
        </div> */}
        <div className="go-to-sign-up">
          <p>you Have Account?</p>
          <Link to="/login">Go Back To Login Page</Link>
        </div>
      </div>
      <GoToTop />
    </div>
  );
}

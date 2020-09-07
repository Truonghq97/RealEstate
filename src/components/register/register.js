import React from "react";
import { Link } from "react-router-dom";

function register() {
  return (
    <div
      className="container-login100"
      style={{ backgroundImage: 'url("img/bg-01.jpg")' }}
    >
      <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
        <form className="login100-form validate-form">
          <span className="login100-form-title p-b-49">Sign Up</span>
          <div
            className="wrap-input100 validate-input m-b-23"
            data-validate="Username is reauired"
          >
            <span className="label-input100">Username</span>
            <input
              className="input100"
              type="text"
              name="username"
              placeholder="Type your username"
            />
          </div>
          <div
            className="wrap-input100 validate-input"
            data-validate="Password is required"
          >
            <span className="label-input100">Password</span>
            <input
              className="input100"
              type="password"
              name="pass"
              placeholder="Type your password"
            />
          </div>
          <div
            className="wrap-input100 validate-input"
            data-validate="Password is required"
          >
            <span className="label-input100">Email</span>
            <input
              className="input100"
              type="text"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div
            className="wrap-input100 validate-input"
            data-validate="Password is required"
          >
            <span className="label-input100">Re-enter password</span>
            <input
              className="input100"
              type="password"
              name="repass"
              placeholder="Type your password"
            />
          </div>
          <div className="text-right p-t-8 p-b-31"></div>
          <div className="container-login100-form-btn">
            <div className="wrap-login100-form-btn">
              <div className="login100-form-bgbtn" />
              <button className="login100-form-btn">Sign Up</button>
            </div>
          </div>
          <div className="txt1 text-center p-t-54 p-b-20">
            <span>
              Already have an account? 
              <Link to="/login">
                <u> Sign In here</u>
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default register;

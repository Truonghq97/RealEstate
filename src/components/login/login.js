import React from "react";
import { Link } from "react-router-dom";

function login() {
  return (
    <div className="limiter">
      <div
        className="container-login100"
        style={{ backgroundImage: 'url("img/bg-01.jpg")' }}
      >
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-49">Sign In</span>
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
            <div className="text-right p-t-8 p-b-31">
              <Link to="#">Forgot password?</Link>
            </div>
            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn" />
                <button className="login100-form-btn">Login</button>
              </div>
            </div>
            <div className="txt1 text-center p-t-54 p-b-20">
              <span>
                Do not have an Account?
                <Link to="/register">
                  <u> Sign Up here </u>
                </Link>
                 Or Sign Up Using
              </span>
            </div>
            <div className="flex-c-m">
              <Link to="#" className="login100-social-item bg1 footer-social">
                <i class="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" className="login100-social-item bg2 footer-social">
                <i class="fab fa-twitter"></i>
              </Link>

              <Link to="#" className="login100-social-item bg3 footer-social">
                <i className="fab fa-google" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login;

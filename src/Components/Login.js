import React from 'react';
import './Login.css';
import Logo from "../assets/Images/Admin.png"
function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card card_style">
        <div className="card-header-box background text-center p-4 d-flex justify-content-center">
          <img src={Logo} alt="" height="18%" width="18%" className="img-fluid" />
          <h4 className="m-3 font-weight-bold">Patient System</h4>
        </div>
        <div className="card-body">
          <h5 className="text-center m-4">Login to your Account</h5>
          <form className="p-4 pt-2">
            <div className="mb-3">
              <input type="email" className="form-control" id="email" name="email" required placeholder="Email Address" />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="password" name="password" required placeholder="Password" />
            </div>
            <div className="mb-4 form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" name="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
            </div>
            <button type="submit" className="w-100 rounded-pill mb-4 background p-2">LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

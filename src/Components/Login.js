import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=26"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign up</h1>
        <form>
          <input className="login_email" type="email" placeholder="Email" />
          <input
            className="login_password"
            type="password"
            placeholder="Password"
          />
          <button> Sign In</button>
        </form>
        <p>
          By continuing, you agree to Netflix Conditions of Use and Privacy
          Notice.
        </p>
      </div>
    </div>
  );
}

export default Login;

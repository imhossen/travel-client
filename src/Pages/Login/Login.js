import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

  // Not working showing an error
  // const handleGoogleLogin = () => {
  //   signInUsingGoogle()
  //       .then(result => {
  //           history.push(redirect_uri);
  //       })
  // }
  return (
    <div className="login__area d-flex align-items-center py-5">
      <div className="mx-auto">
        <h2>Please Login</h2>

        <button onClick={signInUsingGoogle} className="btn primary__btn mt-2">
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../utils";
import "../authentication/Auth.css";


function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
  
    if (!email || !password) {
      return handleError("Email and password are required");
    }
  
    try {
      const url = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/auth/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
  
      const result = await response.json();
      const { success, message, jwtToken, name, _id, error } = result;
  
      if (success) {
        handleSuccess(message);
        
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        localStorage.setItem("loggedInUserId", _id); 
        
        setTimeout(() => {
          navigate("/home");
          window.location.reload();
        }, 1000);
      } else if (error) {
        const details = error?.details?.[0]?.message || "An error occurred";
        handleError(details);
      } else {
        handleError(message || "An unknown error occurred");
      }
  
    } catch (err) {
      handleError(err.message || "Something went wrong!");
    }
  };
  
  
  return (
    <main>
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email..."
              value={loginInfo.email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password..."
              value={loginInfo.password}
            />
          </div>
          <button type="submit">Login</button>
          <span>
            Don&apos;t have an account? <Link to="/signup">Signup</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </main>
  );
}

export default Login;

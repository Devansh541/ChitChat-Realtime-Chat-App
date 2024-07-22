import React from "react";
import Add from "../img/add_photo.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">ChitChat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Enter email" />
          <input type="password" placeholder="Enter password" />
          <button>Sign In</button>
        </form>
        <p>Don't have an account?</p>
      </div>
    </div>
  );
};

export default Login;

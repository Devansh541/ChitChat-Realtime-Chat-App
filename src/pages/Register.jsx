import React from "react";
import Add from "../img/add_photo.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">ChitChat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Enter username" />
          <input type="email" placeholder="Enter email" />
          <input type="password" placeholder="Enter password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} />
            <span>Add a profile picture</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Do you have an account already?</p>
      </div>
    </div>
  );
};

export default Register;

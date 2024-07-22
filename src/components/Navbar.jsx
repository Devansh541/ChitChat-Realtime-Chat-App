import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">ChitChat</span>
      <div className="user">
        <img
          src="https://pbs.twimg.com/profile_images/1722717068502429697/5yH3heHq_400x400.jpg"
          alt=""
        />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;

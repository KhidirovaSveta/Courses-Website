import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../img/logo.png.webp";
import "./index.scss";
const Header = () => {
  return (
    <div id="Header">
    <div className="container">
      <div className="header">
        <img src={Logo} alt="" />
        <div className="nav-Bar">
          <ul>
            <li>
              {" "}
              <NavLink to={"/"}> Home </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to={"/"}> Courses </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to={"/"}> About </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to={"/"}> Blog </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to={"/"}> Contact </NavLink>
            </li>
          </ul>
          <div className="headerBtn">
          <button className="btn-join">Join</button>
          <button className="btn-login">Log In</button>
        </div>
        </div>
        
      </div>
    </div>
  </div>
  );
};

export default Header;

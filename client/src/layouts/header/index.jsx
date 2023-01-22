import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../img/logo.png.webp";
import { Dropdown, Space } from "antd";
import "./index.scss";
const Header = () => {
  const items = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/">
          Blog
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/">
          Blog Details
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/">
          Element
        </a>
      ),
    },
  ];
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
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space className="drop">Blog </Space>
                  </a>
                </Dropdown>
              </li>
              <li>
                {" "}
                <NavLink to={"/"}> Contact </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to={"/pages/add-course"}> Add Course </NavLink>
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

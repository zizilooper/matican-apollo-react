import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <ul className="nav">
      <NavLink className="nav-link " to="/">
        <li className="item">Login</li>
      </NavLink>
      <NavLink className="nav-link" to="/registration">
        <li className="item">Register</li>
      </NavLink>
      <NavLink className="nav-link " to="/usersInfo">
        <li className="item">UserInfo</li>
      </NavLink>
      <NavLink className="nav-link" to="/gqlData">
        <li className="item">GqlData</li>
      </NavLink>
    </ul>
  );
}

export default Navbar;

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";


import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <ul className="nav">
        <Link className="nav-link " to="/">
          <li className="item">Login</li>
        </Link>
        <Link className="nav-link" to="/registration">
          <li className="item">Register</li>
        </Link>
        <Link className="nav-link " to="/usersInfo">
          <li className="item">UserInfo</li>
        </Link>
        <Link className="nav-link" to="/gqlData">
          <li className="item">GqlData</li>
        </Link>
      </ul>
    );
  }
}

export default Navbar;

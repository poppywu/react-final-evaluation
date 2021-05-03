import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.svg";

function Navbar() {
  return (
    <div className="navigation">
      <div className="container-fluid">
        <div className="navigation__row">
          <div className="logo">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="nav__link">
            <div className="primary__nav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm panel-bg menu ">
      <div className="container">

        <NavLink className="Bookstore-CMS" to="/">
          <img className="logo" src={logo} alt="fireSpot" />
          Space Travelers Hub

        </NavLink>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Rockets</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/missions">Missions</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">My Profile</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;

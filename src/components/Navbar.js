import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm panel-bg menu ">
      <div className="container">
        <Link className="Bookstore-CMS" to="/">
          <img className="logo" src={logo} alt="fireSpot" />
          Space Travelers Hub

        </Link>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Rockets</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/missions">Missions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">My Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;

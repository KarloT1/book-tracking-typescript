import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="navbar__item">
        <NavLink className={(navData) => (navData.isActive ? "navbar__item--active" : "")} to="/">
          Home
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink className={(navData) => (navData.isActive ? "navbar__item--active" : "")} to="/favorites">
          Favorites
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink className={(navData) => (navData.isActive ? "navbar__item--active" : "")} to="/add-book">
          Add Book
        </NavLink>
      </li>
    </ul>
  )
}

export default Navbar
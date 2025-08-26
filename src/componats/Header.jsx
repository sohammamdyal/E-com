import React from "react";
import { Navigate, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          E-Basket
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/orders">
                Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Cart
              </NavLink>
            </li>

            <li className="nav-item ms-5 bg-white rounded p-1">
              <NavLink className="nav-link text-dark" to="/signup">
                SignUp
              </NavLink>
            </li>
            <li className="nav-item ms-2 bg-white rounded p-1">
              <NavLink className="nav-link text-dark" to="/signin">
                SignIn
              </NavLink>
            </li>
          </ul>

        </div>
        
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import logo from "../../Images/Logo.png";
import "./Navbar.css";
import Home from "../../Home/Home/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
const Navabar = () => {
  return (
    <div>
      <div>
        <nav class="container-fluid  navbar navbar-expand-lg navbar-light bg-dark">
          <img className="logoImg" src={logo} alt="" />
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <Link to="/abashik" smooth>
                <li class="nav-item">
                  <a class="nav-link mr-5 text-light" href="#">
                    Home
                  </a>
                </li>
              </Link>
              <Link to="/renter">
                <li class="nav-item">
                  <a class="nav-link mr-5 text-light" href="#">
                    Find House
                  </a>
                </li>
              </Link>
              <Link to="/sign-up">
                <li class="nav-item">
                  <a class="nav-link mr-5 text-light" href="#">
                    Sign Up
                  </a>
                </li>
              </Link>
              <Link to="/sign-in">
                <li class="nav-item">
                  <a class="nav-link mr-5 text-light" href="#">
                    Sign in
                  </a>
                </li>
              </Link>
              <li class="nav-item">
                <a class="nav-link mr-5 text-light" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navabar;

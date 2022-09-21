import React from "react";
import logo from "../images/book-logo.png";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light shadow fixed-top py-2">
        <div class="container-fluid">
          <div className="logo d-flex">
            <img src={logo} />
            <span className="logo-text ps-1 fw-4 ">Educator</span>
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">Jus</span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5 text-center  fs-5 fw-bold">
              <li class="nav-item pe-5">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item pe-5">
                <a class="nav-link active" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item pe-5">
                <a class="nav-link active" aria-current="page" href="#">
                  Courses
                </a>
              </li>
              <li class="nav-item pe-5">
                <a class="nav-link active" aria-current="page" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item pe-5">
                <a class="nav-link active" aria-current="page" href="#">
                  Contact Us
                </a>
              </li>
              <button class="btn btn-dark">
                Dark Mode
                <i class="bi bi-moon ps-1"></i>
              </button>
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  );
}

export default Navbar;

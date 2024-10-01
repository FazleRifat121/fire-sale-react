import React from "react";
import logo from "../../assets/nav/Logo.png";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand d-block" href="#">
            <img src={logo} class="img-fluid logo" alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 md-hidden mt-3">
              <li class="nav-item">
                <a class="nav-link special-nav-bg my-1 ps-3" href="#">
                  Consultant
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link special-nav-bg mb-1 ps-3" href="#">
                  Properties
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link special-nav-bg mb-1 ps-3" href="#">
                  FAQ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link special-nav-bg mb-1 ps-3" href="#">
                  About Us
                </a>
              </li>
            </ul>
            <div class="ms-auto sm-hidden">
              <div class="dropdown">
                <button
                  class="btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa-solid fa-bars"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end bg-transparent border-0">
                  <li>
                    <a
                      class="dropdown-item special-nav-bg border rounded-top-3 mb-1"
                      href="#"
                    >
                      Consultant
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item special-nav-bg mb-1" href="#">
                      Properties
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item special-nav-bg border rounded-bottom-3 mb-1"
                      href="#"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

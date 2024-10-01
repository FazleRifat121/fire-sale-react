import React from "react";
import logo from "../../assets/nav/Logo.png";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand d-block" href="#">
            <img src={logo} className="img-fluid logo" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 md-hidden mt-3">
              <li className="nav-item">
                <a className="nav-link special-nav-bg my-1 ps-3" href="#">
                  Consultant
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link special-nav-bg mb-1 ps-3" href="#">
                  Properties
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link special-nav-bg mb-1 ps-3" href="#">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link special-nav-bg mb-1 ps-3" href="#">
                  About Us
                </a>
              </li>
            </ul>
            <div className="ms-auto sm-hidden">
              <div className="dropdown">
                <button
                  className="btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-bars"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end bg-transparent border-0">
                  <li>
                    <a
                      className="dropdown-item special-nav-bg border rounded-top-3 mb-1"
                      href="#"
                    >
                      Consultant
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item special-nav-bg mb-1" href="#">
                      Properties
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item special-nav-bg border rounded-bottom-3 mb-1"
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

import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <div className="container-fluid sdm-bg margin-bottom-70">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://www.facebook.com/">
            <i className="fa fa-home" />
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="https://www.facebook.com/">
                  Portfolio <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.facebook.com/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.facebook.com/">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.facebook.com/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;

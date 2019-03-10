import React, { Component } from "react";
import "./banner.css";

class Banner extends Component {
  render() {
    return (
      <div className="banner container-fluid sdm-bg" id="home">
        <br />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="nav nav-pills menu-center margin-top-30 scroll-nav">
                <li role="presentation" className="active">
                  <a href="#home" className="sdm-active">
                    <i className="fa fa-home" />
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="">
                    My Facts
                  </a>
                </li>
                <li>
                  <a href="#about_me" className="">
                    Work Exprience
                  </a>
                </li>
                <li>
                  <a href="#expertness" className="">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#hire_me" className="">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#contact_me" className="">
                    Contact
                  </a>
                </li>
              </ul>
              <br />
              <img
                className="img-circle center-block profile_picture"
                alt="Profile Pic"
                src="https://scontent.ftij2-1.fna.fbcdn.net/v/t1.0-9/36654854_10156333860183190_8877714988723077120_n.jpg?_nc_cat=106&_nc_ht=scontent.ftij2-1.fna&oh=50e60d23b336719017b094a8f4fd707e&oe=5D0BDAF6"
              />
              <h1 className="text-capitalize text-center">Jael Saavedra</h1>
              <h3 className="text-capitalize text-center">
                Fullstack Developer
              </h3>
              <hr />
              <div className="text-center margin-bottom-135">
                <ul className="social-networks">
                  <i className="fa fa-facebook">
                    <a href="https://www.facebook.com/">FB </a>
                  </i>

                  <li className="fa fa-linkedin">
                    <a href="https://www.linkedin.com/">Linked In</a>
                  </li>
                  <i className="fa fa-github">
                    <a href="https://github.com">Git</a>
                  </i>
                  <li className="fa fa-instagram">
                    <a href="https://instagram.com">Insta</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />

        <br />
        <div id="overlay" />
      </div>
    );
  }
}

export default Banner;

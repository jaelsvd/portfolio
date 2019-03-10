import React, { Component } from "react";
import SplitText from "react-pose-text";
import posed from "react-pose";
import "./banner.css";

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30
  }
};

const SocialIcon = posed.i({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.5,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
  },
  press: {
    scale: 1.1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
});

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
              <h1 className="text-capitalize text-center">
                <SplitText
                  initialPose="exit"
                  pose="enter"
                  charPoses={charPoses}
                >
                  Jael Saavedra
                </SplitText>
              </h1>
              <h3 className="text-capitalize text-center">
                <SplitText
                  initialPose="exit"
                  pose="enter"
                  charPoses={charPoses}
                >
                  Fullstack Developer
                </SplitText>
              </h3>
              <hr />
              <div className="text-center margin-bottom-135">
                <ul className="social-networks">
                  <SocialIcon
                    className="fa fa-facebook social-icon"
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/jael.saavedra",
                        "_blank"
                      )
                    }
                  />
                  <SocialIcon
                    className="fa fa-linkedin social-icon"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/jaelsaavedra",
                        "_blank"
                      )
                    }
                  />
                  <SocialIcon
                    className="fa fa-github social-icon"
                    onClick={() =>
                      window.open("https://github.com/jaelsvd", "_blank")
                    }
                  />
                  <SocialIcon
                    className="fa fa-stack-overflow social-icon"
                    onClick={() =>
                      window.open(
                        "https://stackexchange.com/users/10156716/jael-saavedra",
                        "_blank"
                      )
                    }
                  />
                  <SocialIcon
                    className="fa fa-instagram social-icon"
                    onClick={() =>
                      window.open("http://instagram.com/jaelsvd", "_blank")
                    }
                  />
                </ul>
                <br />
                <br />
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

import React, { Component } from "react";
import "./experience.css";

class Experience extends Component {
  render() {
    return (
      <section className="container" id="about_me">
        <br />
        <br />
        <div className="row">
          <div className="col-md-10 col-md-offset-1 col-sm-12">
            <div className="row">
              <div className="col-md-5 col-sm-4 col-xs-12">
                <h3>
                  <i className="fa fa-user" />
                  About me
                </h3>
                <div className="block">
                  <p>
                    I am a fullstack developer, I've worked with several
                    technologies on the past. I am very passionate about coding,
                    back-end or front-end are so much fun, I never get tired of
                    learning new technologies. I've been working on this field
                    for more than 3 years now, so you can tell I've bump into
                    many issues and challenges.
                  </p>
                  <p>
                    You're having trouble with your sistem?, have an idea but
                    don't know how to bring it to life? Here's where I jump in,
                    I can either code a front-end website from scratch, for
                    desktop or mobile devices. Wait! you don't care about how
                    you page looks? you just to solutions for your company to
                    work better?, no problem, with my combination between these
                    two skills, we can bring a real system to life. Let's chat
                    and talk about solutions or storm ideas!
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">
                <h3>
                  <i className="fa fa-building" />
                  Work history
                </h3>
                <div className="block">
                  <h4>Fullstack Manager</h4>
                  <ul className="icon-list">
                    <li>
                      <i className="fa fa-building" />
                      <a
                        className="company-link"
                        href="https://touchcr.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>TouchCR</strong>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-clock-o" /> May 2018- Present
                    </li>
                  </ul>
                </div>
                <div className="block">
                  <h4> Fullstack</h4>
                  <ul className="icon-list">
                    <li>
                      <i className="fa  fa-truck" />
                      <a
                        href="http://www.ghins.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Global Hawk</strong>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-clock-o" /> Aug 2017 - 2018
                    </li>
                  </ul>
                </div>
                <div className="block">
                  <h4>Software Ing</h4>
                  <ul className="icon-list">
                    <li>
                      <i className="fa fa-television" />
                      <a
                        href="http://foxconnbc.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Foxconn</strong>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-clock-o" /> 2017 - Aug 2017
                    </li>
                  </ul>
                </div>
                <div className="block">
                  <h4>Fullstack</h4>
                  <ul className="icon-list">
                    <li>
                      <i className="fa fa-laptop" />
                      <a
                        href="http://arkusnexus.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>ArkusNexus</strong>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-clock-o" /> 2016
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-6">
                <h3>
                  <i className="fa fa-graduation-cap" />
                  Education
                </h3>
                <div className="block">
                  <h4>MSc Information Technology Management</h4>
                  <ul className="icon-list">
                    <li>
                      <i className="fa fa-book" />
                      <a
                        href="https://tecmilenioenlinea.mx/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>University Tecmilenio</strong>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-clock-o" /> 2018-Present
                    </li>
                  </ul>
                </div>
                <div className="block">
                  <h4>B.S. Computer Systems Engineering</h4>
                  <ul className="icon-list">
                    <li>
                      <i className="fa fa-book" />
                      <a
                        href="http://tectijuana.edu.mx/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong> Institute Technology of Tijuana</strong>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-clock-o" /> 2015
                    </li>
                  </ul>
                </div>
                <div className="block">
                  <h4>International Academy</h4>
                  <ul className="icon-list">
                    <li>
                      <i className="fa fa-book" />
                      <a
                        href="https://www.usc.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>University of Southern California (USC)</strong>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-clock-o" /> 2016
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>
    );
  }
}

export default Experience;

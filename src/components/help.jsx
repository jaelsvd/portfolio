import React, { Component } from "react";
import "./help.css";

class Help extends Component {
  render() {
    return (
      <section className="container" id="hire_me">
        <div className="row">
          <div className="col-sm-12 text-center">
            <br />
            <br />
            <br />
            <br />
            <h3>Need Any Help?</h3>
            <h4>
              <i className="fa fa-thumbs-up fa-2x" /> I am available for
              freelance hire
            </h4>

            <nav className="cl-effect-2">
              <a href="#contact_me">
                <span data-hover="Hire Me">Hire Me</span>
              </a>
            </nav>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </section>
    );
  }
}

export default Help;

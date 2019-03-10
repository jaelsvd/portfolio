import React, { Component } from "react";
import "./contact-me.css";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="banner" id="contact_me">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center text-capitalize">
              <br />
              <br />
              <br />
              <h3>want to discuss a project?</h3>
              <h4>just drop a message below and i'll get in touch!</h4>
              <hr />
            </div>
          </div>
          <section className="col-sm-10 col-sm-offset-1">
            <div className="row  text-center">
              <div className="col-sm-4 col-xs-12">
                <div className="block">
                  <i className="fa fa-envelope fa-2x" />
                  <h4 className="text-uppercase">Queries</h4>
                  <ul className="list-unstyled">
                    <li>info@mywebsite.com</li>
                    <li>contact@gmail.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <div className="block">
                  <i className="fa fa-phone fa-2x" />
                  <h4 className="text-uppercase">Call Us</h4>
                  <ul className="list-unstyled">
                    <li>info@mywebsite.com</li>
                    <li>contact@gmail.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <div className="block">
                  <i className="fa fa-home fa-2x" />
                  <h4 className="text-uppercase">Office</h4>
                  <ul className="list-unstyled">
                    <li>info@mywebsite.com</li>
                    <li>contact@gmail.com</li>
                  </ul>
                </div>
              </div>

              <div action="" className="row">
                <div className="col-sm-6 col-xs-12">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="your_name"
                      placeholder="Write Your Name"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Write Your Message"
                    />
                  </div>
                </div>
                <div className="col-sm-12 text-center margin-top-55 margin-bottom-55">
                  <button type="submit" className="btn btn-orange">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </section>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div id="overlay-contact" />
        </div>
      </div>
    );
  }
}

export default Contact;

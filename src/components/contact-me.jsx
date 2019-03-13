import React, { Component } from "react";
import toastr from "toastr";
import * as emailjs from "emailjs-com";
import "jquery";
import "./contact-me.css";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      account: {
        name: "",
        email: "",
        subject: "",
        message: "",
        errors: {
          name: "",
          email: "",
          subject: "",
          message: ""
        }
      }
    };
  }

  handleInputChange = ({ currentTarget: input }) => {
    //event.preventDefault();

    //const target = event.target;
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  sentMessage(event) {
    event.preventDefault();

    var template_params = {
      from_name:
        this.state.account.name + " (" + this.state.account.email + ")",
      to_name: "Jael",
      subject: this.state.account.subject,
      message_html: this.state.account.message
    };

    emailjs
      .send(
        "gmail",
        "template_KtdlOhQk",
        template_params,
        "user_EohFCcr0PXgUJhqHlqsuB"
      )
      .then(
        function(response) {
          toastr.success("Message sent succesful");
          console.log("SUCCESS!", response.status, response.text);
        },
        function(err) {
          toastr.error(err);
          console.log(err);
        }
      );

    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }

  render() {
    const { account } = this.state;

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
          <div className="row">
            <div className="col-sm-12 text-center">
              <h4>
                <i className="fa fa-thumbs-up fa-2x hire" /> I am available for
                freelance hire
              </h4>
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
            </div>
            <div className="row">
              <div className="col-12">
                <form action="" className="row">
                  <div className="col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label>Your Name</label>

                      <input
                        type="text"
                        name="name"
                        id="your_name"
                        className="form-control contact"
                        required="required"
                        placeholder="Write Your Name"
                        onChange={this.handleInputChange}
                        value={account.name}
                      />
                      <label>Email</label>
                      <input
                        id="your_email"
                        className="form-control contact"
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        required="required"
                        onChange={this.handleInputChange}
                        value={account.email}
                      />
                    </div>
                  </div>

                  <div className="col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        id="your_subject"
                        className="form-control contact"
                        placeholder="Enter a subject"
                        required="required"
                        onChange={this.handleInputChange}
                        value={account.subject}
                        error={account.errors.subject}
                      />

                      <label>Your Message</label>
                      <textarea
                        name="message"
                        id="your_message"
                        required="required"
                        className="form-control message contact"
                        placeholder="Write Your Message"
                        rows="5"
                        onChange={this.handleInputChange}
                        value={account.message}
                        error={account.errors.message}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 text-center margin-top-55 margin-bottom-55">
                    <button
                      type="submit"
                      className="btn btn-orange"
                      onClick={this.sentMessage.bind(this)}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
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

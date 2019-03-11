import React, { Component } from "react";
import toastr from "toastr";
import * as emailjs from "emailjs-com";
import "jquery";

class ContactForm extends Component {
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
      from_name: this.state.account.name + "(" + this.state.account.email + ")",
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
      <div className="container">
        <div className="row">
          <form
            id={this.props.id}
            className={this.props.className}
            name={this.props.name}
            method={this.props.method}
            action={this.props.action}
          >
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              required="required"
              onChange={this.handleInputChange}
              value={account.name}
            />

            <label>email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              required="required"
              onChange={this.handleInputChange}
              value={account.email}
            />

            <label>subject</label>
            <input
              type="text"
              name="subject"
              className="form-control"
              required="required"
              onChange={this.handleInputChange}
              value={account.subject}
              error={account.errors.subject}
            />

            <label>message</label>
            <textarea
              name="message"
              id="message"
              required="required"
              className="form-control"
              rows="8"
              onChange={this.handleInputChange}
              value={account.message}
              error={account.errors.message}
            />

            <button
              onClick={this.sentMessage.bind(this)}
              type="button"
              name="submit"
              className="btn btn-primary btn-lg"
              required="required"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;

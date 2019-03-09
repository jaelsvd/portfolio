import React, { Component } from "react";

class Help extends Component {
  render() {
    return (
      <section class="container" id="hire_me">
        <div class="row">
          <div class="col-sm-12 text-center">
            <h3>Need Any Help?</h3>
            <h4>
              <i class="fa fa-thumbs-up fa-2x" /> I am available for freelance
              hire
            </h4>

            <nav class="cl-effect-2">
              <a href="#contact_me">
                <span data-hover="Hire Me">Hire Me</span>
              </a>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}

export default Help;

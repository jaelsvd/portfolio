import React, { Component } from "react";
import "./whatido.css";

class WhatIDo extends Component {
  render() {
    return (
      <div className="banner">
        <br />
        <br />
        <section className="container-fluid sdm-bg" id="expertness">
          <div className="row">
            <div className="overlay" />
            <div className="col-sm-12">
              <br />
              <h3 className="text-center">
                <i className="fa fa-bookmark" />
                What I Do
              </h3>
            </div>
          </div>
          <section className="container">
            <div className="row">
              <div className="col-sm-4 col-xs-6">
                <div className="block">
                  <i className="fa fa-android fa-3x" />
                  <h4 className="text-uppercase">Mobile Apps</h4>
                  <p>
                    Development of mobile apps such in iOS, Androd, Windows
                    Phone, etc. With ionic and Xamarin.
                  </p>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <div className="block">
                  <i className="fa fa-code fa-3x" />
                  <h4 className="text-uppercase">web design</h4>
                  <p>
                    Development of web pages, with reactjs, ionic, ASP.net, MVC,
                    nodejs.
                  </p>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <div className="block">
                  <i className="fa fa-magic fa-3x" />
                  <h4 className="text-uppercase">UX/UI Responsiveness</h4>
                  <p>
                    On the last couple of years I've been perfectioning my
                    skills, when it comes to responsive behaviors, each page
                    needs to display properly on mobile phones, tablets and
                    different types of desktops or laptops.
                  </p>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <div className="block">
                  <i className="fa fa-users fa-3x" />
                  <h4 className="text-uppercase">Scrum</h4>
                  <p>
                    As a manager I've developed the skills to work with teams,
                    clients, and a constant increase of our skills result of a
                    great communication. Worked with several teams across the
                    globe and overseas. Different time zones haven't been an
                    issue when working with the proper methodology.
                  </p>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <div className="block">
                  <i className="fa fa-code-fork fa-3x" />
                  <h4 className="text-uppercase">Versioning</h4>
                  <p>
                    Worked with various versioning technologies, but the most
                    familiar ones have always been{" "}
                    <i className="fa fa-github" />
                    GitHub and <i className="fa fa-bitbucket" /> Bitbucket.
                    Always using the best practices to avoid problems. Worked
                    with Pull-requests and rebase, merges, partial merges, etc.
                  </p>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <div className="block">
                  <i className="fa fa-user-secret fa-3x" />
                  <h4 className="text-uppercase">analytics</h4>
                  <p>
                    Always providing the best solutions when clients are looking
                    for direction.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>

        <div id="overlay-whatido" />
      </div>
    );
  }
}

export default WhatIDo;

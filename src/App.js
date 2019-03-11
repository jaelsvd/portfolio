import React, { Component } from "react";
import Banner from "./components/banner";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Experience from "./components/experience";
import WhatIDo from "./components/whatido";
import Help from "./components/help";
import Contact from "./components/contact-me";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="overlay" />
          <Banner />
          <Portfolio />
          <About />
          <br />
          <Experience />
          <br />
          <WhatIDo />
          <Help />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Navigation from "./components/navigation";
import Banner from "./components/banner";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Experience from "./components/experience";
import WhatIDo from "./components/whatido";
import Help from "./components/help";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="overlay" />

          <Navigation />
          <Banner />
          <Portfolio />
          <About />
          <br />
          <Experience />
          <br />
          <WhatIDo />
          <Help />
        </div>
      </div>
    );
  }
}

export default App;

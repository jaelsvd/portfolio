import React, { Component } from "react";
import Navigation from "./components/navigation";
import Banner from "./components/banner";
import Portfolio from "./components/portfolio";
import About from "./components/about";
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
        </div>
      </div>
    );
  }
}

export default App;

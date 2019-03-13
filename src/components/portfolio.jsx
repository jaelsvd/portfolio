import React, { Component } from "react";
import "./portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div className="container" id="portfolio">
        <br />
        <br />
        <br />
        <br />

        <div className="row ">
          <div className="col-md-4 col-sm-4 col-xs-6 ">
            <div className="card-group">
              <div className="card">
                <a
                  href="https://warm-ridge-40848.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../img/weather.PNG")}
                    className="card-img-top"
                    alt="..."
                  />
                </a>

                <div className="card-body">
                  <h5 className="card-title">Weather App</h5>
                  <p className="card-text">
                    This weather app was created with reactjs, using the API
                    from
                    <a href="https://openweathermap.org/">
                      <strong> Open Wheater Mapp</strong>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-6">
            <div className="card-group">
              <div className="card">
                <a
                  href="https://warm-ridge-40848.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../img/calculator-react-img.png")}
                    className="card-img-top"
                    alt="..."
                  />
                </a>

                <div className="card-body">
                  <h5 className="card-title">Calculator App</h5>
                  <p className="card-text">
                    This project was so much fun, as well created with react,
                    also helped me learn how to divide components from logic.
                    Hosted on Heroku.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-6">
            <div className="card-group">
              <div className="card">
                <a
                  href="https://warm-ridge-40848.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../img/vidly.PNG")}
                    className="card-img-top"
                    alt="..."
                  />
                </a>

                <div className="card-body">
                  <h5 className="card-title">Movies App</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Portfolio;

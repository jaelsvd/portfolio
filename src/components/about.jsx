import React from "react";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";
import "./about.css";
const styles = { height: 400, width: "100%" };

class About extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  visiableOnSelect = active => {
    // console.log(`visiable onSelect active=${active}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
    rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    //let { leftIcon, rightIcon } = this.state;
    return (
      <div className="row" id="reviews">
        <div className="col-12">
          <div className="container-fluid">
            <Row>
              <Col span={12} style={{ marginTop: 20 }}>
                <RBCarousel
                  version={4}
                  autoplay={this.state.autoplay}
                  pauseOnVisibility={true}
                  onSelect={this.visiableOnSelect}
                  slideshowSpeed={8000}
                >
                  <div style={{ ...styles, backgroundColor: "#8e45ae" }}>
                    <br />
                    <h1 className="text-center">
                      <i className="fa fa-lightbulb-o" aria-hidden="true" /> My
                      facts
                    </h1>
                    <div className="carousel-center">
                      <p className="quoteP_1">
                        Besides coding, I love languages, currently speak
                        Spanish, English and little bit of French, need to
                        practice more!. Would love to learn Arabic sometime
                        soon, after feeling confident with French.
                      </p>
                    </div>
                    <div className="carousel-center"> </div>
                    <div className="carousel-caption">
                      <i className="fa fa-globe fa-3x" aria-hidden="true" />
                    </div>
                  </div>
                  <div style={{ ...styles, backgroundColor: "#8e45ae" }}>
                    <br />
                    <h1 className="text-center">
                      <i className="fa fa-lightbulb-o" aria-hidden="true" /> My
                      facts
                    </h1>
                    <div className="carousel-center">
                      <p className="quoteP_1">
                        I confess I am addicted to music, most of my creations
                        (app wise) have been inspired with a nice playlist! If
                        you work on this environment we all have our
                        concentration technics!
                      </p>
                    </div>
                    <div className="carousel-caption">
                      <i className="fa fa-music fa-3x" aria-hidden="true" />
                    </div>
                  </div>
                </RBCarousel>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

/**
 *  Boostrap Component
 */
const Row = props => <div className="row">{props.children}</div>;
const Col = props => (
  <div className={`col-${props.span}`} style={props.style}>
    {props.children}
  </div>
);
/*const Button = props => {
  const { style, bsStyle, onClick } = props;
  const className = bsStyle ? `btn btn-${bsStyle}` : "btn";
  return (
    <button style={style} className={className} onClick={onClick}>
      {props.children}
    </button>
  );
};
*/
export default About;

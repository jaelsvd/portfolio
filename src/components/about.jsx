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
                  slideshowSpeed={4000}
                >
                  <div style={{ ...styles, backgroundColor: "#8e45ae" }}>
                    <div className="carousel-center">
                      <p className="quoteP_1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. !
                      </p>
                    </div>
                    <div className="carousel-center"> </div>
                    <div className="carousel-caption">Text</div>
                  </div>
                  <div style={{ ...styles, backgroundColor: "#8e45ae" }}>
                    <div className="carousel-center">
                      <p className="quoteP_1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. !
                      </p>
                    </div>
                    <div className="carousel-caption">Text</div>
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

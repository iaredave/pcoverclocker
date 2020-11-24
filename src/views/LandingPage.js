/*!

=========================================================
* BLK Design System PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react"

// reactstrap components
// import {
//
// } from "reactstrap";

// core components
import ColorNavbar from "components/ColorNavbar.js"
import ScrollDown from "components/ScrollDown/ScrollDown.js"
import PresentationHeader from "components/Headers/PresentationHeader.js"
import DemoFooter from "components/Footers/DemoFooter.js"
import { Line } from 'react-chartjs-2';
import { CardImg, CardText } from 'reactstrap';
import { UncontrolledCarousel } from "reactstrap";

import {
  Col,
  Container,
  Row,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Button,
  Navbar,
  NavbarBrand,
  UncontrolledCollapse,
  Nav,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap"
import {connect} from "react-redux"
import * as actions from "../actions"

const data = (canvas) => {
  var ctx = canvas.getContext("2d");

  var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
  gradientStroke.addColorStop(0, '#80b6f4');
  gradientStroke.addColorStop(1, '#FFFFFF');

  var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
  gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
  gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
  return {
    labels: ["60 FPS", "80 FPS", "100 FPS", "120 FPS", "140 FPS", "160 FPS", "180 FPS"],
    datasets: [{
      label: "K/D",
      borderColor: "#f96332",
      pointBorderColor: "#FFF",
      pointBackgroundColor: "#f96332",
      pointBorderWidth: 2,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      fill: true,
      backgroundColor: gradientFill,
      borderWidth: 2,
      data: [0, 21, 37, 59, 78, 85, 90]
    }]
  }
}

const options = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    bodySpacing: 4,
    mode:"nearest",
    intersect: 0,
    position:"nearest",
    xPadding:10,
    yPadding:10,
    caretPadding:10
  },
  responsive: 1,
  scales: {
    yAxes: [{
      display:0,
      ticks: {
        display: false
      },
      gridLines: {
        zeroLineColor: "transparent",
        drawTicks: false,
        display: false,
        drawBorder: false
      }
    }],
    xAxes: [{
      display:0,
      ticks: {
        display: false
      },
      gridLines: {
        zeroLineColor: "transparent",
        drawTicks: false,
        display: false,
        drawBorder: false
      }
    }]
  },
  layout:{
    padding:{left:0,right:0,top:15,bottom:15}
  }
};

const carouselItems = [
  {
    src:
      require("assets/img/emmanuel-tBG35b1ju2U-unsplash.jpg"),
    altText: "Slide 1",
    caption: ""
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1692f925837%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1692f925837%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.45%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 2",
    caption: ""
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1692f925838%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1692f925838%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.45%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 3",
    caption: ""
  }
];

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    // Don't call this.setState() here!
    this.state = {fading: true}
  }

  componentDidMount() {
    document.body.classList.add("landing-page")
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    this.refs.wrapper.scrollTop = 0
  }
  componentWillUnmount() {
    document.body.classList.remove("landing-page")
  }

  render() {
    return (
      <>
        <ColorNavbar />
        <div className="wrapper" ref="wrapper">
          {/* Page Header */}
            <UncontrolledCarousel items={carouselItems} />
          {/* Section 1 */}
          <div className="features-1">
            <section className="section section-lg">
              <img
                alt="..."
                className="path"
                src={require("assets/img/path4.png")}
              />
              <Container>
                <img
                  alt="..."
                  className="path"
                  src={require("assets/img/path4.png")}
                />
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Badge color="primary" pill>
                      Services
                    </Badge>
                    <h1 className="title">Step Up Your Game</h1>
                  </Col>
                </Row>
                <Row>
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-primary">
                        <img
                          alt="..."
                          className="bg-blob"
                          src={require("assets/img/feature-blob/primary.png")}
                        />
                        <i className="tim-icons icon-settings"/>
                      </div>
                      <h4 className="info-title">Step-By-Step Overclocking</h4>
                      <hr className="line-primary"/>
                      <p className="description">
                        From CPU to GPU and everything in between we will guide
                        you through the process of getting the most out of your
                        computer hardware.
                      </p>
                      <Button
                        className="btn-link"
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Explore now <i className="tim-icons icon-minimal-right"/>
                      </Button>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-warning">
                        <img
                          alt="..."
                          className="bg-blob"
                          src={require("assets/img/feature-blob/warning.png")}
                        />
                        <i className="tim-icons icon-controller"/>
                      </div>
                      <h4 className="info-title">
                        First Person Shooter Coaching
                      </h4>
                      <hr className="line-warning"/>
                      <p className="description">
                        Submit your clips and follow along as we focus on the
                        mechanics and in-game decision making that will improve
                        your game.
                      </p>
                      <Button
                        className="btn-link"
                        color="warning"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Explore now <i className="tim-icons icon-minimal-right"/>
                      </Button>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-success">
                        <img
                          alt="..."
                          className="bg-blob"
                          src={require("assets/img/feature-blob/success.png")}
                        />
                        <i className="tim-icons icon-paper"/>
                      </div>
                      <h4 className="info-title">Stay Informed</h4>
                      <hr className="line-success"/>
                      <p className="description">
                        Your one stop for all the latest gaming peripherals and
                        overclocking news to help you stay ahead of the
                        competition.
                      </p>
                      <Button
                        className="btn-link"
                        color="success"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Explore now <i className="tim-icons icon-minimal-right"/>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
          {/*prototype*/}
          <section className="section section-about-us">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">Why Signup for PC Overclocker?</h2>
                  <h5 className="description">
                    According to research done by NVIDIA, improvements in frames-per-second enhance player performance
                    in first person shooters.
                    Here at PC Overclocker, our goal is to guide you through the process of getting the most out of your
                    PC. Whether you are a beginner or experienced in overclocking, our goal is to simplify the process
                    for you with
                    guided voice or video sessions tailored to your specific computer hardware and needs.
                  </h5>
                </Col>
              </Row>
              <Col>
              <Row>
                <Line data={data} options={options} />
              </Row>
              </Col>
              <div className="separator separator-info"></div>
              <div className="section-story-overview">
                <Row>
                  <img
                    alt="..."
                    className="shapes triangle"
                    src={require("assets/img/triunghiuri.png")}
                  />
                  <img
                    alt="..."
                    className="shapes circle"
                    src={require("assets/img/cercuri.png")}
                  />
                  <Col md="6">
                    <div
                      className="image-container image-left"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/1234.png") + ")"
                      }}
                    >
                      <p className="blockquote blockquote-info">
                        "Over the span of the satellite record, Arctic sea ice has
                        been declining significantly, while sea ice in the
                        Antarctichas increased very slightly" <br></br>
                        <br></br>
                        <small>-NOAA</small>
                      </p>
                    </div>
                    <div
                      className="image-container image-left-bottom"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/1234.png") + ")"
                      }}
                    ></div>
                  </Col>
                  <Col md="5">
                    <div
                      className="image-container image-right"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/1234.png") + ")"
                      }}
                    ></div>
                    <h3>
                      So what does the new record for the lowest level of winter
                      ice actually mean
                    </h3>
                    <p>
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens with climate change. Even if the
                      Arctic continues to be one of the fastest-warming regions of
                      the world, it will always be plunged into bitterly cold
                      polar dark every winter. And year-by-year, for all kinds of
                      natural reasons, there’s huge variety of the state of the
                      ice.
                    </p>
                    <p>
                      For a start, it does not automatically follow that a record
                      amount of ice will melt this summer. More important for
                      determining the size of the annual thaw is the state of the
                      weather as the midnight sun approaches and temperatures
                      rise. But over the more than 30 years of satellite records,
                      scientists have observed a clear pattern of decline,
                      decade-by-decade.
                    </p>
                    <p>
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens with climate change. Even if the
                      Arctic continues to be one of the fastest-warming regions of
                      the world, it will always be plunged into bitterly cold
                      polar dark every winter. And year-by-year, for all kinds of
                      natural reasons, there’s huge variety of the state of the
                      ice.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
          <DemoFooter />

        </div>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(
  mapStateToProps,
  actions
)(LandingPage)

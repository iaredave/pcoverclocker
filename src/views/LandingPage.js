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
import ColorNavbar from "components/Navbars/ColorNavbar.js"
import ScrollDown from "components/ScrollDown/ScrollDown.js"
import PresentationHeader from "components/Headers/PresentationHeader.js"
import DemoFooter from "components/Footers/DemoFooter.js"
import { Line } from 'react-chartjs-2';


// Sections for this page
// (we've divided this page into multiple react components to make it a bit more readable)
import Info from "./PresentationSections/Info.js"
import BasicComponents from "./PresentationSections/BasicComponents.js"
import Cards from "./PresentationSections/Cards.js"
import Content from "./PresentationSections/Content.js"
import Sections from "./PresentationSections/Sections.js"
import Examples from "./PresentationSections/Examples.js"
import FreeDemo from "./PresentationSections/FreeDemo.js"
import Icons from "./PresentationSections/Icons.js"
import Features from "./PresentationSections/Features.js"
import Testimonials from "./PresentationSections/Testimonials.js"
import Pricing from "./PresentationSections/Pricing.js"
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

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

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
          <div className="page-header">
            {/*<div
              className="page-header-image"
              data-parallax={true}
              style={{
                backgroundImage:
                  "url(" +
                  require("assets/img/emmanuel-tBG35b1ju2U-unsplash.jpg") +
                  ")"
              }}
            />*/}
            <img
              alt="..."
              className="path"
              src={require("assets/img/blob.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/path2.png")}
            />
            <img
              alt="..."
              className="shapes triangle"
              src={require("assets/img/triunghiuri.png")}
            />
            <img
              alt="..."
              className="shapes wave"
              style={{marginLeft: "80%"}}
              src={require("assets/img/waves.png")}
            />
            <img
              alt="..."
              className="shapes squares"
              style={{margin: "50%"}}
              src={require("assets/img/patrat.png")}
            />
            <img
              alt="..."
              className="shapes circle"
              src={require("assets/img/cercuri.png")}
            />
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" lg="6" md="7">
                  <h2 className="description">Overclocking &</h2>
                  <h1 className="title">In-Game Coaching</h1>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto text-center" lg="6" md="7">
                  {this.state.fading && (
                    <Button
                      className="btn-simple btn-danger"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Sign Up Today
                    </Button>
                  )}
                </Col>
              </Row>
            </Container>
          </div>
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
          <div className="section section-about-us">
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
                  <Line data={data} />
                </Col>
              </Row>
              <div className="separator separator-info"></div>
              <div className="section-story-overview">
                <Row>
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
          </div>
          <DemoFooter />

        </div>
      </>
    )
  }
}

export default LandingPage

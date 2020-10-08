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

class Home extends React.Component {
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
                      Level Up Today
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
                        <i className="tim-icons icon-settings" />
                      </div>
                      <h4 className="info-title">Step-By-Step Overclocking</h4>
                      <hr className="line-primary" />
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
                        Explore now <i className="tim-icons icon-minimal-right" />
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
                        <i className="tim-icons icon-controller" />
                      </div>
                      <h4 className="info-title">
                        First Person Shooter Coaching
                      </h4>
                      <hr className="line-warning" />
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
                        Explore now <i className="tim-icons icon-minimal-right" />
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
                        <i className="tim-icons icon-paper" />
                      </div>
                      <h4 className="info-title">Stay Informed</h4>
                      <hr className="line-success" />
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
                        Explore now <i className="tim-icons icon-minimal-right" />
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </div>
      </>
    )
  }
}

export default Home

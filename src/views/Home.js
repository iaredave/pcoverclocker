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
  Button,
  Navbar,
  NavbarBrand,
  UncontrolledCollapse,
  Nav,
  NavItem,
  NavLink, Badge
} from "reactstrap"

class Home extends React.Component {
  constructor(props) {
    super(props)
    // Don't call this.setState() here!
    this.state = {fading: true}
  }

  componentDidMount() {
    document.body.classList.add("home-page")
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    this.refs.wrapper.scrollTop = 0
  }
  componentWillUnmount() {
    document.body.classList.remove("home-page")
  }
  render() {
    return (
      <>
        <ColorNavbar />
        <div className="wrapper" ref="wrapper">
          <div className="page-header header-filter">
            <div
              className="page-header-image"
              data-parallax={true}
              style={{
                backgroundImage:
                  "url(" +
                  require("assets/img/emmanuel-tBG35b1ju2U-unsplash.jpg") +
                  ")",
              }}
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
                  {this.state.fading && <Button
                    className="btn-simple btn-danger"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Level Up Today
                  </Button>}
                </Col>
              </Row>
            </Container>
          </div>
            <Container>
              <div className="features-4">
                <Container>
                  <Row>
                    <Col className="ml-auto mr-auto" md="8">
                      <Badge color="primary" pill>
                        Insight
                      </Badge>
                      <h1 className="title">Full-Funnel Social Analytics</h1>
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
                          <i className="tim-icons icon-user-run" />
                        </div>
                        <h4 className="info-title">Social Conversations</h4>
                        <p className="description">
                          Gain access to the demographics, psychographics, and
                          location of unique people.
                        </p>
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
                          <i className="tim-icons icon-atom" />
                        </div>
                        <h4 className="info-title">Analyze Performance</h4>
                        <p className="description">
                          Unify data from Facebook, Instagram, Twitter, LinkedIn,
                          and Youtube to gain rich insights.
                        </p>
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
                          <i className="tim-icons icon-gift-2" />
                        </div>
                        <h4 className="info-title">Measure Conversions</h4>
                        <p className="description">
                          Track actions taken on your website, understand the impact
                          on your bottom line.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Container>
          </div>

      </>
    )
  }
}

export default Home

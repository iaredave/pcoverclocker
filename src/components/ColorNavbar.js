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
import {Link} from "react-router-dom"
import {connect} from "react-redux"

import * as actions from "../actions"

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap"

class ColorNavbar extends React.Component {
  state = {
    navbarColor: "navbar-transparent",
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbarColor)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeNavbarColor)
  }

  signOut = () => {
    this.props.signOut()
  }

  changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      this.setState({
        navbarColor: "bg-info",
      })
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      this.setState({
        navbarColor: "navbar-transparent",
      })
    }
  }

  render() {
    return (
      <>
        <Navbar className={"fixed-top " + this.state.navbarColor} expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand to="/home" tag={Link} id="tooltip6619950104">
                <span>PC•</span> Overclocker
              </NavbarBrand>
              <UncontrolledTooltip delay={0} target="tooltip6619950104">
                Return To Home
              </UncontrolledTooltip>
              <button className="navbar-toggler" id="navigation">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <UncontrolledCollapse navbar toggler="#navigation">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      PC• <span>Overclocker</span>
                    </a>
                  </Col>
                  <Col className="collapse-close text-right" xs="6">
                    <button className="navbar-toggler" id="navigation">
                      <i className="tim-icons icon-simple-remove" />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle caret color="default" nav>
                    <i className="tim-icons icon-app" />
                    Services
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-with-icons dropdown-black">
                    <DropdownItem to="/index" tag={Link}>
                      <i className="tim-icons icon-paper" />
                      GPU/CPU Overclock
                    </DropdownItem>
                    <DropdownItem to="/presentation" tag={Link}>
                      <i className="tim-icons icon-bullet-list-67" />
                      RAM Tuning
                    </DropdownItem>
                    <DropdownItem
                      href="https://demos.creative-tim.com/blk-design-system-pro-react/#/documentation/overview?ref=blkdspr-pages-navbar"
                      target="_blank"
                    >
                      <i className="tim-icons icon-book-bookmark" />
                      Game Specific Coaching
                    </DropdownItem>
                    <DropdownItem
                      href="https://demos.creative-tim.com/blk-design-system-pro-react/#/documentation/overview?ref=blkdspr-pages-navbar"
                      target="_blank"
                    >
                      <i className="tim-icons icon-book-bookmark" />
                      PC FPS Mechanics Coaching
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle caret color="default" nav>
                    <i aria-hidden={true} className="tim-icons icon-paper" />
                    <p>Blog</p>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-black" right>
                    <DropdownItem to="/sections#headers" tag={Link}>
                      <i className="tim-icons icon-app" />
                      PC Peripherals
                    </DropdownItem>
                    <DropdownItem to="/sections#features" tag={Link}>
                      <i className="tim-icons icon-settings" />
                      Computer Hardware
                    </DropdownItem>
                    <DropdownItem to="/sections#blogs" tag={Link}>
                      <i className="tim-icons icon-align-left-2" />
                      Gaming Software
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <Button
                  className="btn-round"
                  color="primary"
                  href=""
                  target="_blank"
                >
                  Account
                </Button>
                <NavItem>
                  <Button
                    className="nav-link"
                    color="default"
                    href=""
                    size="sm"
                    target="_blank"
                  >
                    <p>Sign Up</p>
                  </Button>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps, actions)(ColorNavbar)

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
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import ColorNavbar from "components/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

class Error500 extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("error-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("error-page");
  }
  render() {
    return (
      <>
        <ColorNavbar />
        <div className="wrapper" ref="wrapper">
          <div className="page-header error-page header-filter">
            <div
              className="page-header-image"
              style={{
                backgroundImage:
                  "url(" + require("assets/img/randy-colas.jpg") + ")"
              }}
            />
            <Container>
              <Row>
                <Col md="12">
                  <h1 className="title">500</h1>
                  <h2 className="description">Error :(</h2>
                  <h4 className="description">
                    We are sorry. This was unexpected.
                  </h4>
                </Col>
              </Row>
            </Container>
          </div>
          <DemoFooter />
        </div>
      </>
    );
  }
}

export default Error500;

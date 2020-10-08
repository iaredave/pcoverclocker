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
import "./styles.css"
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class ScrollDown extends React.Component {
  render() {
    return (
      <>
        <div className="overlay" style={{}}>
          <i style={{display: "block", textAlign: "center" }} className="tim-icons icon-minimal-down"/>
        </div>
      </>
    );
  }
}

export default ScrollDown;

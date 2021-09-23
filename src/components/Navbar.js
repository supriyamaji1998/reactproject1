import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";

import { Link } from "react-router-dom";
export default function NavbarBox(props) {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg={props.mode === "light" ? "primary" : "dark"}
        variant="dark"
        style={{
          color: "white",
          textDecoration: "none",
          font: "23px",
          fontWeight: "1000",
        }}
      >
        {props.title}
        {/* <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            font: "23px",
            fontWeight: "1000",
          }}
        >
          {props.title}
        </Link> */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ marginRight: "19px" }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Link
              to="/"
              style={{
                display: "flex ",
                justifyContent: "center",
                margin: "0px 19px",
                color: "white",
                textDecoration: "none",
                font: "15px",
              }}
            >
              {props.navlist1}
            </Link> */}
            {/* <Link
              to="/about"
              style={{
                display: "flex ",
                justifyContent: "center",
                margin: "0px 19px",
                color: "white",
                textDecoration: "none",
                font: "15px",
              }}
            >
              {props.navlist2}
            </Link> */}
          </Nav>
          <Form className="d-flex text-light" style={{ margin: "0px 19px" }}>
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Enable Darkmode"
                onClick={props.tooglemode}
              />
            </Form>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}


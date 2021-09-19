import React from "react";
// import { Container } from "react-bootstrap";
import { Navbar, Nav, Form } from "react-bootstrap";
// import { Link } from "react-router-bootstrap";
import { Link } from "react-router-dom";
export default function NavbarBox(props) {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg={props.mode === "light" ? "primary" : "dark"}
        variant="dark"
      >
        {/* <Container> */}
        {/* <Link to="/">
          <Navbar.Brand href="/" style={{ marginLeft: "19px" }}>
            {props.title}
          </Navbar.Brand>
          {props.title}
        </Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ marginRight: "19px" }}
        /> */}
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="me-auto">
            <Link to="/">
              <Nav.Link
                style={{
                  display: "flex ",
                  justifyContent: "center",
                  margin: "0px 19px",
                }}
              >
                {props.navlist1}
              </Nav.Link>
            </Link>
            <Link to="/about">
              <Nav.Link
                style={{
                  display: "flex ",
                  justifyContent: "center",
                  margin: "0px 19px",
                }}
              >
                {props.navlist2}
              </Nav.Link>
            </Link>
          </Nav> */}
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
        {/* </Container> */}
      </Navbar>
    </div>
  );
}

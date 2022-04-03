import React from "react";
import { useState } from "react";
import logo from "../../images/logo.png";
import { Navbar, Col, Row, Container, Nav, Form, FormControl } from "react-bootstrap";
import "./Header.css";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Salider from "../Salider/Salider";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";

const Header = () => {
  const [count, setCount] = useState(0);
  function updata() {
    setCount(count + 1);
  }
  return (
    <div>
      <Col md={12}>
        <Row>
          <Navbar className="header-full" bg="dark" variant={"dark"} expand="lg" fixed="top">
            <Container fluid>
              <Navbar.Brand href="#">
                <img className="logo" src={logo}></img>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Form className="d-flex header-from">
                <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              </Form>
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                  <Nav.Link href="#action1" className="nav-link">
                    <span className="gust">Hello Gust</span>
                    <span className="headerLink">Sing In</span>
                  </Nav.Link>
                  <Nav.Link href="#action1" className="nav-link">
                    <span className="gust">Return</span>
                    <span className="headerLink">& orders</span>
                  </Nav.Link>
                  <Nav.Link href="#action1" className="nav-link">
                    <span className="gust">your</span>
                    <span className="headerLink">prime</span>
                  </Nav.Link>
                  <Nav.Link>
                    <span className="basket">
                      <LocalGroceryStoreIcon />
                    </span>
                    <span className="basket">{count}</span>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>
      </Col>

      <div className="compnents">
        <Salider></Salider>
        <Cart dataUpdat={updata} />
        <Footer />
      </div>
    </div>
  );
};

export default Header;

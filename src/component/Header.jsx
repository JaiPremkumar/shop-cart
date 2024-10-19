import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import React from "react";
import Cart from './Cart'

const Header=()=>{
    return(
       <div className="col-12">
        <Navbar expand="lg" bg="primary" className="sticky-top ">
      <Container>
        <Navbar.Brand href="#home"><h1 className="text-light text-bold">Shop-Cart</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Product</Nav.Link>
            <Nav.Link href="#home">ABOUT</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Cart/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </div>
    )
}

export default Header;
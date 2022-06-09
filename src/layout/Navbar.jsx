import React, { useState, useContext } from 'react';
import Logo from '../assets/images/logo.png';
import {Col, Row, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';


// CSS
import './navbar.scss'

const NavbarTest = () => {




   // SCROLL
  // useLocation - fortæller noget om url'en
  let location = useLocation();

  
  // Hvis der er en #noget i url'en
  if(location.hash) {

    // Find et html-element som matcher hash - ud fra ID
    const scrollToThisElement = document.querySelector(location.hash);
    // console.log(scrollToThisElement);

    if (scrollToThisElement) {
      const y = scrollToThisElement.getBoundingClientRect().top + window.scrollY; // find ud af hvor langt nede på siden #noget findes
      console.log(y)
      window.scrollTo({top: y, behavior: "smooth"})
    }

  }

  return (


<Navbar sticky="top" className="navbar_color "  expand="lg">
  <Container>

    <Navbar.Brand className="d-none d-lg-block text_bold" href="/"><img   height="50px" src={Logo}/></Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav ">
      <Nav className="me-auto">
        <Nav.Link className="text_bold ml-3" href="#about">Om os</Nav.Link>
        <Nav.Link className="text_bold  ml-3" href="#produkter">Produkter</Nav.Link>
        <Nav.Link className="text_bold  ml-3" href="#kontakt">Kontakt</Nav.Link>
        {/* <Nav.Link className="text_bold  ml-3" href="#newsletter">Newsletter</Nav.Link> */}
        <Nav.Link className="text_bold  ml-3" href="/admin">Admin Page</Nav.Link>
      </Nav>
    
      <Form className="d-flex float-end ">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2 d-none d-lg-block"
          aria-label="Search"
        />
        
        <Button variant="outline-success d-none d-lg-block">Search</Button>
       
      </Form>
    </Navbar.Collapse> 

  </Container>
</Navbar>
   
    

  


  )
}

export default NavbarTest
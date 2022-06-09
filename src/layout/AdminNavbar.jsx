import React, {useContext} from 'react';
import {Col, Row, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/logo.png';

import ArrowBack from '../assets/images/arrow-118-64.png';




const AdminNavbar = () => {

 

  return (
    <Navbar  className="navbar_color "  expand="lg">
    <Container>
      
      <Col className="col-1 ">
    <Nav.Link className="text_bold  d-none d-lg-block  ml-3" href="/" ><img  className="img-fluid" alt="arrow_back" src={ArrowBack}/></Nav.Link>
    </Col>
    
    <Col className="col-5 text-end">
      <Navbar.Brand className=" text_bold" href="/"><img   height="50px" src={Logo}/></Navbar.Brand>
  </Col>
    
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="me-auto">
     
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
   {/* <button onClick={signout}>LOGUD</button> */}
    </Container>
  </Navbar>


    
  )
}

export default AdminNavbar;
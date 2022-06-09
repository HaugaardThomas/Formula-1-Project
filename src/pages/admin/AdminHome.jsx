import React, {useContext} from 'react';
import {Col, Row, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const AdminHome = () => {
    return (
        <Navbar>
        <Nav.Link href="/admin/admintours">Admin Tours</Nav.Link>
        <Nav.Link href="/admin/adminaboutret">Admin About Ret</Nav.Link>
        <Nav.Link href="/admin/admincontactslet">Admin Contact Beskeder Slet</Nav.Link>
        <Nav.Link href="/admin/adminnewsletterslet">Admin Newsletter Emails  / Til slet</Nav.Link>
        <Nav.Link href=" /admin/admincontactinformationslet">Admin Contact Information Ret</Nav.Link>
        <Nav.Link href=" /admin/adminfooterret">Admin Footer Ret</Nav.Link>
        

       
       
      
    </Navbar>
    ) 
}

export default AdminHome;
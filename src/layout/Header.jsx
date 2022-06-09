import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import './Header.scss';
import Logo from '../assets/images/logo.ico';
import HeroImg from '../assets/images/hero.2e5e6271d0771f617e3e.png';
import Arrow from '../assets/images/down-arrow.png';

const Header = () => {
  return (
    <Container fluid className="container_header">
        <Row>
            <Col className="col-1">
                <img  className="img-fluid d-none d-lg-block" src={Logo} alt="formel1_logo"/>
            </Col>
        </Row>
        
       
        <Row className="text-center justify-content-center">
           
            <Col className="col-lg-1 col-12 header_col_events">Events</Col>
           
            <Col className="col-3"><img className="img-fluid " alt="formula1_logo_med_tekst" src={HeroImg}/></Col>
         
             <Col className="col-lg-1 col-12 header_col_travels"> <div>Travels</div></Col>
        </Row>

        <Row className=" text-center row_arrow_down">
            <Col className="col-12 col_header_arrow">
              <img className="img-fluid arrow_bounce" alt="arrow" src={Arrow}/>
            </Col>
        </Row>
     
    </Container>
  )
}

export default Header
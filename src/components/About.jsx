import React, {useState, useEffect} from 'react';

import parse from 'html-react-parser'; 
import {Col, Row, Container} from 'react-bootstrap';


// SASS
import './about.scss';

// APIKALD
import { hentAbout } from "../helpers/apikald";


const About = () => {


   // STATES
   const [about, setAbout] = useState();
   const [fejl, setFejl] = useState();
   const [loading, setLoading] = useState();
 
   // Når component er loadet og klar
   useEffect(() => {
   
     setLoading(true)
 
     hentAbout().then( response => {
       if ( response ) {
 
         setAbout(response)
         setFejl(false)
 
       } else {
         
         setFejl(true);
         setAbout();
       }
 
       setLoading(false);
     })
     
   }, [])

  return (
    
    <Container className="container_omos" id="about">
    

<Row className="text-center ">
  <Col className="col-12 col_omos_title">
    <h1 className="h1_title_omos">Om os</h1>
  </Col>
  {/* Title var med i api men ikke vidste i design, så har lavet den her men udkommenteret den så den ikke vises på siden */}
  {/* <Row>
  {about &&
  <Col className="col-12 ">
    <h1>{about.title}</h1>
  </Col>
  }
  </Row> */}
</Row>
{about &&
<Row>

  <Col className="col-7 col_about_content">{parse(about.content)}</Col>
  <Col className="col-5 col_about_img"><img className="img-fluid"  alt="about_img" src={"http://localhost:5099/images/about/" + about.image} /></Col>
</Row>
 }
{
 loading && <h1>Loading ...</h1>
}

{
 fejl && <h1> Der er sket en fejl ...</h1>
}

    </Container>

    
  )
}

export default About;
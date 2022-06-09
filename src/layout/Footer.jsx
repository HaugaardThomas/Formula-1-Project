import React, {useState, useEffect} from 'react';
import {Col, Row, Container} from 'react-bootstrap';

// APIKALD
import {hentFooter} from '../helpers/apikald';

// SASS 
import './footer.scss';

const Footer = () => {

       // STATES
       const [footer, setFooter] = useState();
       const [fejl, setFejl] = useState();
       const [loading, setLoading] = useState();
     
       // Når comp er loadet og klar
       useEffect(() => {
       
         setLoading(true)
     
         hentFooter().then( response => {
           if ( response ) {
     
            setFooter(response)
             setFejl(false)
     
           } else {
             
             setFejl(true);
             setFooter();
           }
     
           setLoading(false);
         })
         
       }, [])

  return (
  <Container fluid className="container_footer mt-5">
 {footer &&
    <Row className="text-center">
      <Col className="col-12 col_footer">@ {footer.footertext.substring(0,7)} <strong className="footer_strong_red">{footer.footertext.substring(7, 19)}</strong> {footer.footertext.substring(19, )}</Col>
    </Row>
    }
    
{
 loading && <h1>Loading ...</h1>
}

{
 fejl && <h1>Der er opstået en fejl ...</h1>
}

  </Container>
  )
}

export default Footer;
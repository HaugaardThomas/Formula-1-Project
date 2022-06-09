import React, {useState, useEffect} from 'react';

import {Col, Row, Container, Button} from 'react-bootstrap';
import parse from 'html-react-parser'; 

// APIKALD
import { hentAlleTours, hentAlleToursTeaser } from '../helpers/apikald';

// RATINGS 
import Rating from '@mui/material/Rating';

// MODAL 
import ProduktModal from '../layout/Modal';

// SASS 
import './produkter.scss';

const Produkter = () => {


    // STATES
    const [tours, setTours] = useState();
    const [fejl, setFejl] = useState();
    const [loading, setLoading] = useState();
  
    useEffect(() => {
    
      setLoading(true)
  
      hentAlleTours().then( response => {
        if ( response ) {
  
          setTours(response)
          setFejl(false)
  
        } else {
          
          setFejl(true);
          setTours();
        }
  
        setLoading(false);
      })
      
    }, [])

   
  return (
   <Container className="container_produkter" id="produkter">
    <Row className="text-center row_rejse_title">
  <Col className="col-12 col_produkter_title">
    <h1 className="h1_title_produkter">Rejsemål</h1>
  </Col>
</Row>

<Row>
  { tours && tours.map( t => 
  <Col className="col-lg-4 col-md-6 col-12">
    <div key={t._id} className="div_cards">
      <img className="img-fluid" src={"http://localhost:5099/images/tours/" + t.coverimage}/>
      <div className="div_content_padding">
      <h4 className="h4_content">{t.title} <strong className="float-end"><Rating name="read-only" value={t.rating} readOnly /></strong></h4>
      <p className="p_dato">{t.traveldate}</p>
      <p className="p_teaser">{parse(t.teaser)}</p>

    {/* giver data til "Modal" (child component)*/}
      <ProduktModal enTour={t} />
     
    
      </div>
    </div>
  </Col>
  )
  }
</Row>

{
 loading && <h1>Loading ...</h1>
}

{
 fejl && <h1>Der er opstået en fejl ...</h1>
}

   </Container>
  )
}

export default Produkter;
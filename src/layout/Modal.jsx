import React, {useState, useEffect} from 'react';
import { Button, Modal, Col, Container, Row } from 'react-bootstrap';
import './modal.scss';

import parse from 'html-react-parser';

// RATINGS 
import Rating from '@mui/material/Rating';

// APIKALD
import { hentAlleTours } from '../helpers/apikald';

import SliderModal from './Slider';


{/* henter data fra parent component (produkter)*/}
export default function ProductModal({enTour}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  

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
    <>
    <Container fluid>
     
      <Button className="button_laes_mere" onClick={handleShow}>
        Læs Mere
      </Button>

    
    
   
       
      <Modal show={show} onHide={handleClose}>
    
        <Modal.Header closeButton>  
          <Modal.Title>Monaco</Modal.Title>
        </Modal.Header>
 
        <Modal.Body >
          <SliderModal img={enTour}/>
              
            {/* "enTour" rendere "modal" med adgang/given (til) data/prop fra parent component ("produkter" side) / */}
           <h1 className="p_modal_title">{enTour.title} <strong className="float-end"><Rating name="read-only" value={enTour.rating} readOnly /></strong></h1>
           <h4>Du får:</h4>
           <p className="p_modal_content">{parse(enTour.content)}</p>
           <h5>Værelsestype</h5>
           <p className="p_modal_roomtype">{parse(enTour.roomtype)}</p>
           <br/>
           <p className="p_modal_traveldate">{enTour.traveldate}</p>
           
        
        </Modal.Body>
 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>


      </Modal>
       
   


{
 loading && <h1>Loading ...</h1>
}

{
 fejl && <h1>Der er opstået en fejl ...</h1>
}
</Container>
    </>
  );
}


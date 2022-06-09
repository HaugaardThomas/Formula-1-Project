import React, {useState, useEffect} from 'react';
import { Button, Modal, Col, Container, Row } from 'react-bootstrap';

import {sletMail} from '../helpers/apikald';

export default function NewsletterModal() {
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [fejl, setFejl] = useState();
    const [loading, setLoading] = useState();
    const [mail, setMail] = useState();
    const [besked, setBesked] = useState();



    const handleSlet = (e) => {
        e.preventDefault();
      

        setLoading( true )
        {/* Targets elementet/key'en med valuen "email" */}
        sletMail(e.target.elements.email.value).then( response => {
          if ( response ) {
            
            setBesked("Du har nu slettet mailen fra vores nyhedsbrev"  )
          } else {
            setBesked("Den indtastet email findes ikke i vores system")
           
          }
    
          setLoading(false);
        })
    
     
    }
  
    return (
      <>
        <h6 variant="primary" onClick={handleShow}>
          Ønsker du din mail slettet fra vores list? KLIK HER
        </h6>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Newsletter Unsubscribe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={handleSlet}>
          {besked && <h2 className="alert text-center"><strong className="besked_newsletter">{besked}</strong></h2>}
          <label>EMAIL <br/>
        <input type="text" name="email" />
    </label>
    <button  >Slet Mail</button>
    </form>
              
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  
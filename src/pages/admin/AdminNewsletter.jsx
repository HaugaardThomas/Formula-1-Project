import React, {useState, useEffect} from 'react';

import { FcEditImage, FcDeleteRow } from 'react-icons/fc';

import { Link } from 'react-router-dom';
import {Col, Row, Container, Nav} from 'react-bootstrap';


// SCSS
import './admincontactslet.scss'

// APIKALD
import { hentAlleEmails, sletNewsletterMail } from "../../helpers/apikald";




const  AdminNewsletter = ()  => {
        // STATES
        const [newsletter, setNewsletter] = useState();
        const [fejl, setFejl] = useState();
        const [loading, setLoading] = useState();
        const [besked, setBesked] = useState();
     
        
      useEffect(() => {
      
        setLoading(true)
     
        hentAlleEmails().then( response => {
          if ( response ) {
     
             setNewsletter(response)
            setFejl(false)
     
          } else {
            
            setFejl(true);
            setNewsletter();
          }
     
          setLoading(false);
        })
        
     
        
      }, [besked])
     
      const handleSlet = (id) => {
         // Hvis der bliver trykket Ja/ok = true så sletter den, hvis der bliver trykket nej/cancel = false så sletter den ikke
         if(window.confirm(" Vil du slette?" ) === true ) {
             
         
     
     
         setLoading( true )
     
         sletNewsletterMail( id ).then( response => {
           if ( response ) {
     
             
             setBesked("Du har slettet en besked med id : " + id )
             
           } else {
             
            
             setBesked("Fejl er sket - Der blev ikke slettet noget")
            
           }
     
           setLoading(false);
         })
     
      }
     }
     
       return (
         <Container>
             {newsletter && newsletter.map(n => 
                 <div key={n._id}>
     <Row className="text-center">
         <div className="div_card_beskeder">
     <div>{n.name}</div> <br/>
     <div>{n.email}</div> <br/>
     <div>{n.received}</div> <br/>
     <button onClick={() => handleSlet(n._id)}>SLET BESKED</button>
     
     </div>
     </Row>
     </div>
     )}
         </Container>
       )
}

export default AdminNewsletter;
import React, {useState, useEffect} from 'react';

import { FcEditImage, FcDeleteRow } from 'react-icons/fc';

import { Link } from 'react-router-dom';
import {Col, Row, Container, Nav} from 'react-bootstrap';


// SCSS
import './admincontactslet.scss'

// APIKALD
import { hentAlleBeskeder, sletBesked } from "../../helpers/apikald";

const AdminContactSlet = () => {

      // STATES
   const [beskeder, setBeskeder] = useState();
   const [fejl, setFejl] = useState();
   const [loading, setLoading] = useState();
   const [besked, setBesked] = useState();

   
 useEffect(() => {
 
   setLoading(true)

   hentAlleBeskeder().then( response => {
     if ( response ) {

        setBeskeder(response)
       setFejl(false)

     } else {
       
       setFejl(true);
       setBeskeder();
     }

     setLoading(false);
   })
   

   
 }, [besked])

 const handleSlet = (id) => {
    // Hvis der bliver trykket Ja/ok = true så sletter den, hvis der bliver trykket nej/cancel = false så sletter den ikke
    if(window.confirm(" Vil du slette?" ) === true ) {
        
    


    setLoading( true )

    sletBesked( id ).then( response => {
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
        {beskeder && beskeder.map(k => 
            <div key={k._id}>
<Row className="text-center">
    <div className="div_card_beskeder">
<div>{k.name}</div> <br/>
<div>{k.company}</div> <br/>
<div>{k.email}</div> <br/>
<div>{k.phone}</div> <br/>
<div className="div_beskeder_message"><strong>BESKED:</strong> <br/><br/>{k.message}</div> <br/>
<div>{k.received}</div> <br/>
<button onClick={() => handleSlet(k._id)}>SLET BESKED</button>

</div>
</Row>
</div>
)}
    </Container>
  )
}

export default AdminContactSlet;
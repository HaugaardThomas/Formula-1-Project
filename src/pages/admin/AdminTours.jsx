import React, {useState, useEffect} from 'react';

import { FcEditImage, FcDeleteRow } from 'react-icons/fc';

import { Link } from 'react-router-dom';
import {Col, Row, Container, Nav} from 'react-bootstrap';


// APIKALD
import { hentAlleTours, sletTour } from "../../helpers/apikald";

// CSS
import './admintours.scss'

const AdminTours = () => {

    

   // STATES
   const [tours, setTours] = useState();
   const [fejl, setFejl] = useState();
   const [loading, setLoading] = useState();
   const [besked, setBesked] = useState();

   
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
   

   
 }, [besked])

 const handleSlet = (id) => {
    // Hvis der bliver trykket Ja/ok = true så sletter den, hvis der bliver trykket nej/cancel = false så sletter den ikke
    if(window.confirm(" Vil du slette?" ) === true ) {
        
    


    setLoading( true )

    sletTour( id ).then( response => {
      if ( response ) {

        
        setBesked("Du har slettet en tour med id : " + id )
        
      } else {
        
       
        setBesked("Fejl er sket - Der blev ikke slettet noget")
       
      }

      setLoading(false);
    })

 }
}

  return (
    <Container>


   

    <Row className="text-center">

    
       
         <Col className="col-2"><Nav.Link href="/admin/admintoursopret"> Opret</Nav.Link></Col>
      
        <Col className="col-2">Coverimage</Col>
        <Col className="col-2">Title</Col>
        <Col className="col-2">Ret</Col>
        <Col className="col-2">Slet</Col>
    
 

        {
            
            
            tours && tours.map(t => 
            
                <Row key={t._id}>
                <Col className="col-2 offset-2"><img src={"http://localhost:5099/images/tours/" + t.coverimage} width="80" alt="thumb_image"/></Col>
                <Col className="col-2">{t.title}</Col>
                <Col className="icon col-2"><Nav.Link href={"/admin/admintoursret/" + t._id}><FcEditImage/></Nav.Link></Col>
                <Col className="icon pointer col-2"><FcDeleteRow onClick={() => handleSlet(t._id)}/></Col>
            </Row>

                )
        }

    
    </Row>
       



    {
        loading && <h1>Loading ...</h1>
      }

      {
        fejl && <h1> Der er sket en fejl ...</h1>
      }
    </Container>
  )
}

export default AdminTours;
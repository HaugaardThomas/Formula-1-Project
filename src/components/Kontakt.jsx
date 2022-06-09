import React, {useState, useEffect} from 'react';
import {Col, Row, Container} from 'react-bootstrap';

// APIKALD
import {hentKontaktInformation, sendBesked} from '../helpers/apikald';


// SASS
import './kontakt.scss';

const Kontakt = () => {

     // STATES
     const [kontakt, setKontakt] = useState();
     const [fejl, setFejl] = useState();
     const [loading, setLoading] = useState();
     const [besked, setBesked] = useState();
   
     // Når component er loadet og klar
     useEffect(() => {
     
       setLoading(true)
   
       hentKontaktInformation().then( response => {
         if ( response ) {
   
          setKontakt(response)
           setFejl(false)
   
         } else {
           
           setFejl(true);
           setKontakt();
         }
   
         setLoading(false);
       })
       
     }, [])

     const handleSubmit = e => {

      e.preventDefault(); // for at undgå at siden reloader ved "submit"
    
      // Her bliver beskeden postet til API 
      const beskeden = new FormData(e.target)
    
      setLoading(true);
    
      // Send beskeden til apikaldsfilen
      sendBesked(beskeden).then(response => {
    
        if(response){
    
        
          setBesked(beskeden)
          setFejl();
          // tøm formularen
          e.target.reset();
        }else {
         // FEJL
         setFejl(true);
         setBesked();
        }
    
        setLoading(false)
    
      })
    
     }

  return (
   <Container  className="container_kontakt" id="kontakt">
         <Row className="text-center row_kontakt_title">
  <Col className="col-12 col_kontakt_title">
    <h1 className="h1_title_kontakt">Kontakt</h1>
  </Col>
</Row>

<Row>


  {kontakt && 
  <Col className=" col-12 col-lg-6 col-md-6 ">
    <h3 className="h3_kontakt_kontakt_information">Kontakt Information</h3>
    <strong>{kontakt.company}</strong> <br/>
    {kontakt.address} <br/>
    {kontakt.zipcity} <br/>
    {kontakt.country} <br/>
    CVR: {kontakt.cvr} <br/>
    {kontakt.phone} <br/>
    {kontakt.email} <br/> <br/>
    {kontakt.openinghours}

    </Col>
  }
  <Col className="col-6 col-lg-6 col-md-6">
 
  
     {/* { 
     besked && 
  <h6 className="alert col-2">{besked}</h6>
  } */

  besked && <h2 className="alert">Beskeden er sendt</h2>
  
 }
    <h3 className="h3_kontakt_skriv_til_os">Skriv til os</h3>
    <form onSubmit={handleSubmit}>

    <input type="text" name="name" required placeholder="Navn"/> <br/> 
    
    <br/>

    <input type="text" name="company" required placeholder="Firma/Organisation"/> <br/> 
    
    <br/>

    <input type="email" name="email" required placeholder="Email Adresse"/> <br/> 
    
    <br/>
   
    <input type="tel" name="phone" required placeholder="Telefon"/> <br/> 

    <br/>

    <textarea name="message" placeholder='Besked' required maxLength="1000" /> <br/> <br/>

    <button className="button_submit_kontakt" type="submit">Send</button>

    </form>

    
  </Col>
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

export default Kontakt;
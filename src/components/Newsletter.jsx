import React, {useState} from 'react'
import {Col, Row, Container, Nav} from 'react-bootstrap';

// SCSS
import './newsletter.scss';

// MODAL 
import NewsletterModal from '../layout/NewsletterModal';



// API
import {opretSubscription } from '../helpers/apikald';

const OpretNySubscription = () => {


       // STATES
  
 const [fejl, setFejl] = useState();
 const [loading, setLoading] = useState();
 const [besked, setBesked] = useState();

 

    const handleSubmit = (e) => {
    
        e.preventDefault();

         // Sende/post subscription til API
  const nysubscription = new FormData(e.target) // e.target er formularens indhold

  setLoading(true);

  // Send subscription til apikaldsfilen -> api'et
  opretSubscription(nysubscription).then(response => {

    if(response){

    
      setBesked("Ny subscription er oprettet")
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
<Container className="container_newsletter">
<Row className="text-center row_newsletter">
  <Col className="col-12 col_newsletter">
    <h1 className="h1_title_newsletter">Newsletter</h1>
  </Col>
</Row>
<Row className="text-center">
    <Col className="col-12"><h2>Tilmeld dig vores nyhedsbrev og hold dig opdateret</h2></Col>
</Row>
<Row className="text-center">
    <form onSubmit={handleSubmit}>
    {besked && <h2 className="alert text-center"><strong className="besked_newsletter">{besked}</strong></h2>}

    <label>EMAIL <br/>
        <input type="text" name="email" />
    </label>

    <br/> <br/>

    <label> NAME <br/>
        <input type="text" name="name" />
    </label>
   <NewsletterModal/>

<br/> <br/>
<button className="button_newsletter_submit" type="submit" >Opret subscription</button>


    </form>
</Row>
<Row>

</Row>
</Container>

    )
}

export default OpretNySubscription
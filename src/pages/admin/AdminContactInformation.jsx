import React, {useState, useEffect} from 'react';
import {Col, Row, Container} from 'react-bootstrap';

// APIKALD
import {hentKontaktInformation, retContactInformation} from '../../helpers/apikald';

const AdminContactInformation = () => {

    // STATES
    const [kontakt, setKontakt] = useState();
   const [fejl, setFejl] = useState();
   const [loading, setLoading] = useState();
   const [besked, setBesked] = useState();
   const [ updatetoggle, setUpdatetoggle] = useState(false);

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
    
  }, [updatetoggle])

  const handleSubmit = (e) => {

    e.preventDefault(); // undgå reload af siden


// Send/post contact til API
const retcontactinformation = new FormData(e.target) // e.target er formularens indhold

setLoading(true);

// Send contact til apikaldsfilen -> api'et
retContactInformation(retcontactinformation ).then(response => {

if(response){


 setBesked("Contact Information er nu rettet");
 setUpdatetoggle(!updatetoggle); // sæt updatetoggle-state til at være modsatdet den er nu = ændre sig
 e.target.reset(); // nulstil formular
 setFejl();

}else {
setFejl(true);
setBesked();
}

setLoading(false)

})

}


  return (
 <Container>
     <Row className="text-center">
     {besked && <h2 className="alert">{besked}</h2>}
     {kontakt && 
     <form onSubmit={handleSubmit}>
  <Col className=" col-12 ">
  
    <h3 className="h3_kontakt_kontakt_information">Kontakt Information</h3>
    <label>Company: <br/>
    <input type="text" name="company" defaultValue={kontakt.company} /> 
     </label> <br/>
        <label>Adress: <br/>
        <input type="text" name="address" defaultValue={kontakt.address}/>
         </label> <br/>
        <label>Zipcity: <br/>
            <input type="text" name="zipcity" defaultValue={kontakt.zipcity}/>
     </label> <br/>
        <label>Country: <br/>
                <input type="text" name="country" defaultValue={kontakt.country}/> 
        </label> <br/>
         <label>CVR: <br/>
         <input type="text" name="cvr" defaultValue={kontakt.cvr}/>
             </label> <br/>
             <label>Phone: <br/>
            <input type="tel" name="phone" defaultValue={kontakt.phone} />
             </label> <br/>
             <label>Email: <br/>
             <input type="text" name="email" defaultValue={kontakt.email}/> 
             </label> <br/>
            <label>Opening hours: <br/>
            <input type="text" name="openinghours" defaultValue={kontakt.openinghours}/> 
            </label> <br/> <br/>
            <button type="submit" >Ret Contact Information</button>

    </Col></form>
  }
  
{
        loading && <h1>Loading ...</h1>
      }

      {
        fejl && <h1>Der er opstået en fejl ...</h1>
      }
     </Row>
 </Container>
 
  )
}

export default AdminContactInformation
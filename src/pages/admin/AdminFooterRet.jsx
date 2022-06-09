import React, {useState, useEffect} from 'react';
import {Col, Row, Container} from 'react-bootstrap';

// APIKALD
import {hentFooter , retFooter} from '../../helpers/apikald';



  const AdminFooterRet = () => {

  


  // STATES
  const [footer, setFooter] = useState();
  const [fejl, setFejl] = useState();
  const [loading, setLoading] = useState();
  const [besked, setBesked] = useState();
  const [ updatetoggle, setUpdatetoggle] = useState(false);

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
   
 }, [updatetoggle])

 const handleSubmit = (e) => {

   e.preventDefault(); // undgå reload af siden


// Send/post footer til API
const retfooter = new FormData(e.target) // e.target er formularens indhold

setLoading(true);

// Send footer til apikaldsfilen -> api'et
retFooter(retfooter ).then(response => {

if(response){


setBesked("Footer er nu rettet");
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
        {
            footer &&
            <form onSubmit={handleSubmit}>
                <label> Footer text: <br/>
                    <input type="text" name="footertext" defaultValue={footer.footertext} />
                </label>
                <br/><br/>
                <button type="submit" >Ret Footer Text</button>
            </form>
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

export default AdminFooterRet;
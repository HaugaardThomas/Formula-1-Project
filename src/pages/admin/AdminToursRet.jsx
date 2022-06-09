import React, {useState, useEffect} from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser'; 

// APIKALD
import {hentToursUdFraId, retTour} from '../../helpers/apikald';

// Customhook som viser thumbimage
import useShowThumb from '../../hooks/useShowThumb';

const AdminToursRet = () => {

    // Snup id fra url'en - så vi ved hvilken treatment der skal indlæses i formularen/rettes
    const {id} = useParams();

        // STATE
    const [tour, setTour] = useState(); // tour der skal rettes
    const [fejl, setFejl] = useState(false);
    const [loading, setLoading] = useState( false );
    const [besked, setBesked] = useState();
    const [ updatetoggle, setUpdatetoggle] = useState(false);

      // CKEditor-tekst (tekst fra CKEditor - hentes her fra state til textarea)
 const [ editortxt, setEditortxt ] = useState ();
 const [ editortxt2, setEditortxt2] = useState ();
 const [ editortxt3, setEditortxt3] = useState ();

 // "State" til customhook - thumb-image
const [thumb, setThumb] = useShowThumb();
const [thumb3, setThumb3] = useShowThumb();

// Kald API'et og hent den tour (ud fra id) som skal rettes
useEffect(() => {

setLoading(true)

hentToursUdFraId(id).then( response => {
  if ( response ) {

    setTour(response)
    setFejl(false)

  } else {
    
    setFejl(true);
    setTour();
  }

  setLoading(false);
})

}, [updatetoggle])



const handleSubmit = (e) => {

    e.preventDefault(); // undgå reload af siden


// Send/post tour til API
const tourrettet = new FormData(e.target) // e.target er formularens indhold

setLoading(true);

// Send tour til apikaldsfilen -> api'et
retTour( id, tourrettet ).then(response => {

if(response){


 setBesked("Tour er nu rettet");
 setUpdatetoggle(!updatetoggle); // sæt updatetoggle-state til at være modsatdet den er nu = ændre sig
 e.target.reset(); // nulstil formular
 setThumb(); // tøm thumb-image for indhold (data-stream)
 setFejl();

}else {
setFejl(true);
setBesked();
}

setLoading(false)

})

}


  return (
    <div className="text-center">

      <h1>Ret valgte tour</h1>

      {besked && <h2 className="alert">{besked}</h2>}

      { tour && 

      <form onSubmit={handleSubmit}>
          <label>Titel <br/>
              <input type="text" name="title" defaultValue={tour.title} />
          </label>
          <br/> <br/>
     <label>Teaser
           <textarea name="teaser" defaultValue={ editortxt }   style={{ display: "none" } } />
           <CKEditor
            editor={ Editor }
            data={ tour.teaser } // data der skal være i editoren når den loader/opdaterer
            onReady={ (editor) => setEditortxt(editor.data)}
            onChange={( event, editor ) => setEditortxt( editor.getData() )} // gem editoren data/tekst i state ( som bruges af textarea)
            
            />
          </label>
          <br/> <br/>
          <label> Content
             <textarea  name="content" defaultValue={ editortxt2 }  style={{ display: "none" } } />
          <CKEditor
            editor={ Editor }
            data={ tour.content } // data der skal være i editoren når den loader/opdaterer
            onReady={ (editor) => setEditortxt2(editor.data)}
            onChange={( event, editor ) => setEditortxt2( editor.getData() )} // gem editoren data/tekst i state ( som bruges af textarea)
          />
          </label>
          <br/> 
          <label>Roomtype <br/>
              <textarea  name="roomtype" defaultValue={ editortxt3 }  style={{ display: "none" } } />
          <CKEditor
            editor={ Editor }
            data={ tour.roomtype } // data der skal være i editoren når den loader/opdaterer
            onReady={ (editor) => setEditortxt3(editor.data)}
            onChange={( event, editor ) => setEditortxt3( editor.getData() )} // gem editoren data/tekst i state ( som bruges af textarea)
          />
          </label>
          <br/> 
          <label>Travel date <br/>
              <input type="date" name="traveldate" defaultValue={tour.traveldate}/>
          </label>
          <br/> 
          <label>Duration <br/>
              <input type="text" name="duration" defaultValue={tour.duration}/>
          </label>
          <br/> 
          <label>Priceminium <br/>
              <input type="text" name="priceminimum" defaultValue={tour.priceminimum} />
          </label>
          <br/> 
          <label>Pricemaximum <br/>
              <input type="text" name="pricemaximum" defaultValue={tour.pricemaximum} />
          </label>
          <br/> 
          <label>Rating <br/>
              <input type="number" name="rating" defaultValue={tour.rating} />
          </label>
          <br/> 
          
         
          {/* </label> */}

          <br/> <br/>
          <div>
                <h4>Nuværende billede cover billede:
                    <img src={"http://localhost:5099/images/tours/" + tour.coverimage } alt="Nuværende cover billede" width="200"/>
                </h4>
            </div>

          <label> Vælg et nyt billede <br/>
              <input type="file" name="image" onChange={ (e) => setThumb(e.target.files[0])}  />
              {
                  // Vis thumb-image med brug af custom hook
                  thumb && <img src={thumb} width="100" alt="Thumb" />
              }
          </label>
          <br/>
        
      
           
            <br/>
          <label> Vælg et 3 nye gallery billeder <br/>
              <input type="file" name="galleryimages" multiple onChange={ (e) => setThumb3(e.target.files[0, 1, 2])}  />
              {
                  // Vis thumb-image med brug af custom hook
                  thumb3 && <img src={thumb3} width="100" alt="Thumb" />
              }
          </label>

          <br/> <br/>

          <button type="submit" >Ret tour</button>
      </form>
}
{
        loading && <h1>Loading ...</h1>
      }

      {
        fejl && <h1>Der er opstået en fejl ...</h1>
      }
  </div>
  
  )
}

export default AdminToursRet;
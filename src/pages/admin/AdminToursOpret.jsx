import React, {useState, useEffect} from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// Customhook som viser thumbimage
import useShowThumb from '../../hooks/useShowThumb';
import { opretTour } from '../../helpers/apikald';

const AdminToursOpret = () => {

 

  // STATES

const [fejl, setFejl] = useState();
const [loading, setLoading] = useState();
const [besked, setBesked] = useState();

// CKEditor-tekst (tekst fra CKEditor - hentes her fra state til textarea)
const [ editortxt, setEditortxt ] = useState ();
const [ editortxt2, setEditortxt2] = useState ();
const [ editortxt3, setEditortxt3] = useState ();

// "State" til customhook - thumb-image
const [thumb, setThumb] = useShowThumb();
const [thumb3, setThumb3] = useShowThumb();


  const handleSubmit = (e) => {
  
      e.preventDefault();

       // Sende/post tour til API
const tour = new FormData(e.target) // e.target er formularens indhold

setLoading(true);

// Send tour til apikaldsfilen -> api'et
opretTour(tour).then(response => {

  if(response){

  
    setBesked("Ny tour er opretet")
    setFejl();
    // tøm formularen
    e.target.reset();
    //tøm state så editor også tømmes
    setEditortxt("");
    setEditortxt2("");
    setEditortxt3("");
    //tøm thumb
    setThumb();
    setThumb3()
  }else {
   // FEJL
   setFejl(true);
   setBesked();
  }

  setLoading(false)

})

  }


return (
  <div className="text-center">

      <h1>Opret/lav en ny tour</h1>

      {besked && <h2 className="alert">{besked}</h2>}

      <form onSubmit={handleSubmit}>
          <label>Titel <br/>
              <input type="text" required name="title" />
          </label>
          <br/> <br/>
     <label>Teaser
           <textarea  name="teaser" required defaultValue={ editortxt }   style={{ display: "none" } } />
          <CKEditor
          editor={ Editor }
          data={ editortxt}
          onChange={( event, editor ) => {
              const data = editor.getData();
              setEditortxt( data );
          }}
          />
          </label>
          <br/> <br/>
          <label> Content
             <textarea  name="content" required defaultValue={ editortxt2 } style={{ display: "none" } } />
          <CKEditor
          editor={ Editor }
          data={ editortxt2}
          onChange={( event, editor ) => {
              const data = editor.getData();
              setEditortxt2( data );
          }}
          />
          </label>
          <br/> 
          <label>Roomtype <br/>
              <textarea  name="roomtype" required defaultValue={ editortxt3 } style={{ display: "none" } } />
          <CKEditor
          editor={ Editor }
          data={ editortxt3}
          onChange={( event, editor ) => {
              const data = editor.getData();
              setEditortxt3( data );
          }}
          />
          </label>
          <br/> 
          <label>Travel date <br/>
              <input type="date" required name="traveldate" />
          </label>
          <br/> 
          <label>Duration <br/>
              <input type="number" required name="duration" />
          </label>
          <br/> 
          <label>Priceminium <br/>
              <input type="number" required name="priceminimum" />
          </label>
          <br/> 
          <label>Pricemaximum <br/>
              <input type="number" required name="pricemaximum" />
          </label>
          <br/> 
          <label>Rating <br/>
              <input type="number" required name="rating" />
          </label>
          <br/> 
          
         
          {/* </label> */}

          <br/> <br/>

          <label> Vælg et billede <br/>
              <input type="file" name="image" required onChange={ (e) => setThumb(e.target.files[0])}  />
              {
                  // Vis thumb-image med brug af custom hook
                  thumb && <img src={thumb} width="100" alt="Thumb" />
              }
          </label>
          <br/>
          <label> Vælg et billede <br/>
              <input type="file" name="galleryimages" required multiple onChange={ (e) => setThumb3(e.target.files[0])}  />
              {
                  // Vis thumb-image med brug af custom hook
                  thumb3 && <img src={thumb3} width="100" alt="Thumb" />
              }
          </label>

          <br/> <br/>

          <button type="submit" >Opret Tour</button>
      </form>
      {
        loading && <h1>Loading ...</h1>
      }

      {
        fejl && <h1>Din tour kunne ikke oprettes. Noget gik galt...</h1>
      }

  </div>
)
}

export default AdminToursOpret;
import React, {useState, useEffect} from 'react';
import { Col, Container, Row} from 'react-bootstrap';

import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser'; 

// Customhook som viser thumbimage
import useShowThumb from '../../hooks/useShowThumb';

// APIKALD
import {retAbout, hentAbout} from '../../helpers/apikald';

const AdminAboutRet = () => {

     // Snup id fra url'en - så vi ved hvilken treatment der skal indlæses i formularen/rettes
     const {id} = useParams();

     // STATE
 const [about, setAbout] = useState(); // tour der skal rettes
 const [fejl, setFejl] = useState(false);
 const [loading, setLoading] = useState( false );
 const [besked, setBesked] = useState();
 const [ updatetoggle, setUpdatetoggle] = useState(false);

 const [ editortxt4, setEditortxt4] = useState ();


  // "State" til customhook - thumb-image
const [thumb, setThumb] = useShowThumb();
    

   // Når comp er loadet og klar
   useEffect(() => {
   
    setLoading(true)

    hentAbout().then( response => {
      if ( response ) {

        setAbout(response)
        setFejl(false)

      } else {
        
        setFejl(true);
        setAbout();
      }

      setLoading(false);
    })
    
  }, [updatetoggle])

  const handleSubmit = (e) => {

    e.preventDefault(); // undgå reload af siden


// Send/post about til API
const aboutret = new FormData(e.target) // e.target er formularens indhold

setLoading(true);

// Send about til apikaldsfilen -> api'et
retAbout(aboutret ).then(response => {

if(response){


 setBesked("About er nu rettet");
 setUpdatetoggle(!updatetoggle); // sæt updatetoggle-state til at være modsatdet den er nu = ændre sig
 e.target.reset(); // nulstil formular
 setThumb(); // tøm thumb-image for indhold
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
{ about && 
<form onSubmit={handleSubmit}>
<label>Titel <br/>
              <input type="text" name="title" defaultValue={about.title} />
          </label>
          <br/> <br/>

<label>About Content
           <textarea name="content" defaultValue={ editortxt4 }   style={{ display: "none" } } />
           <CKEditor
            editor={ Editor }
            data={ about.content } // data der skal være i editoren når den loader/opdaterer
            onReady={ (editor) => setEditortxt4(editor.data)}
            onChange={( event, editor ) => setEditortxt4( editor.getData() )} // gem editoren data/tekst i state ( som bruges af textarea)
            
            />
          </label>

         
            
              <div>
                <h4>Nuværende billede cover billede:
                    <img src={"http://localhost:5099/images/about/" + about.image } alt="Nuværende cover billede" width="200"/>
                </h4>
            </div>
           
          <label> Vælg et nyt billede <br/>
              <input type="file" name="image" onChange={ (e) => setThumb(e.target.files[0])}  />
              {
                  // Vis thumb-image med brug af custom hook
                  thumb && <img src={thumb} width="100" alt="Thumb" />
              }
          </label>
          <br/>   <br/> 
          <button type="submit" >Ret About</button>
           
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

export default AdminAboutRet;
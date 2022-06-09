import axios from 'axios'

// BASE URL
const api = {
    baseUrl: 'http://localhost:5099/',
    imageUrl: 'http://localhost:5099/images/'
}

export let imageUrl = api.imageUrl;


// ---------- ABOUT
// -------------------------------------------------------------

// Hent about - GET http://localhost:5099/about
export const hentAbout = async () => {

    let res = await axios.get( api.baseUrl + "about" )
     .then( res => { return res.data } )
     .catch( error => { return null } )

     return res; //returnerer data eller null (error)
}

// PUT http://localhost:5099/about/admin
export const retAbout = async (  retabout) => {

    let res = await axios.put( api.baseUrl + "about/admin/", retabout )
     .then( res => { return res.data } )
     .catch( error => { return null } )

     return res; //returnerer data eller null (error)
}

// Hent tours - GET http://localhost:5099/tours/teaser
export const hentAlleToursTeaser = async () => {

    let res = await axios.get( api.baseUrl + "tours/teaser" )
     .then( res => { return res.data } )
     .catch( error => { return null } )

     return res; //returnerer data eller null (error)
}

// Hent tours - GET http://localhost:5099/tours
export const hentAlleTours = async () => {

    let res = await axios.get( api.baseUrl + "tours" )
     .then( res => { return res.data } )
     .catch( error => { return null } )

     return res; //returnerer data eller null (error)
}

// DELETE http://localhost:5099/tours/admin/xxxxxxxxxxxxxxxxxxxxx
export const sletTour = async (id) => {

    let res = await axios.delete( api.baseUrl + "tours/admin/" + id )
     .then( res => { return res.data } )
     .catch( error => { return null } )

     return res; //returnerer data eller null (error)
}
// GET http://localhost:5099/tours/xxxxxxxxxxxxxxxxxxxxx
export const hentToursUdFraId = async (id) => {

    let res = await axios.get( api.baseUrl + "tours/" + id )
     .then( res => { return res.data } )
     .catch( error => { return null } )

     return res; //returnerer data eller null (error)
}

// PUT http://localhost:5099/tours/admin/xxxxxxxxxxxxxxxxxxxxx
export const retTour = async ( id, rettettour) => {

    let res = await axios.put( api.baseUrl + "tours/admin/" + id, rettettour )
     .then( res => { return res.data } )
     .catch( error => { return null } )

     return res; //returnerer data eller null (error)
}

// Hent kontakt - GET http://localhost:5099/contactinformation
export const hentKontaktInformation = async () => {

    let res = await axios.get( api.baseUrl + "contactinformation" )
     .then( res => { return res.data } )
     .catch( error => { return null } )

     return res; //returnerer data eller null (error)
}

// Hent footer - GET http://localhost:5099/footer
export const hentFooter = async () => {

    let res = await axios.get( api.baseUrl + "footer" )
     .then( res => { return res.data } )
     .catch( error => { return null } )

     return res; //returnerer data eller null (error)
}

// POST - http://localhost:5099/contact
export const sendBesked = async (nybesked) => {

    let res = await axios.post( api.baseUrl + "contact", nybesked )
     .then( res => { return res.data } )
     .catch( error => { return null } )

     return res; //returnerer data eller null (error)
}
// GET beskeder - GET http://localhost:5099/contact/admin
export const hentAlleBeskeder = async () => {

    let res = await axios.get( api.baseUrl + "contact/admin" )
     .then( res => { return res.data } )
     .catch( error => { return null } )

     return res; //returnerer data eller null (error)
}

// DELETE http://localhost:5099/contact/admin/xxxxxxxxxxxxxxxxxxxxx
export const sletBesked = async (id) => {

    let res = await axios.delete( api.baseUrl + "contact/admin/" + id )
     .then( res => { return res.data } )
     .catch( error => { return null } )

     return res; //returnerer data eller null (error)
}

// POST - http://localhost:5099/tours/admin
export const opretTour = async (nytour) => {

    let res = await axios.post( api.baseUrl + "tours/admin", nytour )
     .then( res => { return res.data } )
     .catch( error => { return null } )

     return res; //returnerer data eller null (error)
}

//  POST - http://localhost:5099/newssubscription
export const opretSubscription = async (nysubscription) => {

    let res = await axios.post( api.baseUrl + "newssubscription", nysubscription )
     .then( res => { return res.data } )
     .catch( error => { return null } )

     return res; //returnerer data eller null (error)
}

// DELETE http://localhost:5099/newssubscription/afmeld
export const sletMail = async (brugerensmail) => {
 
    const res = await axios.delete(api.baseUrl+ "newssubscription/afmeld", { data: { email: brugerensmail } })

     .then( res => { return res.data } )
     .catch( error => { return null } )

     return res; //returnerer data eller null (error)
}

// DELETE http://localhost:5099/newssubscription/admin/xxxxxxxxxxxxxxxxxxxxx
export const sletNewsletterMail = async (id) => {

    let res = await axios.delete( api.baseUrl + "newssubscription/admin/" + id )
     .then( res => { return res.data } )
     .catch( error => { return null } )

     return res; //returnerer data eller null (error)
}

// GET http://localhost:5099/newssubscription/admin
export const hentAlleEmails = async () => {

    let res = await axios.get( api.baseUrl + "newssubscription/admin" )
     .then( res => { return res.data } )
     .catch( error => { return null } )

     return res; //returnerer data eller null (error)
}

// PUT http://localhost:5099/contactinformation/admin
export const retContactInformation = async (  contactinformationret) => {

    let res = await axios.put( api.baseUrl + "contactinformation/admin", contactinformationret )
     .then( res => { return res.data } )
     .catch( error => { return null } )

     return res; //returnerer data eller null (error)
}

// PUT http://localhost:5099/footer/admin
export const retFooter = async (  footertxt) => {

    let res = await axios.put( api.baseUrl + "footer/admin", footertxt )
     .then( res => { return res.data } )
     .catch( error => { return null } )

     return res; //returnerer data eller null (error)
}



import React from 'react';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';

// PAGES
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';


// ADMIN PAGES
import AdminToursOpret from './pages/admin/AdminToursOpret';
import AdminToursRet from './pages/admin/AdminToursRet';
import AdminTours from './pages/admin/AdminTours';
import AdminLayout from './layout/AdminLayout';
import AdminHome from './pages/admin/AdminHome';
import AdminAboutRet from './pages/admin/AdminAboutRet';
import AdminContactSlet from './pages/admin/AdminContactSlet';
import AdminNewsletter from './pages/admin/AdminNewsletter';
import AdminContactInformation from './pages/admin/AdminContactInformation';
import AdminFooterRet from './pages/admin/AdminFooterRet';

// LAYOUT
import Layout from './layout/Layout';


// COMPONENTS
import About from './components/About';
import Kontakt from './components/Kontakt';
import Produkter from './components/Produkter';

import {Container} from 'react-bootstrap';


// CSS & SASS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';



const App = () => {
  return (

  <BrowserRouter>
    <div className="App outer-container">
   
      <Routes>

{/* PUBLIC */ }
<Route path="/" element={ <Layout /> } >
  <Route index element={ <Home /> } />

  {/* Routes udover home/startsiden - men med samme layout som startsiden */}
  <Route path="*" element={ <NoMatch /> } />
  
</Route>


{/* ADMIN-routes  */ }
<Route path="/admin" element={ <AdminLayout /> } >
  <Route index element={ <AdminHome /> } />
  <Route path="/admin/admintours" element={ <AdminTours /> } />
  <Route path="/admin/admintoursopret" element={ <AdminToursOpret /> } />
  <Route path="/admin/admintoursret/:id" element={ <AdminToursRet /> } />
  <Route path="/admin/adminaboutret" element={ <AdminAboutRet /> } />
  <Route path="/admin/admincontactslet" element={ <AdminContactSlet /> } />
  <Route path="/admin/admincontactinformationslet" element={ <AdminContactInformation /> } />
  <Route path="/admin/adminnewsletterslet" element={ <AdminNewsletter /> } />
  <Route path="/admin/adminfooterret" element={ <AdminFooterRet /> } />
  <Route path="*" element={ <NoMatch /> } />
</Route>

</Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;

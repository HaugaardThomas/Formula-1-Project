import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom'
import AdminNavbar from './AdminNavbar.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../layout/Footer';


const AdminLayout = ( { children } ) => {



    return (
        <>
       
            <header>
                <AdminNavbar />
            </header>

            {/* Outlet "sendes til/vises i" Home-component */}
            <Outlet />

            <footer>
                <Footer />
            </footer>
        </>
    )

};

export default AdminLayout;
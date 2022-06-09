import React from 'react'
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';

const Layout = () => {
    return (
        <>
        <header>
            <Header/>
        </header>
        
                <Navbar />
            

            {/* Outlet "sendes til/vises i" Home-component */}
            <Outlet />

            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default Layout;
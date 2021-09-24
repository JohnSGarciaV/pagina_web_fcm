import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar';
import React from 'react';

const Layout =({children}) =>{
    return(
        <div>
            <Header/>
            <Sidebar/>
            <main>{children}</main>
            <Footer/>
            
        </div>
    );
};

export default Layout;
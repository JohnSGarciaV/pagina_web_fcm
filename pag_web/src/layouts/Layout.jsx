import Header from 'Components/Header';
import Footer from 'Components/Footer';
import React from 'react';

const Layout =({children}) =>{
    return(
        <div>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
};
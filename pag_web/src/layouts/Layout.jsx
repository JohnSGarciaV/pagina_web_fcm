import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar';
import React from 'react';

const Layout =({children}) =>{
    return(
        <div className="containerMain">
            <Header/>
            <Sidebar/>
            <main >
                {children}
            </main>
           
            
        </div>
    );
};

export default Layout;
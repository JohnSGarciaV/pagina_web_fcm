import React from 'react';

const Layout =({children}) =>{
    return(
            <div style={{backgroundColor:"#6DF6DD", margin:0, padding:0, width:"100%", height:"100vh"}}>
                {children}
            </div>
           
    );
};

export default Layout;
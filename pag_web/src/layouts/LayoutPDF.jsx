import React from 'react';
import '../styles/stylespdf.css';

const LayoutPDF =({children}) =>{
    return(
        <div>
            <main className="contenedor">
                {children}
            </main>
        </div>
    );
};

export default LayoutPDF;
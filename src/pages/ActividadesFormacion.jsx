import {TablaActividadesVoluntariado } from "../Components/tablasActividades";
import 'bootstrap/dist/css/bootstrap.min.css';


const ActividadesVoluntariado = () =>{   
   return (
          <div style={{height:"90vh", overflowY:"scroll"}}>
                <div style={{ padding: 20 }}>
                    <h5>ACTIVIDADES DE VOLUNTARIADO</h5>
                    <TablaActividadesVoluntariado />
                </div>
            </div>
   )

}

export default ActividadesVoluntariado;

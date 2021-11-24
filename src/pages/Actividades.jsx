import React, { useState } from "react";
import { TablaActividadesFormacion, TablaActividadesVoluntariado } from "../Components/tablasActividades";
import 'bootstrap/dist/css/bootstrap.min.css';


const Actividades = () =>{
   const[actividadesV, setActividadesV]= useState([{proyecto:"P1",beneficiarios:"Familia X", nbeneficiarios:"5", duracion:"5", nparticipantes:"10",estado:"Finalizada"}])
   const[actividadesF, setActividadesF]= useState([{tipo:"Ambiental",nombre:"Ambiental X", duracion:"5", nparticipantes:"10"}])
   
   return (
       <div>
          <div style={{height:"90vh", overflowY:"scroll"}}>
                <div style={{ padding: 20 }}>
                    <h5>ACTIVIDADES DE VOLUNTARIADO</h5>
                    <TablaActividadesVoluntariado actividades={actividadesV} setActividades={setActividadesV} />
                </div>

                <div style={{ padding: 20 }}>
                    <h5>ACTIVIDADES DE FORMACIÓN</h5>
                    <TablaActividadesFormacion actividades={actividadesF} setActividades={setActividadesF} />
                </div>
            </div>
       </div>
   )

}

export default Actividades;